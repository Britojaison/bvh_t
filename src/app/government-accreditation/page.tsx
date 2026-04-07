"use client";

import { useState } from "react";
import { accreditations, introText, youtubeLink } from "@/data/accreditation";

export default function GovernmentAccreditationPage() {
  const [activeId, setActiveId] = useState(accreditations[0].id);
  const active = accreditations.find((a) => a.id === activeId)!;

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
        </div>
      </header>

      {/* Accreditation logos as tabs */}
      <div className="mt-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
          {accreditations.map((acc) => (
            <button
              key={acc.id}
              onClick={() => setActiveId(acc.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all cursor-pointer ${
                activeId === acc.id
                  ? "bg-blue-50 ring-2 ring-primary-blue shadow-md"
                  : "bg-gray-50 hover:bg-blue-50 hover:shadow"
              }`}
            >
              <img
                src={acc.logo}
                alt={`${acc.title} logo`}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              <span
                className={`text-sm md:text-base font-bold ${
                  activeId === acc.id ? "text-primary-blue" : "text-gray-700"
                }`}
              >
                {acc.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active accreditation detail */}
        <div className="bg-gradient-to-b from-[#d6e8f5] to-[#e8f0f8] rounded-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={active.logo}
              alt={`${active.title} logo`}
              className="w-28 h-28 md:w-36 md:h-36 object-contain flex-shrink-0"
            />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-primary-blue mb-3">
                {active.title === "NABH"
                  ? "NABH Accreditation for Ethics Committee (Clinical Trials)"
                  : active.title === "DCGI"
                  ? "DCGI-Recognized Ethics Committee for International Trials"
                  : active.title === "DHR"
                  ? "Department of Health Research (DHR) Registered Ethics Committee"
                  : "SIRO Recognition and Form 3CF Approval – Ministry of Science & Technology"}
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {active.description}
              </p>
            </div>
          </div>
        </div>

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
