import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/house-washing/killeen-tx`;

export const metadata: Metadata = {
  title: "House Washing Killeen TX | AquaBlast Pressure Washing",
  description: "Professional house washing in Killeen, TX. Low-pressure soft wash that lifts mold, mildew, pollen, and dirt without damaging siding, paint, or landscaping. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "house washing Killeen TX",
    "pressure washing Killeen",
    "soft wash Killeen Texas",
    "AquaBlast Killeen",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "House Washing Killeen TX | AquaBlast",
    description: "House Washing for Killeen homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "House Washing Killeen TX | AquaBlast",
    description: "Professional house washing in Killeen. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
