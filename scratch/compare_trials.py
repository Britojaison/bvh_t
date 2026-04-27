import csv
import re
import json

csv_path = r'public\documents\Pharma Sponsored Trials(Studies).csv'
ts_path = r'src\data\pharma-trials.ts'

def parse_csv(path):
    trials = []
    with open(path, mode='r', encoding='latin-1') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Clean up keys because there might be trailing spaces
            clean_row = {k.strip(): v.strip() if v else "" for k, v in row.items() if k}
            trials.append(clean_row)
    return trials

def parse_ts(path):
    with open(path, mode='r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find the array content
    match = re.search(r'export const pharmaTrials = \[(.*)\];', content, re.DOTALL)
    if not match:
        return []
    
    # Try to parse it as JSON (with some fixes for trailing commas and single quotes)
    data_str = match.group(1)
    # This is a bit risky for complex TS, but let's try
    # Replace single quotes with double quotes (assuming they are used for keys/values)
    # Actually, the file uses double quotes.
    # Remove trailing commas before ] or }
    data_str = re.sub(r',\s*([\]}])', r'\1', data_str)
    try:
        return json.loads('[' + data_str + ']')
    except Exception as e:
        print(f"Error parsing TS: {e}")
        # Fallback to a more robust parser if needed, or just print the raw strings for comparison
        return []

csv_trials = parse_csv(csv_path)
ts_trials = parse_ts(ts_path)

print(f"CSV count: {len(csv_trials)}")
print(f"TS count: {len(ts_trials)}")

# Create sets of Study No for comparison
csv_study_nos = set(t.get('Study No.', '') for t in csv_trials)
ts_study_nos = set(t.get('studyNo', '') for t in ts_trials)

missing_in_csv = [t for t in ts_trials if t.get('studyNo') not in csv_study_nos]
missing_in_ts = [t for t in csv_trials if t.get('Study No.') not in ts_study_nos]

print(f"\nMissing in CSV (present in TS): {len(missing_in_csv)}")
for t in missing_in_csv[:10]:
    print(f"{t.get('sr')}: {t.get('studyNo')}")

print(f"\nMissing in TS (present in CSV): {len(missing_in_ts)}")
for t in missing_in_ts[:10]:
    print(f"{t.get('Sr')}: {t.get('Study No.')}")

# Specific check for Sr 7
sr7_ts = next((t for t in ts_trials if t.get('sr') == '7'), None)
print(f"\nSr 7 in TS: {sr7_ts}")
