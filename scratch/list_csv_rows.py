import csv
import sys
sys.stdout.reconfigure(encoding='utf-8')

csv_path = r'public/documents/Pharma Sponsored Trials(Studies).csv'

f = open(csv_path, 'r', encoding='utf-8-sig')
reader = csv.reader(f)
header = next(reader)

print("CSV rows with Sr and Study No:")
print("-" * 60)
for i, row in enumerate(reader, 1):
    sr = row[0].strip()
    study_no = row[1].strip() if len(row) > 1 else ""
    print(f"Row {i:3d}: Sr={sr:4s} | StudyNo={study_no}")

f.close()
