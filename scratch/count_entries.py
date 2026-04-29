f = open('src/data/pharma-trials.ts', 'r', encoding='utf-8')
c = f.read()
f.close()

count = c.count('"sr"')
print(f"Number of entries in pharma-trials.ts: {count}")

# Also check what the last sr value is
import re
srs = re.findall(r'"sr":\s*"(\d+)"', c)
print(f"Sr values: {srs}")
print(f"Last sr: {srs[-1] if srs else 'none'}")

# Count CSV rows
import csv
f2 = open('public/documents/Pharma Sponsored Trials(Studies).csv', 'r', encoding='utf-8-sig')
reader = csv.reader(f2)
header = next(reader)
rows = [r for r in reader if r and r[0].strip()]
f2.close()
print(f"Number of data rows in CSV (with non-empty first col): {len(rows)}")
print(f"Sr values in CSV: {[r[0] for r in rows]}")
