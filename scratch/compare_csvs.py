import csv
import sys
sys.stdout.reconfigure(encoding='utf-8')

old_csv = r'public/documents/Pharma Sponsored Trials(Studies).csv'
new_csv = r'public/images/bvh/csv/Pharma Sponsored Trials(Studies).csv'

def read_csv(path):
    rows = []
    try:
        f = open(path, 'r', encoding='utf-8-sig')
        reader = csv.reader(f)
        header = next(reader)
        for row in reader:
            sr = row[0].strip()
            sno = row[1].strip() if len(row) > 1 else ""
            if sr:
                rows.append((sr, sno))
    except UnicodeDecodeError:
        f.close()
        f = open(path, 'r', encoding='latin-1')
        reader = csv.reader(f)
        header = next(reader)
        for row in reader:
            sr = row[0].strip()
            sno = row[1].strip() if len(row) > 1 else ""
            if sr:
                rows.append((sr, sno))
    f.close()
    return header, rows

old_header, old_rows = read_csv(old_csv)
new_header, new_rows = read_csv(new_csv)

print(f"OLD CSV (public/documents): {len(old_rows)} rows")
print(f"NEW CSV (public/images/bvh/csv): {len(new_rows)} rows")

old_srs = set(sr for sr, _ in old_rows)
new_srs = set(sr for sr, _ in new_rows)

in_old_not_new = sorted([int(s) for s in old_srs - new_srs])
in_new_not_old = sorted([int(s) for s in new_srs - old_srs])

print(f"\nIn OLD but NOT in NEW: {in_old_not_new}")
print(f"In NEW but NOT in OLD: {in_new_not_old}")

print(f"\nNEW CSV headers: {new_header[:12]}")

print(f"\nNEW CSV rows:")
for sr, sno in new_rows:
    print(f"  Sr={sr:4s} | StudyNo={sno}")
