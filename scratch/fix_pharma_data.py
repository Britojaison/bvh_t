import csv
import json
import os

csv_path = r'public/documents/Pharma Sponsored Trials(Studies).csv'
ts_path = r'src/data/pharma-trials.ts'

def clean_text(text):
    if not text: return ""
    # Replace weird characters with standard ones BEFORE json.dumps
    # This prevents the syntax errors seen earlier
    text = text.replace('Â“', '"').replace('Â”', '"').replace('Â®', '®').replace('Â', '')
    return text.strip()

def process_pharma_trials():
    trials = []
    with open(csv_path, mode='r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        
        # Robust field mapping to handle BOM and trailing spaces
        field_map = {name.encode('ascii', 'ignore').decode('ascii').strip(): name for name in reader.fieldnames if name}
        
        def get_val(row, key):
            actual_key = field_map.get(key)
            return row.get(actual_key, "").strip() if actual_key else ""

        for row in reader:
            sr = get_val(row, 'Sr')
            study_no = get_val(row, 'Study No.')
            
            # Skip empty rows
            if not sr and not study_no:
                continue
                
            trial = {
                "sr": clean_text(sr),
                "studyNo": clean_text(study_no),
                "title": clean_text(get_val(row, 'Title Of Study')),
                "pi": clean_text(get_val(row, 'Principle Investigator')),
                "status": clean_text(get_val(row, 'Status')),
                "nameOfDepartment": clean_text(get_val(row, 'Name of Department')),
                "dateOfPublication": clean_text(get_val(row, 'Date of Publication')),
                "indications": clean_text(get_val(row, 'Indications')),
                "subIndications": clean_text(get_val(row, 'Sub-Indications')),
                "noOfPatients": clean_text(get_val(row, 'No.of patients')),
                "department": clean_text(get_val(row, 'Department') or get_val(row, 'Name of Department'))
            }
            trials.append(trial)

    # Convert to TS format
    ts_content = "export const pharmaTrials = " + json.dumps(trials, indent=2) + ";"
    
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
        
    print(f"Successfully processed {len(trials)} trials from CSV.")

if __name__ == "__main__":
    process_pharma_trials()
