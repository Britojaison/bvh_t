import csv
import json
import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

csv_path = r'public/documents/Pharma Sponsored Trials(Studies).csv'
ts_path = r'src/data/pharma-trials.ts'

# Read CSV Sr -> StudyNo mapping
csv_map = {}
f = open(csv_path, 'r', encoding='utf-8-sig')
reader = csv.reader(f)
next(reader)
for row in reader:
    sr = row[0].strip()
    sno = row[1].strip() if len(row) > 1 else ""
    if sr:
        csv_map[sr] = sno
f.close()

# Read TS Sr -> StudyNo mapping
ts_map = {}
with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()
srs = re.findall(r'"sr":\s*"([^"]*)"', content)
snos = re.findall(r'"studyNo":\s*"([^"]*)"', content)
for sr, sno in zip(srs, snos):
    ts_map[sr] = sno

# Compare
print("MISMATCHES (Sr in TS but not in CSV):")
for sr in sorted(ts_map.keys(), key=lambda x: int(x)):
    if sr not in csv_map:
        print(f"  Sr {sr}: TS has StudyNo={ts_map[sr]} -- NOT IN CSV")

print("\nMISMATCHES (StudyNo differs between TS and CSV):")
for sr in sorted(ts_map.keys(), key=lambda x: int(x)):
    if sr in csv_map and ts_map[sr] != csv_map[sr]:
        print(f"  Sr {sr}: TS={ts_map[sr]}, CSV={csv_map[sr]}")

print(f"\nCSV total: {len(csv_map)}")
print(f"TS total: {len(ts_map)}")

# Show CSV Sr numbers
csv_srs = sorted(csv_map.keys(), key=lambda x: int(x))
ts_srs = sorted(ts_map.keys(), key=lambda x: int(x))
print(f"\nCSV Sr numbers: {csv_srs}")
print(f"\nTS  Sr numbers: {ts_srs}")

in_ts_not_csv = set(ts_srs) - set(csv_srs)
in_csv_not_ts = set(csv_srs) - set(ts_srs)
print(f"\nIn TS but not CSV: {sorted(in_ts_not_csv, key=int) if in_ts_not_csv else 'None'}")
print(f"In CSV but not TS: {sorted(in_csv_not_ts, key=int) if in_csv_not_ts else 'None'}")
