"use client";

import { useState } from "react";

interface LazyYouTubeProps {
  videoId: string;
  title: string;
  thumbnailUrl?: string;
  className?: string;
}

export default function LazyYouTube({
  videoId,
  title,
  thumbnailUrl,
  className = "",
}: LazyYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Fallback to high-res YouTube thumbnail if no custom thumbnail provided
  const thumbnail =
    thumbnailUrl || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-lg shadow-md border-2 border-transparent hover:border-[#f58634] transition-all bg-black group ${className}`}
    >
      {isPlaying ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="relative w-full h-full block text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f58634]"
          aria-label={`Play video: ${title}`}
        >
          {/* Custom / Default Thumbnail */}
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Dark overlay on hover for better contrast */}
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#f58634] text-white flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 translate-x-0.5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
