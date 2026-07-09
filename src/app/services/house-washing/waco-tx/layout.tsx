import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/house-washing/waco-tx`;

export const metadata: Metadata = {
  title: "House Washing Waco TX | AquaBlast Pressure Washing",
  description: "Professional house washing in Waco, TX. Low-pressure soft wash that lifts mold, mildew, pollen, and dirt without damaging siding, paint, or landscaping. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "house washing Waco TX",
    "pressure washing Waco",
    "soft wash Waco Texas",
    "AquaBlast Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "House Washing Waco TX | AquaBlast",
    description: "House Washing for Waco homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "House Washing Waco TX | AquaBlast",
    description: "Professional house washing in Waco. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
