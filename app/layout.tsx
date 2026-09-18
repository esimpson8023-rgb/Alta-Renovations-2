import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Professional Home Renovation Services | Alta Renovations",
    template: "%s | Alta Renovations",
  },
  description:
    "Alta Renovations delivers high-quality residential renovations — kitchens, bathrooms, basements, and whole-home remodels designed around your home and lifestyle. Request a free quote today.",
  keywords: [
    "home renovations",
    "kitchen renovation",
    "bathroom renovation",
    "basement renovation",
    "whole-home renovation",
    "residential remodeling",
    "renovation contractor",
  ],
  openGraph: {
    title: "Professional Home Renovation Services | Alta Renovations",
    description:
      "High-quality residential renovations designed to make your home more functional, comfortable, and beautiful.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Home Renovation Services | Alta Renovations",
    description:
      "High-quality residential renovations designed to make your home more functional, comfortable, and beautiful.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
