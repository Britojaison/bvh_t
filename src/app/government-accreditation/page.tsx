"use client";

import { useState } from "react";
import ShareButton from "@/components/ShareButton";
import { accreditations, introText, youtubeLink } from "@/data/accreditation";

export default function GovernmentAccreditationPage() {
  const [activeId, setActiveId] = useState(accreditations[0].id);
  const active = accreditations.find((a) => a.id === activeId)!;

  return (
    <main className="min-h-screen bg-white">
      <ShareButton />

      <header className="text-center pt-8 pb-4">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-blue mb-4">
          Government Accreditation
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {introText}
        </p>
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

        {/* YouTube link */}
        <div className="text-center mt-8 pb-12">
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-orange hover:text-accent-orange-light transition-colors font-semibold"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch Government Accreditations Video
          </a>
        </div>
      </div>
    </main>
  );
}
