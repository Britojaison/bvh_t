import csv
import json
import sys

csv_path = r'public/images/bvh/csv/Hospital Initiated Studies(Sheet 1).csv'
ts_path = r'src/data/hospital-trials.ts'

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
    
    # Headers: ['Sr. No', 'Study No.', 'Study Title', 'Principle Investigator', 'Current Status', 'Publication ']
    
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
            "publication": get(5),
        }
        trials.append(trial)
    
    f.close()
    
    # Sort by Sr
    try:
        trials.sort(key=lambda x: int(x['sr']))
    except Exception as e:
        print(f"Error sorting: {e}")
    
    ts_content = "export const hospitalTrials = " + json.dumps(trials, indent=2) + ";"
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"Total trials processed: {len(trials)}")

if __name__ == "__main__":
    process()
