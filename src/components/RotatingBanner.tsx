export default function RotatingBanner() {
  return (
    <div className="border-y border-gray-200 py-2 sticky top-[80px] z-30 flex justify-center items-center bg-white w-full">
      <div 
        className="text-[#2664A8] font-bold text-sm sm:text-base md:text-lg tracking-wide"
        style={{ fontFamily: 'var(--font-libre-baskerville), Georgia, serif' }}
      >
        Admissions open every February
      </div>
    </div>
  );
}
