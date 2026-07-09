// src/app/industries/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url      = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Commercial Pressure Washing | AquaBlast",
  description:
    "AquaBlast provides commercial exterior cleaning for property managers, HOAs, restaurants, hospitality, and retail real estate across Waco, Temple, Killeen, and Central Texas.",
  keywords: [
    "commercial pressure washing Waco",
    "HOA pressure washing Central Texas",
    "restaurant patio cleaning",
    "retail storefront washing",
    "property management exterior cleaning",
    "AquaBlast industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | AquaBlast Pressure Washing",
    description:
      "Recurring exterior cleaning programs for HOAs, restaurants, and commercial real estate across Central Texas.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | AquaBlast",
    description: "Commercial exterior cleaning for property managers, restaurants, and retail.",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
