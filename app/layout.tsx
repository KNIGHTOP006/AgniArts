import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agni Arts — The Rhythm of Resistance | Folk Arts & Parai",
  description:
    "Agni Arts is a collective committed to reviving and reimagining diminishing folk arts through workshops, performances and cultural experiences across Bengaluru, Chennai, Hosur and Tamil Nadu.",
  keywords: ["Agni Arts", "Parai", "Tamil folk arts", "folk art workshops Bangalore", "Parai workshops Bangalore"],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
