"use client";

import { useState, useEffect, useRef } from "react";
import type { TabContent } from "@/data/pgcr";

interface TabNavigationProps {
  tabs: TabContent[];
  hideTopBorder?: boolean;
}

export default function TabNavigation({ tabs, hideTopBorder }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [tabs]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };


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
      <div className={`${hideTopBorder ? '' : 'border-t-2 border-primary-blue'} bg-white relative group`}>
        <div className="flex items-center justify-center px-8">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 z-10 p-2 bg-white/80 backdrop-blur-sm shadow-md rounded-full text-[#f58634] hover:bg-white transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto no-scrollbar scroll-smooth" 
            style={{ 
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}
          >
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

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 z-10 p-2 bg-white/80 backdrop-blur-sm shadow-md rounded-full text-[#f58634] hover:bg-white transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
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
