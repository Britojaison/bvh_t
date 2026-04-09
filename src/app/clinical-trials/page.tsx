
import HeroImage from "@/components/HeroImage";
import TabNavigation from "@/components/TabNavigation";
import InfraCarousel from "@/components/InfraCarousel";
import { clinicalTrialsTabs } from "@/data/clinical-trials";
import { pharmaTrials } from "@/data/pharma-trials";
import { hospitalTrials } from "@/data/hospital-trials";

const infraSlides = [
  { src: "/images/Advanced Cardiac Care Unit (1).jpg", label: "Advanced Cardiac Care Unit" },
  { src: "/images/Advanced Intensive Care Unit.jpg", label: "Advanced Intensive Care Unit" },
  { src: "/images/Advanced Neonatal Intensive Care Unit.jpg", label: "Advanced Neonatal Intensive Care Unit" },
  { src: "/images/Advanced Radiation Therapy Unit.jpg", label: "Advanced Radiation Therapy Unit" },
  { src: "/images/Advanced Robotic Surgery Suite.jpg", label: "Advanced Robotic Surgery Suite" },
  { src: "/images/Comprehensive Dialysis Unit.jpg", label: "Comprehensive Dialysis Unit" },
  { src: "/images/High Dependency Care Unit.jpg", label: "High Dependency Care Unit" },
  { src: "/images/High-Precision CT Scan Facility.jpg", label: "High-Precision CT Scan Facility" },
  { src: "/images/High-Resolution MRI Imaging.jpg", label: "High-Resolution MRI Imaging" },
  { src: "/images/Modular Operation Theatres.jpg", label: "Modular Operation Theatres" },
  { src: "/images/State-of the-art-Cathlabs.jpg", label: "State-of-the-Art Cathlabs" },
  { src: "/images/State-of-the-Art Cathlabs.jpg", label: "Surgical Intensive Care Unit" },
];


const FeasibilityContent = () => (
  <div className="w-full py-8 text-[#565656] space-y-12">
    
    {/* Intro Blocks */}
    <div className="flex flex-col gap-10">
      {/* Institutional Credentials */}
      <div className="w-full">
        <h3 className="text-2xl font-bold text-[#2664A8] mb-4" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>Institutional Credentials</h3>
        <ul className="space-y-3 leading-relaxed">
          <li className="flex items-start">
            <span className="text-[#f58634] mr-2 text-xl leading-none">•</span>
            <span>300-bedded NABH-accredited tertiary care hospital</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#f58634] mr-2 text-xl leading-none">•</span>
            <div>
              <strong>Hospital Infrastructure:</strong> 24 hour services:
              <ul className="list-disc list-inside ml-4 mt-2 mb-2 text-sm space-y-1 text-gray-700">
                <li>Cardiac Ambulance</li>
                <li>Pharmacy</li>
                <li>Blood Bank</li>
                <li>Trauma and Emergency centre</li>
                <li>Radiology</li>
                <li>Pathology</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#f58634] mr-2 text-xl leading-none">•</span>
            <span>All Diagnostic Services along with Robotic surgery.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#f58634] mr-2 text-xl leading-none">•</span>
            <span>Additional centre for: Acupuncture, Ayurveda, Homeopathy, Yoga</span>
          </li>
        </ul>
      </div>

      {/* About Clinical Research Dept */}
      <div className="w-full">
        <h3 className="text-2xl font-bold text-[#2664A8] mb-4" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>About Clinical Research Department</h3>
        <p className="leading-relaxed mb-6">
          The Clinical Research Department at Bhaktivedanta Hospital and Research Institute is a state-of-the-art research facility committed to promoting scientific, ethical, and high-quality clinical research. The department collaborates with national and international organizations to advance healthcare, innovation, and patient outcomes.
        </p>
        <div className="mt-4 text-gray-700">
          <span className="font-semibold text-[#2664A8] mr-2">Location:</span>
          <span>3rd Floor, B-wing, Vrindavan building.</span>
        </div>
      </div>
    </div>

    {/* Infrastructure & Facilities */}
    <div className="w-full">
      <div className="mb-10 overflow-hidden rounded-2xl shadow-lg border border-gray-100 max-w-xl mx-auto">
        <img 
          src="/images/logo/Clinical Trial Department - Project Quotation.png" 
          alt="Clinical Trial Department" 
          className="w-full h-auto object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold text-[#2664A8] mb-6" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>Research Infrastructure & Facilities</h3>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Column: Text Items */}
        <div className="flex-1">
          <ul className="flex flex-col space-y-4">
            <li>
              <h4 className="font-bold text-[#2664A8] text-lg flex items-center gap-2 mb-1"><span className="text-[#f58634] text-xl">•</span> Investigational Product (IP) Room</h4>
              <ul className="list-disc list-inside ml-6 text-base space-y-1 text-gray-700">
                <li>Biometric access control</li>
                <li>Temperature-controlled storage: –80°C, –20°C, 2–8°C, 15-25°C</li>
              </ul>
            </li>
            
            <li>
              <h4 className="font-bold text-[#2664A8] text-lg flex items-center gap-2 mb-1"><span className="text-[#f58634] text-xl">•</span> Patient Examination Rooms</h4>
              <ul className="list-disc list-inside ml-6 text-base space-y-1 text-gray-700">
                <li>Fully equipped as per protocol requirements</li>
                <li>Centrifuge facility for blood component separation</li>
              </ul>
            </li>

            <li>
              <h4 className="font-bold text-[#2664A8] text-lg flex items-center gap-2 mb-1"><span className="text-[#f58634] text-xl">•</span> Document Storage & Archival</h4>
              <p className="text-base text-gray-700 leading-relaxed ml-6">Secure archival of trial documents for a minimum of 5 years.</p>
            </li>

            <li>
              <h4 className="font-bold text-[#2664A8] text-lg flex items-center gap-2 mb-1"><span className="text-[#f58634] text-xl">•</span> Quality Assurance Department</h4>
              <p className="text-base text-gray-700 leading-relaxed ml-6">Three-member team ensuring compliance with national and international regulatory standards.</p>
            </li>

            <li>
              <h4 className="font-bold text-[#2664A8] text-lg flex items-center gap-2 mb-1"><span className="text-[#f58634] text-xl">•</span> Secure Data Centre</h4>
              <p className="text-base text-gray-700 leading-relaxed ml-6">Continuous IT monitoring to ensure data confidentiality.</p>
            </li>

            <li>
              <h4 className="font-bold text-[#2664A8] text-lg flex items-center gap-2 mb-1"><span className="text-[#f58634] text-xl">•</span> Monitoring & Conference Rooms</h4>
              <p className="text-base text-gray-700 leading-relaxed ml-6">Infrastructure for physical and virtual audits, meetings, and training programs.</p>
            </li>
          </ul>
        </div>

        {/* Right Column: Large Images */}
        <div className="w-full md:w-[380px] flex flex-col gap-6 shrink-0">
          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100 w-full h-[280px]">
            <img 
              src="/images/logo/Feasibility Images from Project Quotation.png" 
              alt="IP Room Storage Facility" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100 w-full h-[280px]">
            <img 
              src="/images/logo/Feasibility Images (1).png" 
              alt="Secure Document Archival" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Infrastructure Carousel */}
    <div>
      <h3 className="text-2xl font-bold text-[#2664A8] mb-6 text-center" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>Hospital Infrastructure</h3>
      <InfraCarousel slides={infraSlides} />
    </div>


    {/* Activities Timeline */}
    <div>
      <h3 className="text-2xl font-bold text-[#2664A8] mb-6 text-center" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>Timeline for Activities</h3>
      <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
        <table className="w-full text-left bg-white">
          <thead className="bg-[#2664A8] text-white">
            <tr>
              <th className="px-6 py-4 font-semibold w-16 text-center">Sr. No</th>
              <th className="px-6 py-4 font-semibold">Activities</th>
              <th className="px-6 py-4 font-semibold w-48 text-center border-l border-[#2664A8]">Timeline</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-[#f8fbfe] transition-colors">
              <td className="px-6 py-4 text-center font-medium bg-gray-50 border-r border-gray-100">1</td>
              <td className="px-6 py-4 text-gray-800 font-medium">Budget Negotiation</td>
              <td className="px-6 py-4 text-center font-bold text-[#f58634] border-l border-gray-100 bg-gray-50">48 Hrs</td>
            </tr>
            <tr className="hover:bg-[#f8fbfe] transition-colors">
              <td className="px-6 py-4 text-center font-medium bg-gray-50 border-r border-gray-100">2</td>
              <td className="px-6 py-4 text-gray-800 font-medium">Clinical Trial Agreement - Legal Review</td>
              <td className="px-6 py-4 text-center font-bold text-[#f58634] border-l border-gray-100 bg-gray-50">48 Hrs</td>
            </tr>
            <tr className="hover:bg-[#f8fbfe] transition-colors">
              <td className="px-6 py-4 text-center font-medium bg-gray-50 border-r border-gray-100">3</td>
              <td className="px-6 py-4 text-gray-800 font-medium">Bhaktivedanta Hospital Ethics Committee Meeting</td>
              <td className="px-6 py-4 text-center font-bold text-[#f58634] border-l border-gray-100 bg-gray-50">Twice a month</td>
            </tr>
            <tr className="hover:bg-[#f8fbfe] transition-colors">
              <td className="px-6 py-4 text-center font-medium bg-gray-50 border-r border-gray-100">4</td>
              <td className="px-6 py-4 text-gray-800 font-medium">EC Initial Submission and CTA discussion can be carried out simultaneously</td>
              <td className="px-6 py-4 text-center font-bold text-[#f58634] border-l border-gray-100 bg-gray-50">48 Hrs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Videos */}
    <div className="pt-10 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-[#2664A8] mb-8 text-center" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>Virtual Tour & Insights</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        <div className="flex flex-col">
          <div className="relative pb-[56.25%] h-0 mb-4 rounded-xl overflow-hidden shadow-md bg-gray-100 border border-gray-200">
            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/WWsHKxOVETU" title="Institute virtual tour and infrastructure" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <h4 className="text-lg font-bold text-gray-800 text-center px-2">Institute virtual tour and infrastructure</h4>
        </div>
        
        <div className="flex flex-col">
          <div className="relative pb-[56.25%] h-0 mb-4 rounded-xl overflow-hidden shadow-md bg-gray-100 border border-gray-200">
            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/HE3vn0wAKjU" title="Investigational course" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <h4 className="text-lg font-bold text-gray-800 text-center px-2">Investigational Course</h4>
        </div>
        
        <div className="flex flex-col">
          <div className="relative pb-[56.25%] h-0 mb-4 rounded-xl overflow-hidden shadow-md bg-gray-100 border border-gray-200">
            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/yQ1-j5d3i3U" title="Scientific and Industrial Research Organization" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <h4 className="text-lg font-bold text-gray-800 text-center px-2">Scientific & Industrial Research Organization</h4>
        </div>
      </div>
    </div>

  </div>
);

const PharmaSponsoredTrialsContent = () => (
  <div className="w-full py-8 text-[#565656]">
    <h3 className="text-2xl font-bold text-[#2664A8] mb-6 text-center" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>Clinical Trials Registry</h3>
    
    <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200 max-h-[600px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
      <table className="w-full text-left bg-white text-sm">
        <thead className="bg-[#2664A8] text-white sticky top-0 z-10 shadow-sm">
          <tr>
            <th className="px-4 py-3 font-semibold text-center w-12 shrink-0">Sr.</th>
            <th className="px-4 py-3 font-semibold w-32 shrink-0">Study No.</th>
            <th className="px-4 py-3 font-semibold min-w-[300px]">Title Of Study</th>
            <th className="px-4 py-3 font-semibold w-40 shrink-0">Principal Investigator</th>
            <th className="px-4 py-3 font-semibold w-32 shrink-0 border-l border-[#2664A8]/40">Status</th>
            <th className="px-4 py-3 font-semibold w-32 shrink-0">Department</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {(pharmaTrials as any[]).map((trial: any, idx: number) => (
            <tr key={idx} className="hover:bg-[#f8fbfe] transition-colors">
              <td className="px-4 py-3 text-center text-gray-500 font-medium bg-gray-50/50">{trial.sr}</td>
              <td className="px-4 py-3 font-mono text-xs text-gray-500">{trial.studyNo}</td>
              <td className="px-4 py-3 text-gray-800 leading-relaxed font-medium">{trial.title}</td>
              <td className="px-4 py-3 font-medium text-[#2664A8]">{trial.pi}</td>
              <td className="px-4 py-3 text-center border-l border-gray-100">
                <span className={`inline-flex px-2 py-1 text-xs font-bold rounded-md ${
                  trial.status?.includes('Completed') ? 'bg-green-100 text-green-700' :
                  trial.status?.includes('Ongoing') ? 'bg-blue-100 text-[#2664A8]' :
                  trial.status?.includes('Withdrawn') ? 'bg-orange-100 text-orange-700' :
                  trial.status?.includes('Terminated') ? 'bg-red-100 text-red-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {trial.status || 'Unknown'}
                </span>
              </td>
              <td className="px-4 py-3 text-gray-600">{trial.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const HospitalInitiatedTrialsContent = () => (
  <div className="w-full py-8 text-[#565656]">
    <h3 className="text-2xl font-bold text-[#2664A8] mb-6 text-center" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>Biomedical Studies Registry</h3>
    
    <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200 max-h-[600px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
      <table className="w-full text-left bg-white text-sm">
        <thead className="bg-[#2664A8] text-white sticky top-0 z-10 shadow-sm">
          <tr>
            <th className="px-4 py-3 font-semibold text-center w-12">Sr.</th>
            <th className="px-4 py-3 font-semibold w-20">Year</th>
            <th className="px-4 py-3 font-semibold min-w-[300px]">Study Title</th>
            <th className="px-4 py-3 font-semibold w-40">Principal Investigator</th>
            <th className="px-4 py-3 font-semibold w-32 border-l border-[#2664A8]/40">Status</th>
            <th className="px-4 py-3 font-semibold w-24 text-center">Publication</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {(hospitalTrials as any[]).map((trial: any, idx: number) => (
            <tr key={idx} className="hover:bg-[#f8fbfe] transition-colors">
              <td className="px-4 py-3 text-center text-gray-500 font-medium bg-gray-50/50">{trial.sr}</td>
              <td className="px-4 py-3 text-gray-600 font-medium">{trial.studyNo}</td>
              <td className="px-4 py-3 text-gray-800 leading-relaxed font-medium">{trial.title}</td>
              <td className="px-4 py-3 font-medium text-[#2664A8]">{trial.pi}</td>
              <td className="px-4 py-3 text-center border-l border-gray-100">
                <span className={`inline-flex px-2 py-1 text-xs font-bold rounded-md ${
                  trial.status?.includes('Completed') ? 'bg-green-100 text-green-700' :
                  trial.status?.includes('Ongoing') ? 'bg-blue-100 text-[#2664A8]' :
                  trial.status?.includes('Withdrawn') ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {trial.status || 'Unknown'}
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`inline-flex px-2 py-1 text-xs font-bold rounded-md ${
                  trial.publication === 'Yes' ? 'bg-emerald-100 text-emerald-700' :
                  trial.publication === 'No' ? 'bg-gray-100 text-gray-500' :
                  'bg-gray-100 text-gray-400'
                }`}>
                  {trial.publication || '-'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ClinicalTrialSOPsContent = () => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <p className="text-[#565656] text-base leading-7 mb-8">
      For clinical trial inquiries, feasibility assessments, or partnership opportunities, please reach out to our Clinical Research Department. We welcome proposals from pharmaceutical companies, biotech firms, CROs, and academic researchers. Our team is available to discuss site capabilities, therapeutic expertise, patient demographics, and regulatory readiness. Contact us to schedule a site visit or initiate a feasibility discussion for your upcoming clinical trial.
    </p>
    <a
      href="/documents/Final MRD SOP Version 06 dated 14th July, 2025.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-[#f58634] hover:text-[#f58634]/80 transition-colors text-lg font-semibold"
      style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}
    >
      Final MRD SOP Version 06 dated 14th July, 2025
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    </a>
  </div>
);

const TrialSiteFeaturesContent = () => {
  const videoIds = [
    "isR8yiYG1XA",
    "vSuvcDar4bc",
    "yQ1-j5d3i3U",
    "JVsh6pAJIQY",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videoIds.map((videoId, index) => (
          <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0`}
              title={`Trial Site Feature ${index + 1}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

const PatientTestimonialsContent = () => {
  const videoIds = [
    "D1JGHkqiwK4",
    "0JNy8kGcNxM",
    "2113UcYTnN8",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h4 className="text-2xl font-bold mb-6 font-[family-name:var(--font-libre-baskerville)] text-[#2664A8]">
        Patient Testimonials
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videoIds.map((videoId, index) => (
          <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0`}
              title="Patient Testimonial"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

const customTabs = clinicalTrialsTabs.map(t => {
  if (t.id === "feasibility") return { ...t, content: <FeasibilityContent /> };
  if (t.id === "therapeutic-areas") return { ...t, content: <PharmaSponsoredTrialsContent /> };
  if (t.id === "infrastructure") return { ...t, content: <HospitalInitiatedTrialsContent /> };
  if (t.id === "contact") return { ...t, content: <ClinicalTrialSOPsContent /> };
  if (t.id === "our-team") return { ...t, content: <TrialSiteFeaturesContent /> };
  if (t.id === "patient-testimonials") return { ...t, content: <PatientTestimonialsContent /> };
  return t;
});

export default function ClinicalTrialsPage() {
  return (
    <main className="min-h-screen bg-white">


      <header className="text-center pt-8 pb-2">
        <h1 className="text-2xl md:text-4xl font-bold text-[#2664A8] mb-3">
          Clinical Trials
        </h1>
        <a
          href="/documents/PGDCR_Brochure_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent-orange hover:text-accent-orange-light transition-colors text-sm md:text-base"
        >
          Download Brochure
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <polyline points="9 15 12 18 15 15" />
          </svg>
        </a>
      </header>

      <HeroImage
        src="/images/clinical-trials-banner.png"
        alt="Clinical Trials at Bhaktivedanta Hospital"
      />

      <TabNavigation tabs={customTabs} hideTopBorder />
    </main>
  );
}
