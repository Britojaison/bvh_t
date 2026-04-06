export default function IECClinicalTrialsPage() {
  return (
    <main className="min-h-screen bg-white">

      <header className="text-center pt-8 pb-2">
        <h1 className="text-2xl md:text-4xl font-bold text-[#2664a8] mb-3">
          Institutional Ethics Committee<br />for Clinical Trials
        </h1>
        <a
          href="/Brochure/PGCR Complete Brochure.pdf"
          download
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

      <div className="w-full relative h-[400px] overflow-hidden mt-6">
        <img 
          src="/images/banner.jpeg" 
          alt="Institutional Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Action Links Styled precisely as Navigation Tabs */}
      <div className="flex flex-wrap justify-center md:justify-start gap-12 mt-8 mb-12 px-4 shadow-none">
        <a
          href="/documents/Approved IEC Member List.pdf"
          download="Approved IEC Member List.pdf"
          className="pb-2 text-xl md:text-2xl font-bold border-b-3 border-transparent transition-all whitespace-nowrap cursor-pointer text-[#f58634]/60 hover:text-[#f58634] hover:border-[#f58634]"
          style={{ 
            fontFamily: 'var(--font-libre-baskerville), Georgia, serif',
          }}
        >
          Members List
        </a>
        <a
          href="/documents/Bhaktivedanta HEC SOP.pdf"
          download="Bhaktivedanta HEC SOP.pdf"
          className="pb-2 text-xl md:text-2xl font-bold border-b-3 border-transparent transition-all whitespace-nowrap cursor-pointer text-[#f58634]/60 hover:text-[#f58634] hover:border-[#f58634]"
          style={{ 
            fontFamily: 'var(--font-libre-baskerville), Georgia, serif',
          }}
        >
          EC SOP
        </a>
        <a
          href="/documents/EC_Registration Certificate.pdf"
          download="EC_Registration Certificate.pdf"
          className="pb-2 text-xl md:text-2xl font-bold border-b-3 border-transparent transition-all whitespace-nowrap cursor-pointer text-[#f58634]/60 hover:text-[#f58634] hover:border-[#f58634]"
          style={{ 
            fontFamily: 'var(--font-libre-baskerville), Georgia, serif',
          }}
        >
          EC Registration Certificate
        </a>
      </div>
    </main>
  );
}
