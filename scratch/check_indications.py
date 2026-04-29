import csv

csv_path = r'public/documents/Pharma Sponsored Trials(Studies).csv'

f = open(csv_path, 'r', encoding='utf-8-sig')
reader = csv.reader(f)
header = next(reader)

# Find column indices
print("Headers:", header[:12])

rows = list(reader)
f.close()

# Check indications and sub-indications for all rows
print(f"\nTotal rows: {len(rows)}")
print("\nRows with Indications data:")
for row in rows:
    sr = row[0].strip()
    indications = row[7].strip() if len(row) > 7 else ""
    sub_ind = row[8].strip() if len(row) > 8 else ""
    if indications or sub_ind:
        print(f"  Sr {sr}: Indications='{indications}', Sub-Indications='{sub_ind}'")

print("\nRows WITHOUT Indications data:")
count_empty = 0
for row in rows:
    sr = row[0].strip()
    indications = row[7].strip() if len(row) > 7 else ""
    if not indications:
        count_empty += 1
print(f"  {count_empty} rows have empty Indications")
