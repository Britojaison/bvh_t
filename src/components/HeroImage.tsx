"use client";

interface HeroImageProps {
  src: string;
  alt: string;
  title?: string;
}

export default function HeroImage({ src, alt, title }: HeroImageProps) {
  return (
    <div className="relative bg-gradient-to-b from-[#d6e8f5] to-[#e8f0f8] rounded-2xl mx-4 my-6 overflow-hidden">
      {title && (
        <div className="text-center pt-6 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-blue tracking-wide border-b-3 border-accent-orange inline-block pb-2">
            {title}
          </h2>
        </div>
      )}
      <div className="w-full flex items-center justify-center relative overflow-hidden">
        <img src={src} alt={alt} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}
