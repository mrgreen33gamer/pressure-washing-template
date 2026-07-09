import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/commercial-pressure-washing/waco-tx`;

export const metadata: Metadata = {
  title: "Commercial Pressure Washing Waco TX | AquaBlast Pressure Washing",
  description: "Professional commercial pressure washing in Waco, TX. Storefronts, parking lots, HOAs, restaurants, and multi-unit properties cleaned on flexible schedules that will not interrupt your business. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "commercial pressure washing Waco TX",
    "pressure washing Waco",
    "soft wash Waco Texas",
    "AquaBlast Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Pressure Washing Waco TX | AquaBlast",
    description: "Commercial Pressure Washing for Waco homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Pressure Washing Waco TX | AquaBlast",
    description: "Professional commercial pressure washing in Waco. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
