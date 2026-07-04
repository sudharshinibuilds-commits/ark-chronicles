import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import SplashScreenGate from "./components/SplashScreenGate";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARK CHRONICLES",
  description: "Architects of Rising Knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-ark-black">
        <SplashScreenGate>{children}</SplashScreenGate>
      </body>
    </html>
  );
}
