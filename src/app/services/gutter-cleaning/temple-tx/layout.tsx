import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/gutter-cleaning/temple-tx`;

export const metadata: Metadata = {
  title: "Gutter Cleaning Temple TX | AquaBlast Pressure Washing",
  description: "Professional gutter cleaning in Temple, TX. Full gutter and downspout clearing so water flows free — preventing overflow damage, foundation issues, and mosquito breeding grounds. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "gutter cleaning Temple TX",
    "pressure washing Temple",
    "soft wash Temple Texas",
    "AquaBlast Temple",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Gutter Cleaning Temple TX | AquaBlast",
    description: "Gutter Cleaning for Temple homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutter Cleaning Temple TX | AquaBlast",
    description: "Professional gutter cleaning in Temple. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
