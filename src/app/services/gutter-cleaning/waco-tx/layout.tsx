import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/gutter-cleaning/waco-tx`;

export const metadata: Metadata = {
  title: "Gutter Cleaning Waco TX | AquaBlast Pressure Washing",
  description: "Professional gutter cleaning in Waco, TX. Full gutter and downspout clearing so water flows free — preventing overflow damage, foundation issues, and mosquito breeding grounds. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "gutter cleaning Waco TX",
    "pressure washing Waco",
    "soft wash Waco Texas",
    "AquaBlast Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Gutter Cleaning Waco TX | AquaBlast",
    description: "Gutter Cleaning for Waco homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutter Cleaning Waco TX | AquaBlast",
    description: "Professional gutter cleaning in Waco. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
