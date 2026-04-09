"use client";

const lgcFont = { fontFamily: "'Louis George Cafe', sans-serif" };

export default function SiteHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Left: BVH Logo */}
        <div className="flex-shrink-0">
          <a href="https://www.bhaktivedantahospital.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/logo/bvh_logo.png"
              alt="Bhaktivedanta Hospital & Research Institute"
              className="h-14 md:h-16 w-auto object-contain cursor-pointer"
            />
          </a>
        </div>

        {/* Center: Emergency info with NABH logo */}
        <div className="hidden md:flex items-center gap-4">
          <div className="bg-[#dceef8] px-8 py-3 text-center" style={lgcFont}>
            <p className="text-sm text-primary-blue font-medium leading-tight">
              For Emergency &amp; Appointments
            </p>
            <p className="text-lg text-primary-blue tracking-widest leading-tight">
              079 6900 2222
            </p>
          </div>
          <img
            src="/images/accreditation/accreditation-img-1-1.png"
            alt="NABH Accredited"
            className="h-14 w-14 object-contain"
          />
        </div>

        {/* Right: Search + Contact */}
        <div className="flex items-center gap-5 flex-shrink-0">
          <button aria-label="Search" className="text-gray-500 hover:text-primary-blue transition-colors cursor-pointer">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <a
            href="#"
            className="hidden sm:inline text-base text-gray-600 hover:text-primary-blue transition-colors whitespace-nowrap"
            style={lgcFont}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
