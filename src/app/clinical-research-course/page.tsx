
import HeroCarousel from "@/components/HeroCarousel";
import TabNavigation from "@/components/TabNavigation";
import { tabs } from "@/data/pgcr";

const alumniImages = Array.from({ length: 57 }, (_, i) => `/images/Clinical Research Course/aluminni/${i + 1}.png`);

const OverviewContent = () => (
  <div className="flex flex-col gap-8 text-[#565656]">
    {/* Videos Section - Horizontally Scrollable */}
    <div className="flex overflow-x-auto gap-4 pb-4" style={{ scrollbarWidth: "thin" }}>
      <iframe className="w-[320px] h-[180px] sm:w-[480px] sm:h-[270px] flex-shrink-0 rounded-lg shadow-md border-2 border-transparent hover:border-[#f58634] transition-colors" src="https://www.youtube.com/embed/D52rEuUBVTE" title="1 Min Enrolment Video" allowFullScreen></iframe>
      <iframe className="w-[320px] h-[180px] sm:w-[480px] sm:h-[270px] flex-shrink-0 rounded-lg shadow-md border-2 border-transparent hover:border-[#f58634] transition-colors" src="https://www.youtube.com/embed/IvtK9KAqQtE" title="Student Experience Video" allowFullScreen></iframe>
      <iframe className="w-[320px] h-[180px] sm:w-[480px] sm:h-[270px] flex-shrink-0 rounded-lg shadow-md border-2 border-transparent hover:border-[#f58634] transition-colors" src="https://www.youtube.com/embed/HE3vn0wAKjU?start=26" title="Clinical Research Course Overview" allowFullScreen></iframe>
      <iframe className="w-[320px] h-[180px] sm:w-[480px] sm:h-[270px] flex-shrink-0 rounded-lg shadow-md border-2 border-transparent hover:border-[#f58634] transition-colors" src="https://www.youtube.com/embed/TEnwpX3W-NE" title="Clinical Research Course India" allowFullScreen></iframe>
      <iframe className="w-[320px] h-[180px] sm:w-[480px] sm:h-[270px] flex-shrink-0 rounded-lg shadow-md border-2 border-transparent hover:border-[#f58634] transition-colors" src="https://www.youtube.com/embed/Ah9l5Emfyyw" title="Phases of Clinical Trial" allowFullScreen></iframe>
    </div>

    <div className="space-y-6">
      <p className="text-base leading-relaxed font-medium">
        The Post Graduate Clinical Research (PGCR) course is a 15-month comprehensive program that integrates strong theoretical foundations with extensive hands-on clinical research training. The course commences in July and concludes in September of the following year, ensuring in-depth exposure to real-world clinical research practices.
      </p>
      <p className="text-base leading-relaxed font-medium">
        Admissions for the PGCR course open in February each year and follow a simple three-step selection process. Applicants receive the selection intimation within 7 working days after completion of the interview.
      </p>
      <p className="text-base leading-relaxed font-medium">
        The curriculum comprises 11 structured academic modules along with one year of intensive hands-on training, designed to equip students with practical skills and regulatory knowledge essential for a successful career in clinical research.
      </p>

      <div className="mt-8">
        <h4 className="text-2xl font-bold mb-4 font-[family-name:var(--font-libre-baskerville)] text-[#2664A8]">WHY CHOOSE US?</h4>
        <ul className="list-disc pl-6 space-y-3 text-base font-medium">
          <li><strong>Expert Teaching:</strong> Learn directly from doctors with 20+ years of research experience and seasoned industry professionals.</li>
          <li><strong>Course Materials:</strong> Access high-quality materials, regular assessments, and personalized academic support.</li>
          <li><strong>Interactive Education Platform:</strong> Participate in live sessions and collaborate seamlessly with peers and mentors.</li>
          <li><strong>Industry Interview Preparations:</strong> Get resume building support, industry insights, and mock interview practice.</li>
          <li><strong>Hands-on Project Assignments:</strong> Work on real-world clinical trials to gain practical exposure.</li>
          <li><strong>Placement Assistance:</strong> Dedicated Support to help you secure job Opportunities.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="text-2xl font-bold mb-4 font-[family-name:var(--font-libre-baskerville)] text-[#2664A8]">PRACTICAL TRAINING:</h4>
        <ul className="list-disc pl-6 space-y-3 text-base font-medium">
          <li><strong>Internship:</strong> Each student is assigned to a clinical trial as an intern from the beginning of the program.</li>
          <li><strong>Hands-on Training:</strong> Students gain exposure to live clinical research operations, enabling them to connect classroom learning with real-world practice.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="text-2xl font-bold mb-4 font-[family-name:var(--font-libre-baskerville)] text-[#2664A8]">Course Modules</h4>
        <ul className="list-none space-y-2 text-base font-medium">
          <li><span className="font-bold mr-2 text-[#f58634]">Module I:</span> Basics of Clinical Research & Stakeholders in Clinical Research</li>
          <li><span className="font-bold mr-2 text-[#f58634]">Module II:</span> Basic Pharmacology in Clinical Research & Drug Development</li>
          <li><span className="font-bold mr-2 text-[#f58634]">Module III:</span> Ethics in Clinical Research & Ethical Guidelines</li>
          <li><span className="font-bold mr-2 text-[#f58634]">Module IV:</span> Regulations in Clinical Research</li>
          <li><span className="font-bold mr-2 text-[#f58634]">Module V:</span> Clinical Research Methodology</li>
          <li><span className="font-bold mr-2 text-[#f58634]">Module VI:</span> Clinical Trial Monitoring, Audits & Inspections</li>
          <li><span className="font-bold mr-2 text-[#f58634]">Module VII:</span> Clinical Data Management</li>
          <li><span className="font-bold mr-2 text-[#f58634]">Module VIII:</span> Drug Safety & Pharmacovigilance</li>
          <li><span className="font-bold mr-2 text-[#f58634]">Module IX:</span> Medical Writing</li>
          <li><span className="font-bold mr-2 text-[#f58634]">Module X:</span> Medical Device Clinical Trials</li>
          <li><span className="font-bold mr-2 text-[#f58634]">Module XI:</span> Virtual Clinical Trials & Emerging Technologies</li>
        </ul>
      </div>

      <div className="pt-6 pb-2 flex justify-center lg:justify-start">
        <iframe
          className="w-full max-w-3xl aspect-video rounded-lg shadow-md border-2 border-transparent hover:border-[#f58634] transition-colors"
          src="https://www.youtube.com/embed/isR8yiYG1XA"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
);

const placementVideos = [
  "fDobPkZWufU",
  "77ayq8Dmx6E",
  "Rx8Fq2-tTc4",
  "kGB_ZXMR9hQ",
  "rVtvLaS1tkg",
  "CqjXkAS3ugg",
  "DNLCsOynAIk",
  "TzAVOpuDLx0",
  "WlidXnO4ghs",
  "IB5WQ-kBe3o",
  "3weDoURJ4jo",
  "R6pEWJSjMXE",
  "uj5KeHVDpVs",
  "6hKVa4wZ_8w",
  "siNfluYvrTY",
  "y7LTvu4YE5Q",
  "sL6A87FkXoQ",
  "-5nY6hU8SFk",
  "uZMEsqtLIYw",
  "uSLjtdjxeoI",
  "FeNp7C2bDN8",
  "__QfPfy2ssg",
  "mYvaHT56GGw",
  "sayJu7KV_v4",
  "vRGZhk4oEzA",
  "TBi8HVT6GdU",
  "0-kJoKkUDt4",
  "booyki6HVp0",
  "2nvn5cAFEKc",
  "nvnJkQOjB50",
  "oRv6bpKLNXA",
  "Yeu2aXhqePc",
  "FDxYrtqsyzk",
  "mt8xDILxWb8",
  "E_7E0HYzSyo",
  "L37e8BXfHAo",
  "IUpKEGOz-e0",
  "-7sx8DJzxug"
];

const CoursesContent = () => (
  <div className="flex flex-col gap-8 text-[#565656]">
    <p className="text-base leading-relaxed font-medium">
      Hear directly from our students about their learning experience and career transformation through the PGCR program.
    </p>
  </div>
);

const RecentPlacementsContent = () => (
  <div className="flex flex-col gap-8 text-[#565656]">
    <p className="text-base leading-relaxed font-medium">
      Our PGCR students are successfully placed in reputed hospitals, CROs, and
      research organizations, building strong careers in the clinical research industry.
    </p>

    <div className="py-2 flex justify-center lg:justify-start">
      <iframe
        className="w-full max-w-3xl aspect-video rounded-lg shadow-md border-2 border-transparent hover:border-[#f58634] transition-colors"
        src="https://www.youtube.com/embed/XZJza4GXT2I?start=132"
        title="Recent Placements Video"
        allowFullScreen
      ></iframe>
    </div>

    {/* Video Gallery move from testimonials */}
    <div>
      {/* <h4 className="text-2xl font-bold mb-4 font-[family-name:var(--font-libre-baskerville)] text-[#2664A8]">Employee Testimonials</h4> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {placementVideos.map((videoId, index) => (
          <div key={index} className="relative aspect-video overflow-hidden rounded-lg shadow-sm border border-transparent hover:border-[#f58634] transition-colors">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Employee Testimonial ${index + 1}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>

    {/* Image Gallery */}
    <div className="py-[15px] border-t border-gray-100">
      <h4 className="text-2xl font-bold mb-4 font-[family-name:var(--font-libre-baskerville)] text-[#2664A8]">Our Placed Alumni</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-[5px]">
        {alumniImages.map((src, index) => (
          <div key={index} className="relative overflow-hidden flex items-center justify-center transition-transform hover:z-10 hover:scale-[1.03]">
            <img src={src} alt={`Recent Placement ${index + 1}`} className="w-full h-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AdmissionProcessContent = () => (
  <div className="flex flex-col items-center w-full py-4 text-[#565656]">

    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-16 pt-4">
      {/* Flowchart Section */}
      <div className="flex flex-col items-center w-full max-w-[340px]">
        {/* Step 1 */}
        <div className="flex flex-col items-center relative z-10 w-full">
          <div className="w-11 h-11 rounded-full border-[2.5px] border-slate-900 bg-[#FFB800] flex items-center justify-center text-white font-bold text-xl -mb-5 z-20 relative shadow-sm">
            1
          </div>
          <div className="bg-[#145B7A] text-white px-6 pb-6 pt-9 rounded-2xl w-full text-center text-[15px] sm:text-base font-medium shadow-[0_4px_10px_rgba(0,0,0,0.25)] border-[2.5px] border-slate-900 leading-snug">
            Fill the application form and<br />Complete Application fees
          </div>
        </div>

        {/* Arrow 1 */}
        <div className="flex justify-center -mt-2 -mb-2 z-0">
          <svg width="32" height="46" viewBox="0 0 45 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
            <path d="M14 0V38H0L22.5 65L45 38H31V0H14Z" fill="#ECAAE2" stroke="#0f172a" strokeWidth="3" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center relative z-10 w-full">
          <div className="w-11 h-11 rounded-full border-[2.5px] border-slate-900 bg-[#FFB800] flex items-center justify-center text-white font-bold text-xl -mb-5 z-20 relative shadow-sm">
            2
          </div>
          <div className="bg-[#145B7A] text-white px-6 pb-6 pt-9 rounded-2xl w-full text-center text-[15px] sm:text-base font-medium shadow-[0_4px_10px_rgba(0,0,0,0.25)] border-[2.5px] border-slate-900 leading-snug">
            Eligibility screening through<br />Aptitude test and Personal<br />interview
          </div>
        </div>

        {/* Arrow 2 */}
        <div className="flex justify-center -mt-2 -mb-2 z-0">
          <svg width="32" height="46" viewBox="0 0 45 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
            <path d="M14 0V38H0L22.5 65L45 38H31V0H14Z" fill="#ECAAE2" stroke="#0f172a" strokeWidth="3" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center relative z-10 w-full">
          <div className="w-11 h-11 rounded-full border-[2.5px] border-slate-900 bg-[#FFB800] flex items-center justify-center text-white font-bold text-xl -mb-5 z-20 relative shadow-sm">
            3
          </div>
          <div className="bg-[#145B7A] text-white px-6 pb-6 pt-9 rounded-2xl w-full text-center text-[15px] sm:text-base font-medium shadow-[0_4px_10px_rgba(0,0,0,0.25)] border-[2.5px] border-slate-900 leading-snug">
            Confirmation of enrolment via<br />email within 7 working days
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center w-full max-w-[450px]">
        <img src="/images/steps-to-admission.png" alt="Steps to Admission" className="w-full object-contain" />
      </div>
    </div>

    {/* Integrated Application Form */}
    <div className="w-full mt-10">
      <ApplicationFormContent />
    </div>

    {/* Informational Videos */}
    <div className="w-full mt-16 pt-10 border-t border-gray-200">
      <h3 className="text-3xl font-bold text-[#2664A8] mb-8 text-center" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>
        Learn More
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        <div className="flex flex-col">
          <div className="relative pb-[56.25%] h-0 mb-4 rounded-xl overflow-hidden shadow-md bg-gray-100">
            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/b5R-uR5cya8" title="Transparent Fee Structure" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <h4 className="text-lg font-bold text-gray-800 text-center">Transparent Fee Structure</h4>
        </div>

        <div className="flex flex-col">
          <div className="relative pb-[56.25%] h-0 mb-4 rounded-xl overflow-hidden shadow-md bg-gray-100">
            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/73u-Ygaz74k" title="Admission Process" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <h4 className="text-lg font-bold text-gray-800 text-center">Admission Process</h4>
        </div>

        <div className="flex flex-col">
          <div className="relative pb-[56.25%] h-0 mb-4 rounded-xl overflow-hidden shadow-md bg-gray-100">
            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/RDBbjRuxn-0" title="Eligibility Explained" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <h4 className="text-lg font-bold text-gray-800 text-center">Eligibility Explained</h4>
        </div>
      </div>
    </div>
  </div>
);

const ApplicationFormContent = () => (
  <div className="bg-[#eef7fd] rounded-2xl overflow-hidden shadow-md w-full">
    <div className="bg-[#2664A8] py-4 px-6 md:px-8">
      <h2 className="text-white text-2xl font-bold" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>Application Form</h2>
    </div>

    <form action="https://formsubmit.co/drvijaykumar.g@bhaktivedantahospital.com" method="POST" encType="multipart/form-data" className="p-6 md:p-10 space-y-8 md:space-y-12 text-sm md:text-base text-gray-700">
      <input type="hidden" name="_cc" value="drtejasvee.k@bhaktivedantahospital.com" />
      <input type="hidden" name="_subject" value="New PGCR Application Form Submitted" />

      {/* Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        <input type="text" name="applicant_surname" placeholder="Applicant's Surname" className="p-3.5 bg-white rounded border border-gray-200 outline-none focus:border-[#2664A8]" />
        <input type="text" name="applicant_name" placeholder="Applicant's Name *" required className="p-3.5 bg-white rounded border border-gray-200 outline-none focus:border-[#2664A8]" />
        <input type="text" name="applicant_middle_name" placeholder="Applicant's Middle Name" className="p-3.5 bg-white rounded border border-gray-200 outline-none focus:border-[#2664A8]" />

        <input type="date" name="dob" placeholder="dd/mm/yyyy" className="p-3.5 bg-white rounded border border-gray-200 outline-none focus:border-[#2664A8] text-gray-700 w-full" />
        <div className="relative">
          <select name="gender" required defaultValue="" className="p-3.5 bg-white rounded border border-gray-200 outline-none focus:border-[#2664A8] text-gray-700 w-full appearance-none">
            <option value="" disabled>Gender *</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" /></svg>
          </div>
        </div>
        <input type="text" name="nationality" placeholder="Nationality *" required className="p-3.5 bg-white rounded border border-gray-200 outline-none focus:border-[#2664A8]" />
      </div>

      {/* Applicant Contact details */}
      <div>
        <h3 className="text-[#2664A8] text-xl font-bold mb-5">Applicant's Contact details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          <input type="tel" name="applicant_telephone" placeholder="Telephone No" className="p-3.5 bg-white rounded border border-gray-200 outline-none focus:border-[#2664A8]" />
          <input type="tel" name="applicant_mobile" placeholder="Mobile No *" required className="p-3.5 bg-white rounded border border-gray-200 outline-none focus:border-[#2664A8]" />
          <input type="email" name="applicant_email" placeholder="Email ID *" required className="p-3.5 bg-white rounded border border-gray-200 outline-none focus:border-[#2664A8]" />
        </div>
      </div>

      {/* Guardian Contact details */}
      <div>
        <h3 className="text-[#2664A8] text-xl font-bold mb-5">Guardian's Contact details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mb-5 md:mb-8">
          <input type="text" name="guardian_name" placeholder="Father's/Legal Guardian's name *" required className="p-3.5 bg-white rounded border border-gray-200 outline-none focus:border-[#2664A8]" />
          <input type="tel" name="guardian_telephone" placeholder="Telephone No" className="p-3.5 bg-white rounded border border-gray-200 outline-none focus:border-[#2664A8]" />
          <input type="tel" name="guardian_mobile" placeholder="Mobile No *" required className="p-3.5 bg-white rounded border border-gray-200 outline-none focus:border-[#2664A8]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          <input type="email" name="guardian_email" placeholder="Email ID" className="p-3.5 bg-white rounded border border-gray-200 outline-none focus:border-[#2664A8] md:col-span-1" />
          <textarea name="local_residential_address" placeholder="Local residential address *" required rows={2} className="p-3.5 bg-white rounded border border-gray-200 outline-none focus:border-[#2664A8] md:col-span-2 resize-none"></textarea>
        </div>
      </div>

      {/* File Uploads */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div>
          <label className="block text-[#2664A8] text-sm mb-2 font-medium">Photo *</label>
          <input type="file" name="photo" required className="text-sm w-full bg-white border border-gray-200 p-1.5 rounded cursor-pointer file:cursor-pointer file:border-0 file:bg-gray-100 file:border-r file:border-gray-200 file:px-3 file:py-1 file:mr-3 hover:file:bg-gray-200 transition-all" />
        </div>
        <div>
          <label className="block text-[#2664A8] text-sm mb-2 font-medium">Copy of Signed Curriculum Vitae *</label>
          <input type="file" name="cv" required className="text-sm w-full bg-white border border-gray-200 p-1.5 rounded cursor-pointer file:cursor-pointer file:border-0 file:bg-gray-100 file:border-r file:border-gray-200 file:px-3 file:py-1 file:mr-3 hover:file:bg-gray-200 transition-all" />
        </div>
        <div>
          <label className="block text-[#2664A8] text-sm mb-2 font-medium">Identity Proof *</label>
          <input type="file" name="id_proof" required className="text-sm w-full bg-white border border-gray-200 p-1.5 rounded cursor-pointer file:cursor-pointer file:border-0 file:bg-gray-100 file:border-r file:border-gray-200 file:px-3 file:py-1 file:mr-3 hover:file:bg-gray-200 transition-all" />
        </div>
        <div className="md:col-span-3">
          <label className="block text-[#2664A8] text-sm mb-2 font-medium">Address Proof *</label>
          <input type="file" name="address_proof" required className="text-sm w-full md:w-1/3 bg-white border border-gray-200 p-1.5 rounded cursor-pointer file:cursor-pointer file:border-0 file:bg-gray-100 file:border-r file:border-gray-200 file:px-3 file:py-1 file:mr-3 hover:file:bg-gray-200 transition-all" />
        </div>
      </div>

      {/* Academic Qualifications Table */}
      <div className="overflow-x-auto pt-4 pb-4 w-full">
        <table className="w-full border-separate border-spacing-y-3 min-w-[1050px]">
          <thead>
            <tr className="bg-[#2664A8] text-white">
              <th className="px-4 py-3 text-left font-medium text-sm whitespace-nowrap w-[12%]">Qualification</th>
              <th className="px-2 py-3 text-left font-medium text-sm whitespace-nowrap w-[18%]">Year of Passing</th>
              <th className="px-2 py-3 text-left font-medium text-sm whitespace-nowrap w-[24%]">Academic Institution where obtained</th>
              <th className="px-2 py-3 text-left font-medium text-sm whitespace-nowrap w-[14%]">Percentages / Grade</th>
              <th className="px-2 py-3 text-left font-medium text-sm whitespace-nowrap w-[16%]">Certification</th>
              <th className="px-2 py-3 text-left font-medium text-sm whitespace-nowrap w-[16%]">Marksheet</th>
            </tr>
          </thead>
          <tbody>
            {['10TH', '12TH', 'Graduation', 'Post Graduation', 'Any Other'].map((level, idx) => {
              const isMandatory = level !== 'Any Other' && level !== 'Post Graduation';
              const namePrefix = level.replace(/\s+/g, '_').toLowerCase();
              return (
                <tr key={idx} className="bg-transparent">
                  <td className="px-4 py-1.5 text-gray-800 align-middle whitespace-nowrap text-sm font-medium">{level}</td>
                  <td className="px-2 py-1.5 align-middle"><input type="text" name={`${namePrefix}_year_of_passing`} placeholder={isMandatory ? "Year of Passing *" : "Year of Passing"} required={isMandatory} className="w-full p-2.5 bg-white border border-gray-200 rounded outline-none text-sm focus:border-[#2664A8]" /></td>
                  <td className="px-2 py-1.5 align-middle"><input type="text" name={`${namePrefix}_academic_institution`} placeholder={isMandatory ? "Academic Institution *" : "Academic Institution"} required={isMandatory} className="w-full p-2.5 bg-white border border-gray-200 rounded outline-none text-sm focus:border-[#2664A8]" /></td>
                  <td className="px-2 py-1.5 align-middle"><input type="text" name={`${namePrefix}_percentages`} placeholder="Percentages" className="w-full p-2.5 bg-white border border-gray-200 rounded outline-none text-sm focus:border-[#2664A8]" /></td>
                  <td className="px-2 py-1.5 align-middle">
                    <input type="file" name={`${namePrefix}_certification`} className="w-full text-xs bg-white border border-gray-200 p-1.5 rounded cursor-pointer file:cursor-pointer file:border-0 file:bg-gray-100 file:border-r file:border-gray-200 file:px-2 file:py-1 file:mr-2 hover:file:bg-gray-200" />
                  </td>
                  <td className="px-2 py-1.5 align-middle">
                    <input type="file" name={`${namePrefix}_marksheet`} className="w-full text-xs bg-white border border-gray-200 p-1.5 rounded cursor-pointer file:cursor-pointer file:border-0 file:bg-gray-100 file:border-r file:border-gray-200 file:px-2 file:py-1 file:mr-2 hover:file:bg-gray-200" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Declaration & Submit */}
      <div className="text-center pt-8 pb-4 flex flex-col items-center">
        <label className="flex items-center justify-center gap-3 mb-8 cursor-pointer text-gray-700 group">
          <div className="relative flex items-center justify-center">
            <input type="checkbox" name="declaration" required className="w-5 h-5 border-2 border-[#2664A8] rounded appearance-none checked:bg-[#2664A8] checked:border-transparent outline-none transition-colors cursor-pointer peer" />
            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-sm md:text-base select-none">I hereby declare that the information given in this application is true and correct.</span>
        </label>

        <button type="submit" className="bg-[#f58634] text-white px-12 py-3 rounded text-lg font-medium hover:bg-opacity-90 hover:shadow-lg transition-all shadow-md active:scale-95 border border-[#f58634]">
          Submit
        </button>
      </div>

    </form>
  </div>
);

const CareerOpportunitiesContent = () => (
  <div className="flex flex-col w-full py-8 text-[#565656] space-y-12">

    {/* Career Options Overview Graphic */}
    <div className="w-full flex flex-col justify-center items-center -mt-4 mb-4">
      <h3 className="text-3xl font-bold text-[#2664A8] mb-8 font-serif">Pathways to Success</h3>
      <img src="/images/logo/Career Options for CRC High Resolution.png" alt="Career options for CRC" className="w-full max-w-5xl rounded-xl shadow-sm border border-gray-100" />
    </div>

    {/* CRC */}
    <div className="flex flex-col md:flex-row gap-8 items-start bg-[#f8fbfe] p-8 rounded-2xl border border-blue-100 shadow-sm">
      <div className="w-full md:w-1/3 flex-shrink-0">
        <img src="/images/Clinical%20Research%20Course/career_opp/CRC.png" alt="Clinical Research Coordinator" className="w-full rounded-xl shadow-md border border-gray-200" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-2">
          <h3 className="text-3xl font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>Clinical Research Coordinator (CRC) Role</h3>
        </div>

        <h4 className="text-lg font-bold text-gray-800">What does a Clinical Research Coordinator (CRC) do?</h4>
        <p className="leading-relaxed">CRCs manage daily trial activities at the site level, recruiting participants, obtaining informed consent, maintaining regulatory documentation, and coordinating with sponsors and IRBs.</p>

        <h4 className="text-lg font-bold text-gray-800">Where do CRC positions typically work?</h4>
        <p className="leading-relaxed">CRCs are embedded in hospital research units, academic medical centers, or private clinics, offering a structured schedule with occasional after-hours work.</p>

        <h4 className="text-lg font-bold text-gray-800">What are the career paths for a CRC?</h4>
        <p className="leading-relaxed">Career paths include Senior CRC, CRC Team Lead, Study Start-Up Specialist, and Clinical Research Manager.</p>
      </div>
    </div>

    {/* CRA */}
    <div className="flex flex-col md:flex-row-reverse gap-8 items-start bg-[#f8fbfe] p-8 rounded-2xl border border-blue-100 shadow-sm">
      <div className="w-full md:w-1/3 flex-shrink-0">
        <img src="/images/Clinical%20Research%20Course/career_opp/Clinical%20Research%20Associate%20(CRA).png" alt="Clinical Research Associate (CRA)" className="w-full rounded-xl shadow-md border border-gray-200" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col space-y-4">
        <h3 className="text-3xl font-bold text-[#2664A8] mb-2" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>Clinical Research Associate (CRA) Explained</h3>

        <h4 className="text-lg font-bold text-gray-800">What is a Clinical Research Associate (CRA)?</h4>
        <p className="leading-relaxed">CRAs conduct on-site and remote visits, verify adherence across sites, review CRFs and source documents, ensure sites submit documents to IRB/ethics committees, and bridge sponsors/CROs and site teams.</p>

        <h4 className="text-lg font-bold text-gray-800">Where do CRAs typically work?</h4>
        <p className="leading-relaxed">CRAs usually work within a sponsor’s clinical operations or a CRO’s monitoring group.</p>

        <h4 className="text-lg font-bold text-gray-800">What are the CRA's responsibilities?</h4>
        <p className="leading-relaxed">CRAs conduct on-site and remote visits, verify adherence across sites, review CRFs and source documents, ensure sites submit documents to IRB/ethics committees, and bridge sponsors/CROs and site teams.</p>

        <h4 className="text-lg font-bold text-gray-800">What is the typical work schedule?</h4>
        <p className="leading-relaxed">Expect a flexible mix of fieldwork, often 60–80% travel and office time for monitoring reports, site evaluations, and stakeholder meetings.</p>

        <h4 className="text-lg font-bold text-gray-800">What is the future career path?</h4>
        <ul className="list-decimal list-inside space-y-2 leading-relaxed">
          <li>Senior CRA (mentoring junior monitors, leading larger studies)</li>
          <li>Lead CRA/Feasibility Leader (overseeing site selection, budgeting)</li>
          <li>Project Manager (managing full study lifecycle and budgets)</li>
          <li>Clinical Operations Director (leading global teams, strategy)</li>
        </ul>
      </div>
    </div>

    {/* Medical Writer */}
    <div className="flex flex-col md:flex-row gap-8 items-start bg-[#f8fbfe] p-8 rounded-2xl border border-blue-100 shadow-sm">
      <div className="w-full md:w-1/3 flex-shrink-0">
        <img src="/images/Clinical%20Research%20Course/career_opp/Medical%20writer%20Entry%20Level.png" alt="Medical Writer" className="w-full rounded-xl shadow-md border border-gray-200" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-2">
          <h3 className="text-3xl font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>Medical Writer Role</h3>
        </div>

        <h4 className="text-lg font-bold text-gray-800">What does an Entry-Level Medical Writer do?</h4>
        <p className="leading-relaxed">They support the development of scientifically accurate, well-structured medical and regulatory documents, working closely with clinical, regulatory, and quality teams to create content that complies with global guidelines and timelines.</p>

        <h4 className="text-lg font-bold text-gray-800">What are some of the tasks involved?</h4>
        <p className="leading-relaxed">Assisting in drafting and editing clinical research documents, supporting the preparation of scientific manuscripts, summarizing clinical data, conducting literature searches, coordinating with teams, incorporating reviewer comments, and supporting submission-ready documentation.</p>

        <h4 className="text-lg font-bold text-gray-800">What qualifications are needed?</h4>
        <p className="leading-relaxed">A Life Science background (BPharm, M Pharm, PharmD, MBBS, BDS, MSc, Biotechnology), a diploma or certification in Medical Writing or Clinical Research is preferred, and freshers or candidates with 0–1 year of experience may apply.</p>

        <h4 className="text-lg font-bold text-gray-800">What skills are important?</h4>
        <p className="leading-relaxed">Strong written and verbal English communication, basic understanding of clinical trial phases, medical terminology, and the drug development process, attention to detail, strong organizational skills, ability to work under deadlines, familiarity with MS Word, PowerPoint, and reference management tools, knowledge of regulatory writing standards, exposure to publication or regulatory documents, basic understanding of statistics and clinical data, and awareness of plagiarism and ethical writing practices.</p>
      </div>
    </div>

    {/* Regulatory Affairs Executive */}
    <div className="flex flex-col md:flex-row-reverse gap-8 items-start bg-[#f8fbfe] p-8 rounded-2xl border border-blue-100 shadow-sm text-left">
      <div className="w-full md:w-1/3 flex-shrink-0">
        <img src="/images/logo/regulatory.png" alt="Regulatory Affairs Executive Role" className="w-full rounded-xl shadow-md border border-gray-200" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-2">
          <h3 className="text-3xl font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>Regulatory Affairs Executive Role</h3>
        </div>

        <h4 className="text-lg font-bold text-gray-800">What does a Regulatory Affairs Executive do?</h4>
        <p className="leading-relaxed">They support regulatory submissions and compliance activities to ensure products meet national and international regulatory requirements.</p>

        <h4 className="text-lg font-bold text-gray-800">What are the key responsibilities?</h4>
        <p className="leading-relaxed">Preparing and submitting regulatory dossiers, supporting submissions, ensuring compliance, monitoring regulatory changes, maintaining databases, coordinating with teams, supporting post-approval activities, assisting during inspections, reviewing documents, and responding to queries.</p>

        <h4 className="text-lg font-bold text-gray-800">What are the qualifications?</h4>
        <p className="leading-relaxed">BPharm / MPharm / PharmD / MSc (Life Sciences) / Biotechnology, a Diploma or certification in Regulatory Affairs preferred, 0–2 years of experience, and a basic understanding of the drug approval process, clinical trial regulations, and CTD / eCTD structure.</p>

        <h4 className="text-lg font-bold text-gray-800">What skills are important?</h4>
        <p className="leading-relaxed">Strong documentation and communication skills, attention to detail, ability to meet timelines, proficiency in MS Office tools, and exposure to regulatory submissions.</p>
      </div>
    </div>

  </div>
);

const industryVideos = [
  { id: "Aj0YQsmGdPU", title: "Industry Video 1" },
  { id: "SK5gOJbQEcc", title: "Industry Video 2" },
  { id: "-7sx8DJzxug", title: "Become a clinical research professional – Ms. Shruti Patil" },
  { id: "BsdVNO50Owk", title: "Dr. Sankhe Convocation Video" },
  { id: "pU2SCYqnojw", title: "Dr. Raut Video" },
  { id: "NQFhprSgCiw", title: "Ms. Shirley Nalla" },
  { id: "6YLx6E_ATR4", title: "Mr. Sooraj Santosh" },
  { id: "Nz0ENjsZZgo", title: "Ms. Manasvi Dodiya" },
  { id: "RN5VX_mDfDc", title: "Ms. Mayuri Thorat" },
  { id: "AGbYEbck_TE", title: "Mr. Sai Pevekar" },
  { id: "r2PAe8QM7gE", title: "Mrs. Jinal Panchal" },
  { id: "Q1sqxbxn1bE", title: "Ms. Aditi Tiwari" },
  { id: "o1SMZRlhXQw", title: "Dental Doctors Video" },
  { id: "XPmVyzcES0o", title: "Dr. Dalal Video" },
  { id: "SIRNHgOciIk", title: "ISCR Video 1" },
  { id: "_4EZ52iD3gU", title: "ISCR Video 2" },
  { id: "Aib29kim-TY", title: "Dr. Vijay Video" }
];

const IndustryVideosContent = () => (
  <div className="w-full py-8 text-[#565656]">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
      {industryVideos.map((video, index) => (
        <div key={index} className="flex flex-col">
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-md bg-gray-100 border border-gray-200">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const facultyData = [
  {
    name: "Dr. Ajay Sankhe",
    qualification: "MBBS, MD (Pediatrics)",
    designation: "Director & Sr. Consultant – Pediatrics & Neonatology",
    image: "/images/Clinical Research Course/faculty/Dr. Ajay Sankhe .jpg"
  },
  {
    name: "Dr. Vijaykumar Gawali",
    qualification: "Clinical Research & Education",
    designation: "NABH Assessor – Clinical Trial Program",
    image: "/images/logo/Project Quotation Background from Dr. Vijay.png"
  },
  {
    name: "Dr. Komal Dalal",
    qualification: "MBBS, DGO, PGDPC",
    designation: "Clinical Research Advisor",
    image: "/images/Clinical Research Course/faculty/Dr. Komal Dalal.png"
  },
  {
    name: "Dr. Nanasaheb Memane",
    qualification: "BAMS, MS (Ayurveda)",
    designation: "HOD – Ayurveda",
    image: "/images/Clinical Research Course/faculty/Dr. Nanasaheb Memane.png"
  },
  {
    name: "Dr. Sivaprasad Gourabathini",
    qualification: "MBBS, MS, MCh (Urology)",
    designation: "Consultant Urologist",
    image: "/images/Clinical Research Course/faculty/Dr. Siva Prasad Gourabathini.png"
  },
  {
    name: "Dr. Girish Rathod",
    qualification: "MBBS, MS (Orthopaedics)",
    designation: "HOD – Orthopaedics",
    image: "/images/Clinical Research Course/faculty/Dr. Girish Rathod.png"
  },
  {
    name: "Dr. Nirmal Raut",
    qualification: "MD, ECMO, PDCR",
    designation: "Consultant Medical Oncology",
    image: "/images/Clinical Research Course/faculty/Dr. Nirmal Raut.png"
  },
  {
    name: "Dr. Ajay Godse",
    qualification: "MD, FAASM",
    designation: "Consultant Pulmonologist & Sleep Specialist",
    image: "/images/Clinical Research Course/faculty/Dr. Ajay Godse.png"
  },
  {
    name: "Dr. Ameya Joshi",
    qualification: "MBBS, MD, DNB (Endocrinology)",
    designation: "Consultant Endocrinologist",
    image: "/images/Clinical Research Course/faculty/Dr. Ameya Joshi.png"
  },
  {
    name: "Dr. Shubham Jain",
    qualification: "DM, MD, MBBS",
    designation: "Consultant Gastroenterologist",
    image: "/images/Clinical Research Course/faculty/Dr. Shubham Jain.png"
  },
  {
    name: "Dr. Jyotsna Zope",
    qualification: "MD, DNB (Nephrology)",
    designation: "Consultant Nephrologist",
    image: "/images/Clinical Research Course/faculty/Dr. Jyotsna D Zope.png"
  },
  {
    name: "Dr. Kirti Mutreja",
    qualification: "BHMS, MD (Hom)",
    designation: "Integrated Medicine Consultant",
    image: "/images/Clinical Research Course/faculty/Dr. Kirti Mutreja.png"
  },
  {
    name: "Dr. Sandeep Patil",
    qualification: "MD, DNB, DM (Cardiology)",
    designation: "HOD – Cardiology",
    image: "/images/Clinical Research Course/faculty/Dr. Sandeep Patil.png"
  },
  {
    name: "Dr. Sandeep Garg",
    qualification: "MD, DNB",
    designation: "Paediatric Cardiologist",
    image: "/images/Clinical Research Course/faculty/Dr. Sandeep Garg.png"
  },
  {
    name: "Dr. Yogesh Patidar",
    qualification: "MD, DM (Neurology)",
    designation: "Consultant Neurologist",
    image: "/images/Clinical Research Course/faculty/Dr. Yogesh Patidar.png"
  },
  {
    name: "Dr. Kamalapriya Thiyagarajan",
    qualification: "MD, DGO",
    designation: "Consultant – Obstetrics & Gynaecology",
    image: "/images/Clinical Research Course/faculty/Dr. Kamalpriya Thiyagarajan.png"
  },
  {
    name: "Dr. Saurabh Sadekar",
    qualification: "MD, DNB (Neurology)",
    designation: "Consultant Neurologist",
    image: "/images/Clinical Research Course/faculty/Dr. Saurabh Sadekar.png"
  },
  {
    name: "Dr. Dhaval Dalal",
    qualification: "MBBS, MD",
    designation: "HOD – Integrated Medicine",
    image: "/images/Clinical Research Course/faculty/Dr. Dhaval Dalal.png"
  },
  {
    name: "Dr. Tejasvee Kadam",
    qualification: "BDS",
    designation: "Lead – Clinical Research",
    image: "/images/Clinical Research Course/faculty/Dr._Tejasvee_Kadam-removebg-preview.png",
    contact: "+91 98190 82833 | drtejasvee.k@bhaktivedantahospital.com"
  }
];

const FacultyContent = () => (
  <div className="w-full py-20 text-[#565656]">
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-28 gap-x-32 w-full max-w-[1536px] mx-auto px-6 md:px-16">
      {facultyData.map((faculty, index) => (
        <div key={index} className="relative group w-full max-w-[680px] h-[340px] mx-auto xl:mx-0">
          {/* Card Background Shadow Box */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#FDEBD0]/30 rounded-[32px] -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />

          {/* Main Card */}
          <div className="flex flex-col sm:flex-row h-full bg-[#FEF8F0] rounded-[32px] border border-[#FDEBD0] relative items-center justify-end overflow-visible">

            {/* Faculty Image - Popping Out */}
            <div className="w-full sm:w-[260px] h-[400px] sm:absolute sm:-left-20 sm:bottom-0 sm:top-[-60px] flex-shrink-0 flex items-end justify-center pointer-events-none">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="h-full w-auto object-contain drop-shadow-[20px_0_25px_rgba(0,0,0,0.15)] group-hover:scale-[1.05] transition-transform duration-700 origin-bottom"
              />
            </div>

            {/* Details Section - Perfectly Centered & Offset */}
            <div className="flex-1 p-8 sm:pl-[280px] text-left flex flex-col justify-center">
              <div className="mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#f58634] mb-1 font-serif leading-tight">
                  {faculty.name.replace(/^(Dr\.\s*\S+)/, (match) => match.replace(/\s/g, '\u00A0'))}
                </h3>
                <p className="text-[#1A5276] font-bold text-[13px] uppercase tracking-wider mb-2 leading-snug">
                  {faculty.designation}
                </p>
              </div>

              <div className="space-y-4 border-t border-orange-200/50 pt-5 mt-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[#f58634] font-bold text-[10px] uppercase tracking-widest">Academic Qualification</span>
                  <span className="text-gray-700 text-[13px] font-medium leading-relaxed line-clamp-2">{faculty.qualification}</span>
                </div>

                {faculty.contact && (
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[#f58634] font-bold text-[10px] uppercase tracking-widest">Connect Directly</span>
                    <p className="text-gray-600 text-[12px] break-words leading-relaxed font-medium line-clamp-1">
                      {faculty.contact}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const customTabs = tabs.map(t => {
  if (t.id === "overview") return { ...t, content: <OverviewContent /> };
  if (t.id === "gallery") return { ...t, label: "Recent Placements", content: <RecentPlacementsContent /> };
  if (t.id === "courses") return { ...t, label: "Student Testimonials", content: <CoursesContent /> };
  if (t.id === "what-we-offer") return { ...t, label: "Admission Process", content: <AdmissionProcessContent /> };
  if (t.id === "education-career") return { ...t, label: "Career Opportunities", content: <CareerOpportunitiesContent /> };
  if (t.id === "joining-instructions") return { ...t, label: "Convocation & Industry Videos", content: <IndustryVideosContent /> };
  if (t.id === "faqs") return { ...t, label: "Faculty", content: <FacultyContent /> };
  return t;
});

export default function PGCRPage() {
  return (
    <main className="min-h-screen bg-white">


      <header className="text-center pt-8 pb-2">
        <h1 className="text-2xl md:text-4xl font-bold text-[#2664A8] mb-3">
          Clinical Research Course
        </h1>
        <a
          href="/documents/PGCR Complete Brochure.pdf"
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

      <HeroCarousel images={alumniImages} />

      <TabNavigation tabs={customTabs} hideTopBorder={true} />
    </main>
  );
}
