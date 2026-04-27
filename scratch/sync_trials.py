import csv
import re
import json

csv_path = r'public\documents\Pharma Sponsored Trials(Studies).csv'
ts_path = r'src\data\pharma-trials.ts'

def parse_csv(path):
    trials = []
    # Use latin-1 for reading if it's original, but we just wrote it as utf-8-sig
    # Let's try utf-8-sig first, then fallback
    try:
        with open(path, mode='r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            fieldnames = reader.fieldnames
            for row in reader:
                trials.append(row)
    except UnicodeDecodeError:
        with open(path, mode='r', encoding='latin-1') as f:
            reader = csv.DictReader(f)
            fieldnames = reader.fieldnames
            for row in reader:
                trials.append(row)
    return trials, fieldnames

def parse_ts(path):
    with open(path, mode='r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'export const pharmaTrials = \[(.*)\];', content, re.DOTALL)
    if not match:
        return [], content
    
    data_str = match.group(1)
    data_str = re.sub(r',\s*([\]}])', r'\1', data_str)
    try:
        data = json.loads('[' + data_str + ']')
        return data, content
    except Exception as e:
        print(f"Error parsing TS: {e}")
        return [], content

csv_trials, csv_fieldnames = parse_csv(csv_path)
ts_trials, ts_content = parse_ts(ts_path)

fn_map = { fn.strip(): fn for fn in csv_fieldnames if fn }
def get_fn(name):
    return fn_map.get(name, name)

def clean_mangled(row_or_trial, is_csv=False):
    pi_key = get_fn('Principle Investigator') if is_csv else 'pi'
    status_key = get_fn('Status') if is_csv else 'status'
    dept_key = get_fn('Department') if is_csv else 'department'
    
    pi_val = row_or_trial.get(pi_key, '')
    if not pi_val: return
    
    for term in ['Ongoing', 'Completed', 'Withdrawn']:
        if term in pi_val:
            # Extract status if missing
            if not row_or_trial.get(status_key) or row_or_trial.get(status_key) == "":
                row_or_trial[status_key] = term
            
            # Extract department (anything after the term)
            parts = pi_val.split(term)
            if len(parts) > 1:
                dept = parts[1].strip()
                if dept and (not row_or_trial.get(dept_key) or row_or_trial.get(dept_key) == ""):
                    row_or_trial[dept_key] = dept
                    if is_csv: row_or_trial[get_fn('Name of Department')] = dept
            
            # Clean up PI
            row_or_trial[pi_key] = parts[0].strip()
            break

# Create mapping for easier access
csv_map = {t.get(get_fn('Study No.')): t for t in csv_trials}

# 1. Update CSV with missing studies from TS
for ts_trial in ts_trials:
    sno = ts_trial.get('studyNo')
    if sno not in csv_map:
        new_row = {fn: "" for fn in csv_fieldnames}
        new_row[get_fn('Sr')] = ts_trial.get('sr')
        new_row[get_fn('Study No.')] = sno
        new_row[get_fn('Title Of Study')] = ts_trial.get('title')
        new_row[get_fn('Principle Investigator')] = ts_trial.get('pi')
        new_row[get_fn('Status')] = ts_trial.get('status')
        new_row[get_fn('Department')] = ts_trial.get('department')
        new_row[get_fn('Name of Department')] = ts_trial.get('department')
        csv_trials.append(new_row)
        csv_map[sno] = new_row
    else:
        csv_row = csv_map[sno]
        if ts_trial.get('status') and not csv_row.get(get_fn('Status')):
            csv_row[get_fn('Status')] = ts_trial.get('status')

# 2. Cleanup mangled data in both
for row in csv_trials:
    clean_mangled(row, is_csv=True)

updated_ts_trials = []
for ts_trial in ts_trials:
    new_trial = ts_trial.copy()
    sno = new_trial.get('studyNo')
    if sno in csv_map:
        csv_row = csv_map[sno]
        # Sync status/dept from CSV if now cleaned
        if csv_row.get(get_fn('Status')) and not new_trial.get('status'):
            new_trial['status'] = csv_row.get(get_fn('Status'))
        if csv_row.get(get_fn('Department')) and not new_trial.get('department'):
            new_trial['department'] = csv_row.get(get_fn('Department'))
    
    clean_mangled(new_trial, is_csv=False)
    updated_ts_trials.append(new_trial)

# Sort CSV
def sr_sort_key(t):
    try:
        val = t.get(get_fn('Sr'), '0')
        return int(val) if val else 0
    except:
        return 0
csv_trials.sort(key=sr_sort_key)

# 3. Write back CSV
with open(csv_path, mode='w', encoding='utf-8-sig', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=csv_fieldnames)
    writer.writeheader()
    writer.writerows(csv_trials)

# 4. Write back TS
new_data_json = json.dumps(updated_ts_trials, indent=2)
new_data_str = "export const pharmaTrials = " + new_data_json + ";"
new_ts_content = re.sub(r'export const pharmaTrials = \[.*?\];', lambda m: new_data_str, ts_content, flags=re.DOTALL)

with open(ts_path, mode='w', encoding='utf-8') as f:
    f.write(new_ts_content)

print("Sync and Cleanup complete.")
