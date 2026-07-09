import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/roof-cleaning/temple-tx`;

export const metadata: Metadata = {
  title: "Roof Cleaning Temple TX | AquaBlast Pressure Washing",
  description: "Professional roof cleaning in Temple, TX. Soft-wash roof cleaning that kills black algae streaks and moss at the root — safe for asphalt shingles, tile, and metal roofs. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "roof cleaning Temple TX",
    "pressure washing Temple",
    "soft wash Temple Texas",
    "AquaBlast Temple",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Roof Cleaning Temple TX | AquaBlast",
    description: "Roof Cleaning for Temple homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Cleaning Temple TX | AquaBlast",
    description: "Professional roof cleaning in Temple. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
