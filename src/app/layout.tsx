import type { Metadata } from "next";
import { Libre_Baskerville, Roboto } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
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
      <body className={`${libreBaskerville.variable} ${roboto.variable}`}>
        <SiteHeader />
        <div className="max-w-7xl mx-auto px-2 md:px-4 w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
