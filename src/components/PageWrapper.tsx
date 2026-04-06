export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
      {children}
    </div>
  );
}
