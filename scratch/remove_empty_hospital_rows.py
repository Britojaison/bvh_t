import json
import os

ts_path = r'src/data/hospital-trials.ts'

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract JSON
json_str = content[content.find('['):content.rfind(']')+1]
data = json.loads(json_str)

# Filter out empty rows (where title, pi, studyNo, and status are all empty)
valid_data = []
for row in data:
    if row.get('title') or row.get('pi') or row.get('studyNo') or row.get('status'):
        valid_data.append(row)

# Re-write TS file
ts_content = "export const hospitalTrials = " + json.dumps(valid_data, indent=2) + ";"
with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Removed {len(data) - len(valid_data)} empty rows. Total valid rows: {len(valid_data)}")
