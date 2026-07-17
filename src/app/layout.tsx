import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghassan Salah | Motion Graphics Designer",
  description: "Portfolio of Ghassan Salah, a Motion Graphics Designer creating visually engaging animations that help brands tell memorable stories.",
  keywords: ["Motion Graphics", "Designer", "Ghassan Salah", "Explainer Videos", "Animation", "Portfolio"],
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} style={{ scrollBehavior: 'smooth' }}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-black">
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
