import csv
import json

csv_path = r'public/documents/Pharma Sponsored Trials(Studies).csv'
ts_path = r'src/data/pharma-trials.ts'

# Transcribed data from the image (Sr 51-114)
transcribed = [
    {"sr": "51", "studyNo": "IICC/02/2021", "title": "CTQJ230A12001 A Multi-center", "pi": "Dr. Sandeep Patil", "status": "Completed", "department": "Cardiology"},
    {"sr": "52", "studyNo": "IICC/03/2021", "title": "EFC15082 / GEMELLI M A 26-w", "pi": "Dr. Ameya Joshi", "status": "Completed", "department": "Endocrinology"},
    {"sr": "53", "studyNo": "IICC/05/2021", "title": "A Randomized, Double-blind, Pa", "pi": "Dr. Nirmal Raut", "status": "Ongoing", "department": "Oncology"},
    {"sr": "54", "studyNo": "IICC/08/2021", "title": "A Phase 3, Multicenter, multi ce", "pi": "Dr. Jyotsna Zope", "status": "Completed", "department": "Nephrology", "indications": "CKD with Anaemia not on dialysis", "subIndications": "CKD with Anaemia not on dialysis"},
    {"sr": "55", "studyNo": "IICC/23/2021", "title": "A randomized, open label, multic", "pi": "Dr Nirmal Raut", "status": "Completed", "department": "Oncology"},
    {"sr": "56", "studyNo": "IICC/24/2021", "title": "A multi-centric, active post mar", "pi": "Dr.Sachin Choudhari", "status": "Completed", "department": "Dermatology"},
    {"sr": "57", "studyNo": "IICC/25/2021", "title": "A multi-centric, Active postMark", "pi": "Dr.Ravindra Surude", "status": "Completed", "department": "Gastroenterology"},
    {"sr": "58", "studyNo": "IICC/01/2022", "title": "A Real-world, prospective, Obser", "pi": "Dr. Harminder Singh", "status": "Completed", "department": "Oncology"},
    {"sr": "59", "studyNo": "IICC/02/2022", "title": "A Phase III, Double-blind, Place", "pi": "Dr.Nirmal Raut", "status": "Completed", "department": "Oncology"},
    {"sr": "60", "studyNo": "IICC/03/2022", "title": "A Randomized double-blind, Pla", "pi": "Dr Sandip Patil", "status": "Ongoing", "department": "Oncology"},
    {"sr": "62", "studyNo": "IICC/05/2022", "title": "Single arm study to evaluate the", "pi": "Dr. Nirmal Raut", "status": "Completed", "department": "Oncology"},
    {"sr": "63", "studyNo": "IICC/06/2022", "title": "Single arm study to evaluate the", "pi": "Dr. Nirmal Raut", "status": "Completed", "department": "Oncology"},
    {"sr": "64", "studyNo": "IICC/07/2022", "title": "A Prospective, Multicentre, phas", "pi": "Dr. Nirmal Raut", "status": "Not approved due to no response by PI to Query letter", "department": "Oncology"},
    {"sr": "65", "studyNo": "IICC/08/2022", "title": "A Randomized double-blind plac", "pi": "Dr.Omkar Hajirnis", "status": "Completed", "department": "Pediatrics"},
    {"sr": "66", "studyNo": "IICC/09/2022", "title": "A phase 3, 12 month open label", "pi": "Dr.Omkar Hajirnis", "status": "Completed", "department": "Pediatrics"},
    {"sr": "69", "studyNo": "IICC/03/2022", "title": "An Open-label, Multicenter, ra", "pi": "Dr.Nirmal Raut", "status": "Completed", "department": "Oncology"},
    {"sr": "70", "studyNo": "IICC/04/2021", "title": "Talepro-3 : A phase 3, randomise", "pi": "Dr.Nirmal Raut", "status": "Ongoing", "department": "Oncology"},
    {"sr": "71", "studyNo": "IICC/05/2022", "title": "Drug-drug Interaction Substudy", "pi": "Dr.Nirmal Raut", "status": "Completed", "department": "Oncology"},
    {"sr": "72", "studyNo": "IICC/06/2022", "title": "61186372NSC3002 A phase 3 op", "pi": "Dr.Nirmal Raut", "status": "Completed", "department": "Oncology"},
    {"sr": "73", "studyNo": "IICC/01/2023", "title": "A Multicentric, Open-label, Ranc", "pi": "Dr.Nirmal Raut", "status": "Completed", "department": "Oncology"},
    {"sr": "74", "studyNo": "IICC/02/2023", "title": "18F-MC-GPGV A randomized, dc", "pi": "Dr.Ameya Joshi", "status": "Completed", "department": "Endocrinology"},
    {"sr": "75", "studyNo": "IICC/03/2023", "title": "A 52-week study comparing the", "pi": "Dr.Ameya Joshi", "status": "Completed", "department": "Endocrinology"},
    {"sr": "76", "studyNo": "IICC/04/2023", "title": "DC000081 An observational stu", "pi": "Dr.Ameya Joshi", "status": "Completed", "department": "Endocrinology"},
    {"sr": "77", "studyNo": "IICC/05/2023", "title": "DRL-IND-ND/02-LIN/2022. A r", "pi": "Dr.Shubham Jain", "status": "Completed", "department": "Gastroenterology"},
    {"sr": "78", "studyNo": "IICC/06/2023", "title": "A Phase III, Prospective, Multice", "pi": "Dr.Kamalapriya", "status": "Completed", "department": "Gynecology"},
    {"sr": "79", "studyNo": "IICC/07/2023", "title": "Single-Arm Study of Lorlatinib in", "pi": "Dr.Nirmal Raut", "status": "Completed", "department": "Oncology"},
    {"sr": "80", "studyNo": "HEC/08/2021", "title": "A Phase III, Multicentre, Random", "pi": "Dr.Ajay Godse", "status": "Ongoing", "department": "Pulmonology"},
    {"sr": "81", "studyNo": "HEC/09/2021", "title": "A Phase 3, Randomized, Open-Li", "pi": "Dr.Nirmal Raut", "status": "Ongoing", "department": "Oncology"},
    {"sr": "82", "studyNo": "HEC/10/2021", "title": "A phase 3,Randomized, Double-B", "pi": "Dr.Nirmal Raut", "status": "Ongoing", "department": "Oncology"},
    {"sr": "83", "studyNo": "HEC/11/2021", "title": "A prospective, Multicentric, cros", "pi": "Dr.Ameya Joshi", "status": "Completed", "department": "Endocrinology"},
    {"sr": "84", "studyNo": "HEC/12/2021", "title": "A Randomized, Double-Blind, Dc", "pi": "Dr.Ajay Godse", "status": "Completed", "department": "Pulmonology"},
    {"sr": "85", "studyNo": "HEC/13/2021", "title": "A Phase III, Multicentre, Random", "pi": "Dr.Ajay Godse", "status": "Ongoing", "department": "Pulmonology"},
    {"sr": "86", "studyNo": "HEC/01/2022", "title": "A Phase 3, 52-Week, Randomize", "pi": "Dr.Ajay Godse", "status": "Ongoing", "department": "Pulmonology"},
    {"sr": "87", "studyNo": "HEC/02/2022", "title": "A Phase III, Multicentre,", "pi": "Dr.Ajay Godse", "status": "Ongoing", "department": "Pulmonology"},
    {"sr": "88", "studyNo": "HEC/03/2022", "title": "A randomized, international,", "pi": "Dr.Shilpa Gupta", "status": "Completed", "department": "Oncology"},
    {"sr": "89", "studyNo": "HEC/04/2022", "title": "A Randomized, Double-blinded,", "pi": "Dr.Ravindra Surude", "status": "Completed", "department": "Gastroenterology"},
    {"sr": "90", "studyNo": "HEC/05/2022", "title": "A multicenter, open label,", "pi": "Dr.Nirmal Raut", "status": "Not started by sponsor", "department": "Oncology"},
    {"sr": "91", "studyNo": "HEC/06/2022", "title": "A Phase II/III, multicentre, 8-we", "pi": "Dr.Yogesh Patidar", "status": "NA", "department": "Oncology"},
    {"sr": "92", "studyNo": "HEC/07/2022", "title": "A Phase 3, Randomized, Double-", "pi": "Dr.Yogesh Patidar", "status": "Ongoing", "department": "Oncology"},
    {"sr": "93", "studyNo": "HEC/08/2022", "title": "A Multicenter, Randomized, Dou", "pi": "Dr.Ajay Godse", "status": "Completed", "department": "Pulmonology"},
    {"sr": "94", "studyNo": "HEC/09/2022", "title": "A Phase III, Open-Label, Random", "pi": "Dr.Nirmal Raut", "status": "Completed", "department": "Oncology"},
    {"sr": "95", "studyNo": "HEC/10/2022", "title": "Phase IV, 12-week, single arm, o", "pi": "Dr.Ajay Godse", "status": "Completed", "department": "Pulmonology"},
    {"sr": "98", "studyNo": "HEC/11/2022", "title": "A Phase III, Multicentre, Random", "pi": "Dr.Ajay Godse", "status": "Not started by sponsor", "department": "Pulmonology"},
    {"sr": "100", "studyNo": "HEC/02/2023", "title": "Lorlatinib (PF-06463922) Contin", "pi": "Dr.Nirmal Raut", "status": "Ongoing", "department": "Oncology"},
    {"sr": "101", "studyNo": "HEC/03/2023", "title": "An Open-Label Multicenter", "pi": "Dr.Yogesh Patidar", "status": "Not started by sponsor", "department": "Oncology"},
    {"sr": "102", "studyNo": "HEC/04/2023", "title": "An Interventional, Open-Label, F", "pi": "Dr.Nirmal Raut", "status": "Completed", "department": "Oncology"},
    {"sr": "103", "studyNo": "HEC/05/2023", "title": "A phase III, open -label, sponsor", "pi": "Dr.Nirmal Raut", "status": "Ongoing", "department": "Oncology"},
    {"sr": "104", "studyNo": "HEC/06/2023", "title": "An interventional, open label, rz", "pi": "Dr.Nirmal Raut", "status": "Ongoing", "department": "Oncology"},
    {"sr": "105", "studyNo": "HEC/07/2023", "title": "A Multicenter, Randomized, Cor", "pi": "Dr.Nirmal Raut", "status": "Ongoing", "department": "Oncology"},
    {"sr": "106", "studyNo": "HEC/08/2023", "title": "An Open-label, randomized, Con", "pi": "Dr.Nirmal Raut", "status": "Ongoing", "department": "Oncology"},
    {"sr": "107", "studyNo": "HEC/09/2023", "title": "A Multicenter, Randomized, Cor", "pi": "Dr Ameya Joshi", "status": "Ongoing", "department": "Endocrinology"},
    {"sr": "108", "studyNo": "HEC/01/2024", "title": "A Multicenter, Randomized, Cor", "pi": "Dr Ameya Joshi", "status": "Ongoing", "department": "Endocrinology"},
    {"sr": "109", "studyNo": "HEC/02/2024", "title": "An Interventional, open-label, R", "pi": "Dr. Nirmal Raut", "status": "Ongoing", "department": "Oncology"},
    {"sr": "110", "studyNo": "HEC/03/2024", "title": "A Multicenter, Randomized, Dou", "pi": "Dr. Ameya Joshi", "status": "Ongoing", "department": "Endocrinology"},
    {"sr": "111", "studyNo": "HEC/04/2024", "title": "A Randomized, Double-blind, Mi", "pi": "Dr. Nirmal Raut", "status": "Ongoing", "department": "Oncology"},
    {"sr": "112", "studyNo": "HEC/05/2024", "title": "A randomized, double blind, par", "pi": "Dr. Shubham Jain", "status": "Ongoing", "department": "Gastroenterology"},
    {"sr": "113", "studyNo": "HEC/06/2024", "title": "An Interventional phase 3, doub", "pi": "Dr. Nirmal Raut", "status": "Ongoing", "department": "Oncology"},
    {"sr": "114", "studyNo": "HEC/07/2024", "title": "An Interventional phase 2/3, Rai", "pi": "Dr. Ajay Godse", "status": "Ongoing", "department": "Pulmonology"}
]

def clean_text(text):
    if not text: return ""
    # Replace weird characters with standard ones BEFORE json.dumps
    text = text.replace('Â“', '"').replace('Â”', '"').replace('Â®', '®').replace('Â', '')
    return text.strip()

def process():
    trials = []
    # 1. Load from CSV
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
                sr_int = int(sr)
            except:
                continue

            if sr_int >= 51: continue
            
            trial = {
                "sr": sr,
                "studyNo": clean_text(get_val(row, 'Study No.')),
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

    # 2. Add Transcribed Data
    for t in transcribed:
        # Clean transcribed data too
        for k, v in t.items():
            if isinstance(v, str):
                t[k] = clean_text(v)

        for field in ["nameOfDepartment", "dateOfPublication", "indications", "subIndications", "noOfPatients"]:
            if field not in t: t[field] = ""
        if "department" not in t: t["department"] = t.get("nameOfDepartment", "")
        trials.append(t)

    trials.sort(key=lambda x: int(x['sr']))
    
    ts_content = "export const pharmaTrials = " + json.dumps(trials, indent=2) + ";"
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"Total trials processed: {len(trials)}")

if __name__ == "__main__":
    process()
