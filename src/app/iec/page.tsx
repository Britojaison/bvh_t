import HeroImage from "@/components/HeroImage";

export default function InstitutionalEthicsCommitteePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Shared Header */}
      <header className="text-center pt-8 pb-2">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2664A8] mb-4" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>
          Institutional Ethics Committee
        </h1>
        <p className="text-[#565656] text-lg max-w-2xl mx-auto mb-6 px-4">
          Committed to upholding the highest ethical standards in clinical research and biomedical studies.
        </p>
        <a
          href="/documents/PGCR Complete Brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#f58634] hover:text-[#f58634]/80 transition-colors text-sm md:text-base font-semibold"
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

      {/* Shared Banner */}
      <div className="w-full relative h-[300px] md:h-[450px] overflow-hidden mt-8 mb-16 rounded-2xl shadow-xl max-w-6xl mx-auto">
        <img 
          src="/images/banner.jpeg" 
          alt="Institutional Ethics Committee" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
          <p className="text-white text-xl md:text-2xl font-medium max-w-3xl border-l-4 border-[#f58634] pl-6">
            Ensuring patient safety and scientific integrity across all research endeavors at Bhaktivedanta Hospital.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-24 mb-24">
        
        {/* Section 1: Clinical Trials */}
        <section id="clinical-trials" className="scroll-mt-24">
          <div className="flex flex-col gap-8 border-b border-gray-100 pb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>
                Institutional Ethics Committee for Clinical Trials
              </h2>
              <div className="flex flex-wrap gap-3 shrink-0">
                <DownloadButton href="/documents/Approved IEC Member List.pdf" label="Members List" />
                <DownloadButton href="/documents/Bhaktivedanta HEC SOP.pdf" label="EC SOP" />
                <DownloadButton href="/documents/EC_Registration Certificate.pdf" label="EC Registration Certificate" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-lg font-bold text-[#2664A8] mb-3 uppercase tracking-wider text-sm">Overview</h3>
                <p className="text-[#565656] leading-relaxed text-[15px]">
                  The Institutional Ethics Committee (IEC) for Clinical Trials at Bhaktivedanta Hospital & Research Institute is a duly constituted independent body responsible for the ethical review and oversight of all clinical trial protocols conducted at the institution. The committee ensures that the rights, safety, and well-being of trial participants are protected in accordance with ICH-GCP guidelines, the Declaration of Helsinki, CDSCO regulations, and the Indian Council of Medical Research (ICMR) National Ethical Guidelines.
                </p>
              </div>
              <div className="bg-orange-50/30 p-8 rounded-2xl border border-orange-100">
                <h3 className="text-lg font-bold text-[#f58634] mb-3 uppercase tracking-wider text-sm">Committee Composition</h3>
                <p className="text-[#565656] leading-relaxed text-[15px]">
                  The IEC for Clinical Trials comprises a diverse panel of qualified members including medical professionals, scientists, legal experts, social workers, and lay persons from the community. The committee is chaired by an independent senior clinician not affiliated with the institution. Members include pharmacologists, bioethicists, a legal expert well-versed in medical law, community representatives ensuring patient advocacy, and a member secretary who coordinates all committee activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Biomedical Studies */}
        <section id="biomedical-studies" className="scroll-mt-24">
          <div className="flex flex-col gap-8 border-b border-gray-100 pb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>
                Institutional Ethics Committee for Biomedical Studies
              </h2>
              <div className="flex flex-wrap gap-3 shrink-0">
                <DownloadButton href="/documents/Approved IEC Member List.pdf" label="Members List" />
                <DownloadButton href="/documents/Bhaktivedanta HEC SOP.pdf" label="EC SOP" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-lg font-bold text-[#2664A8] mb-3 uppercase tracking-wider text-sm">Overview</h3>
                <p className="text-[#565656] leading-relaxed text-[15px]">
                  The Institutional Ethics Committee (IEC) for Biomedical Studies at Bhaktivedanta Hospital & Research Institute oversees the ethical conduct of all biomedical and health-related research that does not fall under the purview of clinical trials. This includes observational studies, epidemiological research, retrospective analyses, biobank-related studies, diagnostic validation studies, and investigator-initiated research projects. The committee ensures that all biomedical research adheres to the highest ethical standards as outlined by ICMR National Ethical Guidelines.
                </p>
              </div>
              <div className="bg-orange-50/30 p-8 rounded-2xl border border-orange-100">
                <h3 className="text-lg font-bold text-[#f58634] mb-3 uppercase tracking-wider text-sm">Committee Composition</h3>
                <p className="text-[#565656] leading-relaxed text-[15px]">
                  The IEC for Biomedical Studies is composed of a multidisciplinary panel including senior clinicians, basic science researchers, biostatisticians, a legal expert, social scientists, and community representatives. The committee is led by an independent chairperson with extensive experience in biomedical research ethics. Members bring expertise in areas such as molecular biology, public health, epidemiology, medical law, and patient advocacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Thesis Committee */}
        <section id="thesis-committee" className="scroll-mt-24">
          <div className="flex flex-col gap-8 pb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2664A8]" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>
                DNB Scientific Committee for Thesis
              </h2>
              <div className="flex flex-wrap gap-3 shrink-0">
                <DownloadButton href="/documents/Approved IEC Member List.pdf" label="Members List" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-lg font-bold text-[#2664A8] mb-3 uppercase tracking-wider text-sm">Overview</h3>
                <p className="text-[#565656] leading-relaxed text-[15px]">
                  The DNB Scientific Committee for Thesis at Bhaktivedanta Hospital & Research Institute is a specialized academic body responsible for guiding, reviewing, and approving thesis proposals submitted by DNB (Diplomate of National Board) candidates across various specialties. The committee ensures that all thesis work meets the scientific rigor and academic standards set by the National Board of Examinations (NBE).
                </p>
              </div>
              <div className="bg-orange-50/30 p-8 rounded-2xl border border-orange-100">
                <h3 className="text-lg font-bold text-[#f58634] mb-3 uppercase tracking-wider text-sm">Committee Composition</h3>
                <p className="text-[#565656] leading-relaxed text-[15px]">
                  The DNB Scientific Committee comprises senior faculty members and subject matter experts across multiple medical specialties including Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Orthopedics, Radiology, and other DNB-accredited departments. Members include department heads serving as thesis guides, a biostatistician who assists candidates with study design and data analysis, and a research methodology expert.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

function DownloadButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-6 py-3 bg-[#f58634] text-white rounded-xl font-bold shadow-lg hover:bg-[#e6772e] hover:shadow-xl transition-all duration-300 active:scale-95 text-base"
      style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}
    >
      {label}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    </a>
  );
}
