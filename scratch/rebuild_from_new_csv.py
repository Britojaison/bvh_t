import csv
import json
import sys

csv_path = r'public/images/bvh/csv/Pharma Sponsored Trials(Studies).csv'
ts_path = r'src/data/pharma-trials.ts'

def clean_text(text):
    if not text: return ""
    text = text.replace('\x93', '"').replace('\x94', '"').replace('\x92', "'").replace('\xae', '(R)')
    text = text.replace('\r\n', ' ').replace('\n', ' ')
    return text.strip()

def process():
    trials = []
    f = open(csv_path, 'r', encoding='latin-1')
    reader = csv.reader(f)
    header = next(reader)
    
    # Map header names (strip whitespace)
    h = [h.strip() for h in header]
    
    for row in reader:
        if not row or not row[0].strip():
            continue
        
        sr = row[0].strip()
        try:
            int(sr)
        except:
            continue

        def get(idx):
            return clean_text(row[idx]) if len(row) > idx else ""

        trial = {
            "sr": sr,
            "studyNo": get(1),
            "title": get(2),
            "pi": get(3),
            "status": get(4),
            "nameOfDepartment": get(5),
            "dateOfPublication": get(6),
            "indications": get(7),
            "subIndications": get(8),
            "noOfPatients": get(9),
            "department": get(11) if len(row) > 11 and row[11].strip() else get(5)
        }
        trials.append(trial)
    
    f.close()
    
    trials.sort(key=lambda x: int(x['sr']))
    
    ts_content = "export const pharmaTrials = " + json.dumps(trials, indent=2) + ";"
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"Total trials: {len(trials)}")
    srs = [t['sr'] for t in trials]
    print(f"Sr numbers: {srs}")

if __name__ == "__main__":
    process()
