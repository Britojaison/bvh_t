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
            <img
              src={item.src}
              alt={item.caption || `Slide ${i + 1}`}
              className="w-full h-full object-contain"
            />
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
      <div className="absolute bottom-4 right-8 flex gap-2 z-10">
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
