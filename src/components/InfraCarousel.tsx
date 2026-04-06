"use client";

import { useState, useEffect, useCallback } from "react";

interface Slide {
  src: string;
  label: string;
}

interface InfraCarouselProps {
  slides: Slide[];
}

export default function InfraCarousel({ slides }: InfraCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100 aspect-[16/9] max-w-4xl mx-auto">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.label}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Label overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
          <p className="text-white text-base md:text-lg font-semibold text-center drop-shadow">
            {slides[current].label}
          </p>
        </div>

        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center text-[#2664A8] transition-colors cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center text-[#2664A8] transition-colors cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
              i === current ? "bg-[#2664A8]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
