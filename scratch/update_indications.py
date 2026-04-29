import csv
import json

csv_path = r'public/documents/Pharma Sponsored Trials(Studies).csv'
ts_path = r'src/data/pharma-trials.ts'

# Map of Sr -> {indications, subIndications} based on the image data
# These are the values visible in the user's screenshot that are NOT in the CSV
indications_map = {
    "1": {"indications": "Non-Hodgkin's Lymphoma", "subIndications": ""},
    "2": {"indications": "Heart Failure", "subIndications": "Chronic Heart Failure"},
    "3": {"indications": "Androgenic Alopecia", "subIndications": ""},
    "4": {"indications": "Urolithiasis", "subIndications": ""},
    "5": {"indications": "Synbiotic Formulation", "subIndications": ""},
    "6": {"indications": "Severe symptomatic uterine fibroids", "subIndications": ""},
    "8": {"indications": "Cancer", "subIndications": "Breast Cancer"},
    "10": {"indications": "Reproductive Technology", "subIndications": ""},
    "11": {"indications": "Cataract surgery", "subIndications": ""},
    "12": {"indications": "Asthma", "subIndications": ""},
    "13": {"indications": "Atopic dermatitis", "subIndications": "Moderate to severe atopic dermatitis"},
    "14": {"indications": "Oncology", "subIndications": "Metastatic Colorectal Cancer"},
    "15": {"indications": "Cancer", "subIndications": ""},
    "16": {"indications": "Asthma", "subIndications": ""},
    "17": {"indications": "Atopic dermatitis", "subIndications": "Moderate to severe atopic dermatitis"},
    "18": {"indications": "Diabetes Mellitus", "subIndications": "Type 2 diabetes mellitus"},
    "19": {"indications": "Diabetes Mellitus", "subIndications": ""},
    "20": {"indications": "Diabetes Mellitus", "subIndications": ""},
    "22": {"indications": "Cancer", "subIndications": ""},
    "25": {"indications": "Cancer", "subIndications": "Metastatic pancreatic cancer"},
    "27": {"indications": "T-cell Lymphoma", "subIndications": ""},
    "28": {"indications": "Diabetes Mellitus", "subIndications": "Type 2 diabetes mellitus"},
    "29": {"indications": "Asthma", "subIndications": ""},
    "30": {"indications": "Diabetes Mellitus", "subIndications": "Type 2 diabetes mellitus"},
    "31": {"indications": "Cancer", "subIndications": "Ovarian Cancer"},
    "34": {"indications": "OA", "subIndications": ""},
    "35": {"indications": "Cancer", "subIndications": "Metastatic pancreatic cancer"},
    "36": {"indications": "Idiopathic Pulmonary Fibrosis.", "subIndications": ""},
    "37": {"indications": "Diabetes Mellitus", "subIndications": "Type 2 diabetes mellitus"},
    "38": {"indications": "NA", "subIndications": ""},
    "39": {"indications": "Lung Cancer", "subIndications": "Non-squamous Non-Small Cell Lung Cancer."},
    "40": {"indications": "Migraine", "subIndications": ""},
    "41": {"indications": "Alzheimer", "subIndications": ""},
    "43": {"indications": "Cancer", "subIndications": "Breast Cancer"},
    "44": {"indications": "Chronic Idiopathic Urticaria", "subIndications": ""},
    "45": {"indications": "Relapsed or Refractory Multiple Myeloma (RRMM)", "subIndications": ""},
    "46": {"indications": "Diffuse Large B Cell Lymphoma", "subIndications": ""},
    "47": {"indications": "Cancer", "subIndications": "Metastatic Breast Cancer"},
    "48": {"indications": "Minor Surgery", "subIndications": ""},
    "50": {"indications": "Cancer", "subIndications": "Ovarian Cancer"},
    "54": {"indications": "CKD with Anaemia not on dialysis", "subIndications": "CKD with Anaemia not on dialysis"},
}

def clean_text(text):
    if not text: return ""
    text = text.replace('\u0093', '"').replace('\u0094', '"')
    text = text.replace('\u00c2\u0093', '"').replace('\u00c2\u0094', '"')
    text = text.replace('\u00c2\u00ae', '(R)')
    text = text.replace('\u00c2', '')
    return text.strip()

def process():
    trials = []
    with open(csv_path, mode='r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        field_map = {name.encode('ascii', 'ignore').decode('ascii').strip(): name for name in reader.fieldnames if name}
        
        def get_val(row, key):
            actual_key = field_map.get(key)
            return row.get(actual_key, "").strip() if actual_key else ""

        for row in reader:
            sr = get_val(row, 'Sr')
            if not sr: continue
            try:
                int(sr)
            except:
                continue
            
            # Get indications from CSV first
            csv_indications = clean_text(get_val(row, 'Indications'))
            csv_sub_indications = clean_text(get_val(row, 'Sub-Indications'))
            
            # If CSV has no indications, check our map
            if not csv_indications and sr in indications_map:
                csv_indications = indications_map[sr]["indications"]
                csv_sub_indications = indications_map[sr]["subIndications"]
            
            trial = {
                "sr": sr,
                "studyNo": clean_text(get_val(row, 'Study No.')),
                "title": clean_text(get_val(row, 'Title Of Study')),
                "pi": clean_text(get_val(row, 'Principle Investigator')),
                "status": clean_text(get_val(row, 'Status')),
                "nameOfDepartment": clean_text(get_val(row, 'Name of Department')),
                "dateOfPublication": clean_text(get_val(row, 'Date of Publication')),
                "indications": csv_indications,
                "subIndications": csv_sub_indications,
                "noOfPatients": clean_text(get_val(row, 'No.of patients')),
                "department": clean_text(get_val(row, 'Department') or get_val(row, 'Name of Department'))
            }
            trials.append(trial)

    trials.sort(key=lambda x: int(x['sr']))
    
    ts_content = "export const pharmaTrials = " + json.dumps(trials, indent=2) + ";"
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    # Count how many have indications now
    with_ind = sum(1 for t in trials if t['indications'])
    print(f"Total trials: {len(trials)}")
    print(f"Trials with indications: {with_ind}")
    print(f"Trials without indications: {len(trials) - with_ind}")

if __name__ == "__main__":
    process()
