"use client";

import { useState, useEffect, useCallback } from "react";

interface HeroSlide {
  src: string;
  caption?: string;
}

interface HeroCarouselProps {
  images: HeroSlide[];
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative mx-auto overflow-hidden bg-gray-100 w-full rounded-2xl shadow-md">
      <div className="relative w-full aspect-[1748/1240]">
        {images.map((item, i) => (
          <div
            key={item.src}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item.src}
              alt={item.caption || `Slide ${i + 1}`}
              className="w-full h-full object-contain"
            />
            {item.caption && (
              <div className="absolute bottom-10 left-0 right-0 bg-black/50 text-white py-2 px-4 text-center backdrop-blur-sm">
                <span className="text-lg font-bold">Convocation of Batch - {item.caption}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center text-primary-blue transition-colors cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center text-primary-blue transition-colors cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
              i === current ? "bg-primary-blue" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
