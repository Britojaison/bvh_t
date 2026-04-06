
import HeroImage from "@/components/HeroImage";
import TabNavigation from "@/components/TabNavigation";
import { iecBiomedicalTabs } from "@/data/iec-biomedical";

export default function IECBiomedicalStudiesPage() {
  return (
    <main className="min-h-screen bg-white">


      <header className="text-center pt-8 pb-2">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-blue mb-3">
          Institutional Ethics Committee<br />for Biomedical Studies
        </h1>
        <a
          href="#"
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
        src="/images/iec-biomedical-hero.jpg"
        alt="Institutional Ethics Committee for Biomedical Studies"
      />

      <TabNavigation tabs={iecBiomedicalTabs} />
    </main>
  );
}
