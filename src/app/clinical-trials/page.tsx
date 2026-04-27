import TabNavigation from "@/components/TabNavigation";
import BannerCarousel from "@/components/BannerCarousel";
import { clinicalTrialsTabs } from "@/data/clinical-trials";
import { pharmaTrials } from "@/data/pharma-trials";
import { hospitalTrials } from "@/data/hospital-trials";


const FeasibilityContent = () => (
  <div className="w-full py-8 text-[#565656] space-y-12">
    
    {/* Intro Blocks */}
    <div className="flex flex-col gap-10">
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

    {/* Hospital and Infrastructure facilities */}
    <div className="w-full max-w-6xl mx-auto pt-6 pb-4">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: '#000' }}>
        Hospital and Infrastructure facilities
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div className="flex flex-col h-full">
          <img 
            src="/images/bvh/hi/Picture2.jpg" 
            alt="Biomedical & Health Research Department" 
            className="w-full h-auto object-cover flex-grow"
          />
          <div className="mt-2 border border-[#d32f2f] bg-[#ffebee] text-[#c62828] text-center font-medium py-2 px-4 text-sm md:text-base">
            Protocol Development & Scientific Publications Unit
          </div>
        </div>
        <div className="flex flex-col h-full justify-center">
          <img 
            src="/images/bvh/hi/Picture3.png" 
            alt="Infrastructure Facilities Details" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Monitoring Room row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-8">
        <div className="flex flex-col h-full">
          <img 
            src="/images/bvh/hi/Picture4.jpg" 
            alt="Monitoring Room" 
            className="w-full h-auto object-cover flex-grow"
          />
          <div className="mt-2 border border-[#d32f2f] bg-[#ffebee] text-[#c62828] text-center font-medium py-2 px-4 text-sm md:text-base">
            Monitoring Room
          </div>
        </div>
        <div className="flex flex-col h-full justify-center">
          <img 
            src="/images/bvh/hi/Picture5.png" 
            alt="Monitoring Room Details" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>


    {/* Single Point of Contact Banner */}
    <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-gray-100">
      <img 
        src="/images/bvh/Feasibility - Single point of Contact.jpg" 
        alt="Feasibility - Single Point of Contact" 
        className="w-full h-auto object-cover"
      />
    </div>

    {/* Feasibility Startup Timeline */}
    <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-gray-100">
      <img 
        src="/images/bvh/Feasibility Startup Timeline.jpg" 
        alt="Feasibility Startup Timeline" 
        className="w-full h-auto object-cover"
      />
    </div>

    {/* Our Research Excellence */}
    <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-gray-100">
      <img 
        src="/images/bvh/Our research excellence.jpg" 
        alt="Our Research Excellence" 
        className="w-full h-auto object-cover"
      />
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
    <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-gray-100 mb-10">
      <img 
        src="/images/bvh/Pharma Sponsored Trials.png" 
        alt="Pharma Sponsored Trials" 
        className="w-full h-auto object-cover"
      />
    </div>

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
    <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-gray-100 mb-10">
      <img 
        src="/images/bvh/Hospital Initiated Innovative Studies.png" 
        alt="Hospital Initiated Innovative Studies" 
        className="w-full h-auto object-cover"
      />
    </div>

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



const clinicalTrialsBannerImages = [
  { src: "/images/bvh/Authorized department access.jpg", caption: "Authorized Access Control" },
  { src: "/images/bvh/feasibility and startup team.jpg", caption: "Feasibility and Start-up Team" },
  { src: "/images/bvh/IP storage facility.jpg", caption: "Investigational Product Storage" },
  { src: "/images/bvh/study document storage facility.jpg", caption: "Study Document Storage Facility" },
  { src: "/images/bvh/patient room.jpg", caption: "Patient Examination Room" },
  { src: "/images/bvh/centrifuge and blood processing unit.jpg", caption: "Centrifuge & Blood Processing Unit" },
  { src: "/images/High-Resolution MRI Imaging.jpg", caption: "High Resolution MRI Imaging" },
  { src: "/images/High-Precision CT Scan Facility.jpg", caption: "High Precision CT Scan Facility" },
  { src: "/images/Comprehensive Dialysis Unit.jpg", caption: "Comprehensive Dialysis Care Unit" },
  { src: "/images/Advanced Radiation Therapy Unit.jpg", caption: "Advanced Radiation Therapy Unit" },
];

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

      <BannerCarousel images={clinicalTrialsBannerImages} />

      <TabNavigation tabs={customTabs} hideTopBorder />
    </main>
  );
}
