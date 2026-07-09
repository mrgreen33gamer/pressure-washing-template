import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/commercial-pressure-washing/killeen-tx`;

export const metadata: Metadata = {
  title: "Commercial Pressure Washing Killeen TX | AquaBlast Pressure Washing",
  description: "Professional commercial pressure washing in Killeen, TX. Storefronts, parking lots, HOAs, restaurants, and multi-unit properties cleaned on flexible schedules that will not interrupt your business. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "commercial pressure washing Killeen TX",
    "pressure washing Killeen",
    "soft wash Killeen Texas",
    "AquaBlast Killeen",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Pressure Washing Killeen TX | AquaBlast",
    description: "Commercial Pressure Washing for Killeen homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Pressure Washing Killeen TX | AquaBlast",
    description: "Professional commercial pressure washing in Killeen. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
