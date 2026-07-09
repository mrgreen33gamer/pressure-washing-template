import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/house-washing/temple-tx`;

export const metadata: Metadata = {
  title: "House Washing Temple TX | AquaBlast Pressure Washing",
  description: "Professional house washing in Temple, TX. Low-pressure soft wash that lifts mold, mildew, pollen, and dirt without damaging siding, paint, or landscaping. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "house washing Temple TX",
    "pressure washing Temple",
    "soft wash Temple Texas",
    "AquaBlast Temple",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "House Washing Temple TX | AquaBlast",
    description: "House Washing for Temple homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "House Washing Temple TX | AquaBlast",
    description: "Professional house washing in Temple. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
