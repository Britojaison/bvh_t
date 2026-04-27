import csv
import json

ts_path = r'src\data\hospital-trials.ts'
csv_path = r'public\documents\Hospital Initiated Studies(Sheet 1).csv'

# Read TS data
with open(ts_path, mode='r', encoding='utf-8') as f:
    content = f.read()
import re
match = re.search(r'export const hospitalTrials = \[(.*)\];', content, re.DOTALL)
data_str = match.group(1)
data_str = re.sub(r',\s*([\]}])', r'\1', data_str)
trials = json.loads('[' + data_str + ']')

# Define fieldnames exactly as they were in the original CSV
fieldnames = ['Sr. No', 'Study No.', 'Study Title', 'Principle Investigator', 'Current Status', 'Publication ']

# Prepare data for CSV
csv_data = []
for t in trials:
    row = {
        'Sr. No': t.get('sr'),
        'Study No.': t.get('studyNo'),
        'Study Title': t.get('title'),
        'Principle Investigator': t.get('pi'),
        'Current Status': t.get('status'),
        'Publication ': t.get('publication')
    }
    csv_data.append(row)

# Write to CSV
with open(csv_path, mode='w', encoding='utf-8-sig', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(csv_data)

print(f"Regenerated CSV with {len(csv_data)} entries.")
