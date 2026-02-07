import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABSOLUTE FITNESS | The Complete Health & Fitness Centre",
  description: "Transform your body and mind at Absolute Fitness. We offer Strength Training, Cardio, Zumba, and CrossFit programs with expert trainers and state-of-the-art facilities.",
  keywords: ["gym", "fitness", "strength training", "cardio", "zumba", "crossfit", "health", "workout"],
  openGraph: {
    title: "ABSOLUTE FITNESS | The Complete Health & Fitness Centre",
    description: "Transform your body and mind at Absolute Fitness. Expert trainers, premium facilities, and personalized programs.",
    type: "website",
    locale: "en_IN",
    siteName: "Absolute Fitness",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {/* Noise texture overlay for atmosphere */}
        <div className="noise-overlay" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
