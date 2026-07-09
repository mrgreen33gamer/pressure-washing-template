import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/roof-cleaning/killeen-tx`;

export const metadata: Metadata = {
  title: "Roof Cleaning Killeen TX | AquaBlast Pressure Washing",
  description: "Professional roof cleaning in Killeen, TX. Soft-wash roof cleaning that kills black algae streaks and moss at the root — safe for asphalt shingles, tile, and metal roofs. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "roof cleaning Killeen TX",
    "pressure washing Killeen",
    "soft wash Killeen Texas",
    "AquaBlast Killeen",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Roof Cleaning Killeen TX | AquaBlast",
    description: "Roof Cleaning for Killeen homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Cleaning Killeen TX | AquaBlast",
    description: "Professional roof cleaning in Killeen. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
