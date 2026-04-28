import React from 'react';

export default function ContactUsSection() {
  return (
    <section className="mt-16 mb-12 max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 py-12 border-t border-gray-100">
        {/* Left Heading */}
        <div className="flex-shrink-0">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D3E8B] leading-[0.9] tracking-[0.03em] uppercase" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
            CONTACT<br />US
          </h2>
        </div>

        {/* Contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 flex-grow">
          {/* Dr. Vijaykumar Gawali */}
          <div className="space-y-4">
            <div>
              <h3 className="text-[17px] font-bold text-gray-900" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>Dr. Vijaykumar Gawali (MBBS, D-Stat, PCPV, PGCR)</h3>
              <p className="text-[13px] text-gray-600 mt-2 leading-relaxed font-medium">
                Head – Clinical Research & Academics | Medical Superintendent – Centres of Excellence at Bhaktivedanta Hospital & Research Institute, Mumbai<br />
                NABH Assessor – EC & Clinical Trials Accreditation
              </p>
            </div>
            
            <div className="space-y-2">
              <a href="tel:+919320199122" className="flex items-center gap-3 group">
                <div className="w-6 h-6 rounded-full bg-[#1D3E8B] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[#142d66] transition-colors">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800 group-hover:text-[#1D3E8B] transition-colors">+91 93201 99122</span>
              </a>
              
              <a href="mailto:drvijaykumar.g@bhaktivedantahospital.com" className="flex items-center gap-3 group">
                <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[#d6711c] transition-colors">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800 group-hover:text-[#E67E22] transition-colors">drvijaykumar.g@bhaktivedantahospital.com</span>
              </a>
            </div>
          </div>

          {/* Dr. Tejasvee Kadam */}
          <div className="space-y-4">
            <div>
              <h3 className="text-[17px] font-bold text-gray-900" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>Dr. Tejasvee Kadam (BDS)</h3>
              <p className="text-[13px] text-gray-600 mt-2 leading-relaxed font-medium">
                Lead – Clinical Research at Bhaktivedanta Hospital & Reserach Institute
              </p>
            </div>
            
            <div className="space-y-2">
              <a href="tel:+919819082833" className="flex items-center gap-3 pt-4 group">
                <div className="w-6 h-6 rounded-full bg-[#1D3E8B] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[#142d66] transition-colors">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800 group-hover:text-[#1D3E8B] transition-colors">+91 98190 82833</span>
              </a>
              
              <a href="mailto:drtejasvee.k@bhaktivedantahospital.com" className="flex items-center gap-3 group">
                <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[#d6711c] transition-colors">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800 group-hover:text-[#E67E22] transition-colors">drtejasvee.k@bhaktivedantahospital.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
