import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { IntroOverlay } from "@/components/IntroOverlay";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Riviera Fish & Grill | Torreon",
  description:
    "Experiencia gastronomica de mar, fuego y sofisticacion en Torreon, Coahuila.",
  openGraph: {
    title: "Riviera Fish & Grill | Torreon",
    description:
      "Prebeta comercial para Riviera Fish & Grill: seafood, grill, cocteleria y experiencias Enkai, Balam y Naja.",
    type: "website",
    images: ["/brand/riviera-logo.webp"]
  },
  metadataBase: new URL("https://riviera-prebeta.local"),
  twitter: {
    card: "summary_large_image",
    title: "Riviera Fish & Grill | Torreon",
    description: "Mar, fuego y sofisticacion."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <IntroOverlay />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
