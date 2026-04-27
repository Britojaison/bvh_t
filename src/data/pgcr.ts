export interface FacultyMember {
  name: string;
  qualifications: string;
  designation: string;
  institution: string;
  image: string;
}

export const facultyRow1: FacultyMember[] = [
  {
    name: "Dr. Sunil Kuyare",
    qualifications: "MD (Radiology)-Gold Medalist, PGDM, HME, PGDR",
    designation: "Lab Director - Apoorva Diagnostic & Healthcare",
    institution: "Bhaktivedanta Hospital & Research Institute",
    image: "/faculty/placeholder.jpg",
  },
  {
    name: "Dr. Vijaykumar Gawali",
    qualifications: "MBBS, D-Stat, PCPV, PGCR",
    designation: "Head – Clinical Research & Academics, Medical Superintendent – Centres of Excellence",
    institution: "Bhaktivedanta Hospital & Research Institute, Mumbai",
    image: "/faculty/placeholder.jpg",
  },
  {
    name: "Dr. Komal Dalal",
    qualifications: "MBBS, PGCR, PGDPC, Certified Acupuncturist",
    designation: "Advisor - Clinical Research",
    institution: "Bhaktivedanta Hospital & Research Institute",
    image: "/faculty/placeholder.jpg",
  },
  {
    name: "Dr. Nirmal Raut",
    qualifications: "M.D, ECMO, PDCC",
    designation: "Masters in Molecular Oncology, Spain",
    institution: "Bhaktivedanta Hospital & Research Institute",
    image: "/faculty/placeholder.jpg",
  },
  {
    name: "Dr. Ajay Godse",
    qualifications: "MD (Chest Medicine), FAASM (Sleep Medicine)",
    designation: "Consultant Pulmonary & Sleep Medicine",
    institution: "Bhaktivedanta Hospital & Research Institute",
    image: "/faculty/placeholder.jpg",
  },
  {
    name: "Dr. Ameya Joshi",
    qualifications: "MBBS, MD, DM (Endocrinology)",
    designation: "Consultant Endocrinologist",
    institution: "Bhaktivedanta Hospital & Research Institute",
    image: "/faculty/placeholder.jpg",
  },
];

export const facultyRow2: FacultyMember[] = [
  {
    name: "Dr. Sandeep Patil",
    qualifications: "MD (Internal Medicine), DNB (Internal Medicine), DM (Cardiology), FESC",
    designation: "HOD of Cardiology Department, Consultant Interventional Cardiologist",
    institution: "Bhaktivedanta Hospital & Research Institute",
    image: "/faculty/placeholder.jpg",
  },
  {
    name: "Dr. Sandeep Garg",
    qualifications: "MD (Paediatrics), DNB",
    designation: "Fellowship in Paediatric Cardiology, Consultant Pediatric Intensivist & Cardiologist",
    institution: "Bhaktivedanta Hospital & Research Institute",
    image: "/faculty/placeholder.jpg",
  },
  {
    name: "Dr. Yogesh Patidar",
    qualifications: "M.D., DM, Neurology",
    designation: "Consultant Neurologist",
    institution: "Bhaktivedanta Hospital & Research Institute",
    image: "/faculty/placeholder.jpg",
  },
  {
    name: "Dr. Omkar Hajirnis",
    qualifications: "MD DNB (Pediatrics) MRCPCH (UK)",
    designation: "Fellowship in Pediatric Neurology, Consultant Pediatric Neurologist",
    institution: "Bhaktivedanta Hospital & Research Institute",
    image: "/faculty/placeholder.jpg",
  },
  {
    name: "Dr. Dhaval Dalal",
    qualifications: "MD (Internal Medicine)",
    designation: "HOD of Internal Medicine & Senior Consultant Internal Medicine",
    institution: "Bhaktivedanta Hospital & Research Institute",
    image: "/faculty/placeholder.jpg",
  },
  {
    name: "Dr. Wasim Sayad",
    qualifications: "Service Delivery Manager",
    designation: "(Quality Assurance-Pharmacovigilance) Cognizant",
    institution: "",
    image: "/faculty/placeholder.jpg",
  },
  {
    name: "Dr. Tejasvee Kadam",
    qualifications: "BDS, Post-Graduate in Clinical Research",
    designation: "Lead - Clinical Research",
    institution: "Bhaktivedanta Hospital & Research Institute",
    image: "/faculty/placeholder.jpg",
  },
];

import type { ReactNode } from 'react';

export interface TabContent {
  id: string;
  label: string;
  content: string | ReactNode;
}

export const tabs: TabContent[] = [
  {
    id: "overview",
    label: "Overview",
    content: "The Post Graduation in Clinical Research (PGCR) program is a comprehensive course designed to equip healthcare professionals and science graduates with the knowledge and skills required to excel in the field of clinical research. This program covers all aspects of clinical trials, regulatory affairs, pharmacovigilance, data management, and medical writing. With a blend of theoretical knowledge and practical exposure, students gain hands-on experience in real clinical trial settings at Bhaktivedanta Hospital & Research Institute.",
  },
  {
    id: "gallery",
    label: "Gallery",
    content: "Explore our state-of-the-art facilities, classroom sessions, practical training workshops, and campus life at Bhaktivedanta Hospital & Research Institute. Our gallery showcases the vibrant learning environment, laboratory sessions, guest lectures by industry experts, and student activities that make the PGCR program a truly enriching experience.",
  },
  {
    id: "courses",
    label: "Courses",
    content: "The PGCR curriculum includes modules on: Introduction to Clinical Research, Good Clinical Practice (GCP), Regulatory Affairs (ICH-GCP, CDSCO, FDA, EMA), Clinical Trial Design & Methodology, Biostatistics & Data Management, Pharmacovigilance & Drug Safety, Medical Writing & Documentation, Ethics in Clinical Research, Site Management & Monitoring, and a hands-on Clinical Research Project. The program spans 12 months with both classroom and practical components.",
  },
  {
    id: "education-career",
    label: "Education & Career",
    content: "Eligibility: MBBS, BDS, BAMS, BHMS, B.Pharm, M.Pharm, BSc/MSc (Life Sciences), BPT, or any allied health science graduates. Career opportunities include: Clinical Research Associate (CRA), Clinical Research Coordinator (CRC), Pharmacovigilance Associate, Medical Writer, Regulatory Affairs Specialist, Data Manager, Clinical Project Manager, and Quality Assurance Specialist. Our alumni are placed in top pharmaceutical companies, CROs, and research institutions worldwide.",
  },
  {
    id: "what-we-offer",
    label: "What we offer?",
    content: "We offer a unique blend of academic excellence and practical exposure. Our program includes: Industry-experienced faculty and mentors, Hands-on training in active clinical trial sites, Internship opportunities with leading CROs and pharmaceutical companies, Placement assistance with top clinical research organizations, Access to hospital-based research projects, Workshops on regulatory submissions and documentation, Certification recognized by industry professionals, and Networking opportunities with clinical research experts.",
  },
  {
    id: "joining-instructions",
    label: "Joining Instructions",
    content: "To join the PGCR program: 1) Fill out the online application form on our website, 2) Submit required documents including academic transcripts, ID proof, and passport-size photographs, 3) Attend a personal interview (online/offline), 4) Receive admission confirmation and fee details, 5) Complete the enrollment process by paying the registration fee. The program starts in January and July each year. Limited seats available - early application is recommended. Contact our admissions office for more details.",
  },
  {
    id: "faqs",
    label: "FAQs",
    content: "Frequently Asked Questions: Q: What is the duration of the program? A: 12 months (1 year). Q: Is the program available online? A: The program is primarily classroom-based with some online components. Q: What is the fee structure? A: Please contact our admissions office for current fee details. Q: Do you provide placement assistance? A: Yes, we have a dedicated placement cell that assists students with job placements. Q: Can working professionals join? A: Yes, we offer flexible scheduling options for working professionals.",
  },
];
