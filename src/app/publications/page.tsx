"use client";

import { useState, useMemo } from "react";

import { publicationsData } from "@/data/publications";

const years = publicationsData.map((d) => d.year).sort((a, b) => b - a);

export default function PublicationsPage() {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [search, setSearch] = useState("");

  const yearData = useMemo(
    () => publicationsData.find((d) => d.year === selectedYear),
    [selectedYear]
  );

  const filtered = useMemo(() => {
    if (!yearData) return [];
    if (!search.trim()) return yearData.publications;
    const q = search.toLowerCase();
    return yearData.publications.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.journal.toLowerCase().includes(q)
    );
  }, [yearData, search]);

  return (
    <main className="min-h-screen bg-white">


      <header className="text-center pt-8 pb-6">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-blue mb-3">
          Publications
        </h1>
        <div className="mt-2">
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

      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label htmlFor="year-select" className="text-sm font-medium text-gray-700">
            Year:
          </label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(Number(e.target.value));
              setSearch("");
            }}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue"
          >
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="search" className="text-sm font-medium text-gray-700">
            Search:
          </label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter publications..."
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary-blue"
          />
        </div>
      </div>

      <div className="pb-12">
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-sm font-semibold text-gray-700 w-16">
                  Sr. No.
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                  Paper Title with Citation
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700 w-64">
                  Journal Name
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((pub) => (
                <tr
                  key={pub.srNo}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 text-sm text-gray-600 align-top">
                    {pub.srNo}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800 leading-relaxed">
                    {pub.title}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 align-top">
                    {pub.journal}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-4 py-8 text-center text-gray-500 text-sm">
                    No publications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-3 text-right">
          Showing {filtered.length} of {yearData?.publications.length ?? 0} publications
        </p>
      </div>
    </main>
  );
}
