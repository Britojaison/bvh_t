"use client";

import { introText, youtubeLink } from "@/data/accreditation";

export default function GovernmentAccreditationPage() {
  return (
    <main className="min-h-screen bg-white">

      <header className="text-center pt-8 pb-4">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-blue mb-4">
          Government Accreditation
        </h1>
        <p className="max-w-4xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed px-4">
          {introText}
        </p>
        <div className="mt-4">
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
        </div>
      </header>

      <div className="mt-6 max-w-5xl mx-auto px-4">
        <img
          src="/images/bvh/Picture16.png"
          alt="Government Accreditations"
          className="w-full h-auto object-contain rounded-xl"
        />

        {/* YouTube Video Preview */}
        <div className="mt-12 mb-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#f58634] transition-all">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/GGelO2dkDDQ"
                title="Government Accreditations Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="pb-12"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
