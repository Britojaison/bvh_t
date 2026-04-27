import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import ContactUsSection from "@/components/ContactUsSection";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: "Clinical Research Course",
  description: "PGCR Course - Bhaktivedanta Hospital & Research Institute",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={libreBaskerville.variable}>
        <SiteHeader />
        <div className="max-w-7xl mx-auto px-2 md:px-4 w-full">
          {children}
          <ContactUsSection />
        </div>
        <Footer />
      </body>
    </html>
  );
}
