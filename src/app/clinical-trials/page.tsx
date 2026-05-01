import TabNavigation from "@/components/TabNavigation";
import BannerCarousel from "@/components/BannerCarousel";
import { clinicalTrialsTabs } from "@/data/clinical-trials";
import { pharmaTrials } from "@/data/pharma-trials";
import { hospitalTrials } from "@/data/hospital-trials";
import ContactUsSection from "@/components/ContactUsSection";

const FeasibilityContent = () => (
  <div className="w-full py-8 text-[#565656] space-y-12">
    
    {/* 1. About Clinical Research Dept */}
    <div className="flex flex-col gap-10">
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

    {/* 2. Hospital and Infrastructure facilities */}
    <div className="w-full max-w-7xl mx-auto pt-6 pb-4 space-y-12">
      <h3 className="text-3xl md:text-4xl font-bold text-[#2664A8] text-center mb-16" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>
        Hospital and Infrastructure Facilities
      </h3>

      <div className="space-y-12">
        {/* Card 1: Protocol Development - Image Left */}
        <div className="group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="h-full overflow-hidden min-h-[300px]">
              <img 
                src="/images/bvh/hi/Picture2.jpg" 
                alt="Protocol Development Unit" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>
            <div className="p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#2664A8] flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h4 className="font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif', fontSize: '24px' }}>Protocol Development & Scientific Publications Unit</h4>
              </div>
              <ul className="space-y-3 list-disc pl-5 text-gray-700" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: '16px' }}>
                <li>Dedicated unit for hospital-initiated (investigator-driven) studies</li>
                <li>Expertise in protocol design, development, and regulatory compliance</li>
                <li>End-to-end support: concept → protocol → ethics approval → study execution</li>
                <li>Team of clinical researchers, biostatisticians, and medical writers</li>
                <li>Expertise in manuscript writing and publication strategy</li>
                <li>Enhances global visibility and academic impact of research</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2: Monitoring Room - Image Right */}
        <div className="group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 md:p-12 space-y-6 lg:order-1 order-2">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#2664A8] flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h4 className="font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif', fontSize: '24px' }}>Monitoring Room</h4>
              </div>
              <ul className="space-y-3 list-disc pl-5 text-gray-700" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: '16px' }}>
                <li>Dedicated space for sponsor and CRO monitors</li>
                <li>Comfortable, quiet, and fully equipped workstations</li>
                <li>Secure and confidential environment for document review</li>
                <li>On-site support for document coordination and queries</li>
                <li>Efficient handling of multiple concurrent monitoring visits</li>
                <li>Designed to ensure smooth, compliant, and timely monitoring</li>
              </ul>
            </div>
            <div className="h-full overflow-hidden min-h-[300px] lg:order-2 order-1">
              <img 
                src="/images/bvh/hi/Picture4.jpg" 
                alt="Monitoring Room" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>
          </div>
        </div>

        {/* Card 3: Storage Facility - Multi Image */}
        <div className="group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src="/images/bvh/hi/Picture6.png" alt="Storage Unit" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src="/images/bvh/hi/Picture8.png" alt="Authorized Access" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#2664A8] flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                  </div>
                  <h4 className="font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif', fontSize: '24px' }}>Secure Study Document Storage Facility</h4>
                </div>
                <ul className="space-y-3 list-disc pl-5 text-gray-700" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: '16px' }}>
                  <li>Dedicated storage area for all study-related documents</li>
                  <li>Locked cupboards with access limited to authorized study personnel</li>
                  <li>Clearly labelled and organized storage system for easy retrieval</li>
                  <li>Ensures confidentiality and data security</li>
                  <li>Efficient management of multiple concurrent studies</li>
                  <li>Maintains document integrity throughout the study lifecycle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Authorized Access - Image Left */}
        <div className="group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="h-full overflow-hidden min-h-[300px]">
              <img 
                src="/images/bvh/hi/Picture9.jpg" 
                alt="Authorized Access" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>
            <div className="p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#2664A8] flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                </div>
                <h4 className="font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif', fontSize: '24px' }}>Authorized Department Access</h4>
              </div>
              <ul className="space-y-3 list-disc pl-5 text-gray-700" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: '16px' }}>
                <li>Robust access control system ensuring secure and compliant research environment</li>
                <li>Restricted entry to authorized personnel only</li>
                <li>Protection of sensitive study data, documents, and resources</li>
                <li>Enhances data integrity and risk management</li>
                <li>Ensures adherence to regulatory and ethical standards</li>
                <li>Controlled and coordinated access for sponsors, monitors, and auditors</li>
                <li>Maintains confidentiality and smooth operational workflow</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 5: Centrifuge Unit - Image Right */}
        <div className="group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 md:p-12 space-y-6 lg:order-1 order-2">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#2664A8] flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h4 className="font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif', fontSize: '24px' }}>Centrifuge & Blood Sample Processing Unit</h4>
              </div>
              <ul className="space-y-3 list-disc pl-5 text-gray-700" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: '16px' }}>
                <li>Dedicated in-house centrifuge and sample processing facility</li>
                <li>Ensures timely and efficient sample handling</li>
                <li>Maintains sample integrity and accuracy</li>
                <li>Operated by trained and qualified staff</li>
                <li>Supports multiple concurrent clinical studies</li>
                <li>Ensures proper documentation and quality control</li>
              </ul>
            </div>
            <div className="h-full overflow-hidden min-h-[300px] lg:order-2 order-1">
              <img 
                src="/images/bvh/hi/Picture11.jpg" 
                alt="Centrifuge Unit" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>
          </div>
        </div>

        {/* Card 6: Feasibility Team - Image Left */}
        <div className="group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="h-full overflow-hidden min-h-[300px]">
              <img 
                src="/images/bvh/hi/Picture13.jpg" 
                alt="Feasibility Team" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>
            <div className="p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#2664A8] flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <h4 className="font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif', fontSize: '24px' }}>Dedicated Feasibility & Start-Up Team</h4>
              </div>
              <ul className="space-y-3 list-disc pl-5 text-gray-700" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: '16px' }}>
                <li>Dedicated feasibility team for new study assessments</li>
                <li>Single point of contact for sponsors and CROs</li>
                <li>Strong focus on quick response and efficient coordination</li>
                <li>Ensures fast start-up timelines</li>
                <li>Proactive approach with a sense of urgency</li>
                <li>Streamlined communication and decision-making process</li>
                <li>Supports smooth and accelerated study initiation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 7: Patient Room - Image Right */}
        <div className="group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 md:p-12 space-y-6 lg:order-1 order-2">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#2664A8] flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <h4 className="font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif', fontSize: '24px' }}>Patient Room</h4>
              </div>
              <ul className="space-y-3 list-disc pl-5 text-gray-700" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: '16px' }}>
                <li>Dedicated patient room within the department</li>
                <li>Designed for investigator-initiated studies</li>
                <li>Comfortable space for patient rest and observation</li>
                <li>Equipped for vital signs monitoring and basic assessments</li>
                <li>Ensures patient safety, privacy, and convenience</li>
                <li>Supports efficient study conduct and patient management</li>
                <li>Maintains a calm and patient-friendly environment</li>
              </ul>
            </div>
            <div className="h-full overflow-hidden min-h-[300px] lg:order-2 order-1">
              <img 
                src="/images/bvh/hi/Picture15.jpg" 
                alt="Patient Room" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>
          </div>
        </div>

        {/* Card 8: Offices - Full Width */}
        <div className="group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src="/images/bvh/hi/Picture17.jpg" alt="International Office" className="w-full h-96 object-cover" />
                  <div className="py-2 text-center text-xs font-bold text-[#2664A8]">INTERNATIONAL</div>
                </div>
                <div className="flex flex-col rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img src="/images/bvh/hi/Picture19.jpg" alt="Domestic Office" className="w-full h-96 object-cover" />
                  <div className="py-2 text-center text-xs font-bold text-[#2664A8]">DOMESTIC</div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#2664A8] flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <h4 className="font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif', fontSize: '24px' }}>International Clinical Trial Department & Domestic Offices</h4>
                </div>
                <ul className="space-y-3 list-disc pl-5 text-gray-700" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: '16px' }}>
                  <li>Dedicated workspace for Clinical Research Coordinators (CRCs)</li>
                  <li>Supports management of national and international clinical trials</li>
                  <li>Promotes efficient coordination and documentation</li>
                  <li>Equipped for data entry, reporting, and communication</li>
                  <li>Encourages team collaboration and workflow efficiency</li>
                  <li>Ensures adherence to protocols and regulatory requirements</li>
                  <li>Facilitates timely and accurate study execution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Card 9: IP Storage - Full Width */}
        <div className="group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
          <div className="p-8 md:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100"><img src="/images/bvh/hi/Picture20.jpg" className="w-full h-48 object-cover" /></div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100"><img src="/images/bvh/hi/Picture21.jpg" className="w-full h-48 object-cover" /></div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100"><img src="/images/bvh/hi/Picture22.jpg" className="w-full h-48 object-cover" /></div>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#2664A8] flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                </div>
                <h4 className="font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif', fontSize: '24px' }}>Investigational Product (IP) Storage Facility</h4>
              </div>
              <ul className="space-y-3 list-disc pl-5 text-gray-700" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: '16px' }}>
                <li>Controlled access to IP storage area</li>
                <li>Temperature-controlled refrigerators for product stability</li>
                <li>Dedicated study-specific refrigerators</li>
                <li>Refrigerators with different temperatures (25–30°C, 2–8°C, −20°C, and −70°C)</li>
                <li>Lock-and-key system for enhanced security</li>
                <li>Ensures proper segregation and traceability</li>
                <li>Maintains product integrity and compliance</li>
                <li>Supports regulatory requirements and audit readiness</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 10: Ethics Committee */}
          <div className="group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500">
            <div className="p-8 space-y-6 flex-grow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2664A8] flex items-center justify-center shrink-0 shadow-md shadow-blue-100">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                </div>
                <h4 className="font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif', fontSize: '24px' }}>Ethics Committee Office</h4>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-video">
                <img src="/images/bvh/hi/Picture24.jpg" alt="Ethics" className="w-full h-full object-cover" />
              </div>
              <ul className="space-y-3 list-disc pl-5 text-gray-700" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: '16px' }}>
                <li>Dedicated Ethics Committee (EC) office</li>
                <li>Ensures efficient and timely review of study protocols</li>
                <li>Maintains confidentiality and secure documentation</li>
                <li>Supports submission, review, and approval processes</li>
                <li>Facilitates communication between investigators and EC</li>
                <li>Ensures adherence to regulatory and ethical guidelines</li>
                <li>Enhances audit readiness and compliance</li>
              </ul>
            </div>
          </div>

          {/* Card 11: Data Centre */}
          <div className="group bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500">
            <div className="p-8 space-y-6 flex-grow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2664A8] flex items-center justify-center shrink-0 shadow-md shadow-blue-100">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                </div>
                <h4 className="font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif', fontSize: '24px' }}>Access-Controlled Data Centre Unit</h4>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-video">
                <img src="/images/bvh/hi/Picture26.jpg" alt="Data Centre" className="w-full h-full object-cover" />
              </div>
              <ul className="space-y-3 list-disc pl-5 text-gray-700" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: '16px' }}>
                <li>Access-controlled data centre unit</li>
                <li>Ensures secure storage of clinical trial data</li>
                <li>Restricted access to authorized personnel only</li>
                <li>Maintains data confidentiality and integrity</li>
                <li>Supports data backup and secure management systems</li>
                <li>Complies with regulatory and data protection standards</li>
                <li>Enhances audit readiness and data reliability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* 3. Feasibility Excellence */}
    <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-gray-100">
      <img 
        src="/images/bvh/Feasibility - Single point of Contact.jpg" 
        alt="Feasibility - Single Point of Contact" 
        className="w-full h-auto object-cover"
      />
    </div>

    {/* 4. Study Start-Up Timeline */}
    <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-gray-100">
      <img 
        src="/images/bvh/Feasibility Startup Timeline.jpg" 
        alt="Feasibility Startup Timeline" 
        className="w-full h-auto object-cover"
      />
    </div>

    {/* 5. Our Research Excellence */}
    <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-gray-100">
      <img 
        src="/images/bvh/Our research excellence.jpg" 
        alt="Our Research Excellence" 
        className="w-full h-auto object-cover"
      />
    </div>




    {/* 6. Virtual Tour & Insights */}
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
            <th className="px-4 py-3 font-semibold text-center w-12 shrink-0">Sr</th>
            <th className="px-4 py-3 font-semibold w-32 shrink-0">Study No.</th>
            <th className="px-4 py-3 font-semibold min-w-[300px]">Title Of Study</th>
            <th className="px-4 py-3 font-semibold w-40 shrink-0">Principle Investigator</th>
            <th className="px-4 py-3 font-semibold w-32 shrink-0 border-l border-[#2664A8]/40">Status</th>
            <th className="px-4 py-3 font-semibold w-32 shrink-0">Name of Department</th>

            <th className="px-4 py-3 font-semibold min-w-[150px]">Indications</th>
            <th className="px-4 py-3 font-semibold min-w-[150px]">Sub-Indications</th>

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

              <td className="px-4 py-3 text-gray-600 italic">{trial.indications || '-'}</td>
              <td className="px-4 py-3 text-gray-600">{trial.subIndications || '-'}</td>

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
            <th className="px-4 py-3 font-semibold text-center w-12 shrink-0">Sr</th>
            <th className="px-4 py-3 font-semibold w-20 shrink-0">Study No.</th>
            <th className="px-4 py-3 font-semibold min-w-[300px]">Study Title</th>
            <th className="px-4 py-3 font-semibold w-40 shrink-0">Principle Investigator</th>
            <th className="px-4 py-3 font-semibold w-32 shrink-0 border-l border-[#2664A8]/40">Current Status</th>
            <th className="px-4 py-3 font-semibold w-24 text-center shrink-0">Publication</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {(hospitalTrials as any[]).map((trial: any, idx: number) => (
            <tr key={idx} className="hover:bg-[#f8fbfe] transition-colors">
              <td className="px-4 py-3 text-center text-gray-500 font-medium bg-gray-50/50">{trial.sr}</td>
              <td className="px-4 py-3 text-gray-600 font-medium whitespace-nowrap">{trial.studyNo}</td>
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
      <ContactUsSection />
    </main>
  );
}
