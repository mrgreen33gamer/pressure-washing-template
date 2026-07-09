import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/roof-cleaning/waco-tx`;

export const metadata: Metadata = {
  title: "Roof Cleaning Waco TX | AquaBlast Pressure Washing",
  description: "Professional roof cleaning in Waco, TX. Soft-wash roof cleaning that kills black algae streaks and moss at the root — safe for asphalt shingles, tile, and metal roofs. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "roof cleaning Waco TX",
    "pressure washing Waco",
    "soft wash Waco Texas",
    "AquaBlast Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Roof Cleaning Waco TX | AquaBlast",
    description: "Roof Cleaning for Waco homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Cleaning Waco TX | AquaBlast",
    description: "Professional roof cleaning in Waco. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
