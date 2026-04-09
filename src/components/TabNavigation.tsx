"use client";

import { useState, useEffect } from "react";
import type { TabContent } from "@/data/pgcr";

interface TabNavigationProps {
  tabs: TabContent[];
  hideTopBorder?: boolean;
}

export default function TabNavigation({ tabs, hideTopBorder }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const setTabFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const index = tabs.findIndex((t) => t.id === hash);
        if (index !== -1) setActiveTab(index);
      }
    };
    setTabFromHash();
    window.addEventListener("hashchange", setTabFromHash);
    return () => window.removeEventListener("hashchange", setTabFromHash);
  }, [tabs]);

  return (
    <div className="mt-6">
      {/* Tab bar */}
      <div className={`${hideTopBorder ? '' : 'border-t-2 border-primary-blue'} bg-white`}>
        <div className="flex items-center justify-center">
          <div className="flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                id={tab.id}
                onClick={() => {
                  setActiveTab(index);
                  // Sync hash when clicked manually
                  window.history.pushState(null, '', `#${tab.id}`);
                }}
                className={`flex-shrink-0 px-5 py-4 whitespace-nowrap transition-all cursor-pointer border-b-3 border-transparent scroll-mt-40 ${
                  index === activeTab
                    ? "border-[#f58634] text-2xl font-bold"
                    : "text-xl font-semibold hover:border-[#f58634]"
                }`}
                style={{
                  fontFamily: "var(--font-libre-baskerville), Georgia, serif",
                  color: index === activeTab ? "#f58634" : "rgba(245,134,52,0.6)",
                }}
                onMouseEnter={e => { if (index !== activeTab) (e.currentTarget as HTMLElement).style.color = "#f58634"; }}
                onMouseLeave={e => { if (index !== activeTab) (e.currentTarget as HTMLElement).style.color = "rgba(245,134,52,0.6)"; }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="bg-white py-6 md:py-8 min-h-[200px]">
        <div className="text-text-muted leading-relaxed text-base">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
}
