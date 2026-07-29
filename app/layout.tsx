import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const metadata: Metadata = {
  title: "Agni Arts — The Rhythm of Resistance | Folk Arts & Parai",
  description:
    "Agni Arts is a collective committed to reviving and reimagining diminishing folk arts through workshops, performances and cultural experiences across Bengaluru, Chennai, Hosur and Tamil Nadu.",
  keywords: ["Agni Arts", "Parai", "Tamil folk arts", "folk art workshops Bangalore", "Parai workshops Bangalore"],
  openGraph: { title: "Agni Arts — The Rhythm of Resistance", description: "Reviving folk arts. Reimagining traditions. Carrying the fire forward.", type: "website" },
  twitter: { card: "summary_large_image", title: "Agni Arts — The Rhythm of Resistance" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar />{children}<Footer /></body></html>;
}
