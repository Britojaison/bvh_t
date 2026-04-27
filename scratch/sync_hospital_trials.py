import csv
import re
import json

csv_path = r'public\documents\Hospital Initiated Studies(Sheet 1).csv'
ts_path = r'src\data\hospital-trials.ts'

def parse_csv(path):
    trials = []
    with open(path, mode='r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        for row in reader:
            trials.append(row)
    return trials, fieldnames

def parse_ts(path):
    with open(path, mode='r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'export const hospitalTrials = \[(.*)\];', content, re.DOTALL)
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
    if name == 'Sr': return get_fn('Sr. No')
    if name == 'title': return get_fn('Study Title')
    if name == 'status': return get_fn('Current Status')
    if name == 'pi': return get_fn('Principle Investigator')
    return fn_map.get(name, name)

# Specific cleanup for known mangled rows
def cleanup_entry(item, is_csv=False):
    title_key = get_fn('Study Title') if is_csv else 'title'
    pi_key = get_fn('Principle Investigator') if is_csv else 'pi'
    
    title = item.get(title_key, '')
    pi = item.get(pi_key, '')
    
    if not pi or pi.strip() == "":
        # Case like Sr 24: "... Research Institute .Papiya Sanyal"
        if '.' in title:
            parts = title.split('.')
            last_part = parts[-1].strip()
            # If last part looks like a name (2-3 words, capitalized)
            words = last_part.split()
            if 1 <= len(words) <= 3 and all(w[0].isupper() for w in words if w):
                item[pi_key] = last_part
                item[title_key] = ".".join(parts[:-1]).strip()
        
        # Case like Sr 25: "... Institute.Aleya Sanyal" (no space before dot)
        elif title.endswith(tuple([' Sanyal', ' Dalal', ' Shah', ' Raut'])):
            # Hardcoded fix for these common names if they are stuck to the title
            match = re.search(r'([A-Z][a-z]+ [A-Z][a-z]+)$', title)
            if match:
                item[pi_key] = match.group(1)
                item[title_key] = title[:match.start()].strip().rstrip('.')

for row in csv_trials:
    cleanup_entry(row, is_csv=True)

updated_ts_trials = []
for ts_trial in ts_trials:
    new_trial = ts_trial.copy()
    cleanup_entry(new_trial, is_csv=False)
    updated_ts_trials.append(new_trial)

# Write back CSV
with open(csv_path, mode='w', encoding='utf-8-sig', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=csv_fieldnames)
    writer.writeheader()
    writer.writerows(csv_trials)

# Write back TS
new_data_json = json.dumps(updated_ts_trials, indent=2)
new_data_str = "export const hospitalTrials = " + new_data_json + ";"
new_ts_content = re.sub(r'export const hospitalTrials = \[.*?\];', lambda m: new_data_str, ts_content, flags=re.DOTALL)

with open(ts_path, mode='w', encoding='utf-8') as f:
    f.write(new_ts_content)

print("Final Cleanup complete.")
