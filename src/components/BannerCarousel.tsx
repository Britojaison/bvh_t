"use client";

import { useState, useEffect, useCallback } from "react";

interface BannerSlide {
  src: string;
  caption?: string;
}

interface BannerCarouselProps {
  images: BannerSlide[];
}

export default function BannerCarousel({ images }: BannerCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative max-w-7xl mx-auto px-4 my-8 overflow-hidden">
      <div className="relative w-full aspect-[16/9] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {images.map((item, i) => (
          <div
            key={item.src}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={item.src}
                alt={item.caption || `Slide ${i + 1}`}
                className="w-full h-full object-contain"
              />
              {item.caption && (
                <div className="absolute bottom-6 md:bottom-12 left-4 right-4 flex justify-center z-20 pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-md px-3 py-1 md:px-8 md:py-3 rounded-full shadow-2xl border border-white/60 transform transition-all duration-700 animate-in fade-in slide-in-from-bottom-4">
                    <h3 className="text-[#2664A8] text-[10px] sm:text-xs md:text-xl font-bold tracking-tight text-center" style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}>
                      {item.caption}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 hover:bg-white/90 shadow-lg flex items-center justify-center text-primary-blue transition-all duration-300 cursor-pointer backdrop-blur-md border border-white/40 hover:scale-110 z-10"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 hover:bg-white/90 shadow-lg flex items-center justify-center text-primary-blue transition-all duration-300 cursor-pointer backdrop-blur-md border border-white/40 hover:scale-110 z-10"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              i === current ? "w-8 bg-[#f58634]" : "w-2 bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
