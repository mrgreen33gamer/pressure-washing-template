import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/commercial-pressure-washing/temple-tx`;

export const metadata: Metadata = {
  title: "Commercial Pressure Washing Temple TX | AquaBlast Pressure Washing",
  description: "Professional commercial pressure washing in Temple, TX. Storefronts, parking lots, HOAs, restaurants, and multi-unit properties cleaned on flexible schedules that will not interrupt your business. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "commercial pressure washing Temple TX",
    "pressure washing Temple",
    "soft wash Temple Texas",
    "AquaBlast Temple",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Pressure Washing Temple TX | AquaBlast",
    description: "Commercial Pressure Washing for Temple homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Pressure Washing Temple TX | AquaBlast",
    description: "Professional commercial pressure washing in Temple. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
