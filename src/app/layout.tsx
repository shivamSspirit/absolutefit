import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MusicPlayer from "@/components/ui/MusicPlayer";

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
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
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
        <MusicPlayer />
      </body>
    </html>
  );
}
