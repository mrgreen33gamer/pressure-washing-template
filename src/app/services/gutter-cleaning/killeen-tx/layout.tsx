import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/gutter-cleaning/killeen-tx`;

export const metadata: Metadata = {
  title: "Gutter Cleaning Killeen TX | AquaBlast Pressure Washing",
  description: "Professional gutter cleaning in Killeen, TX. Full gutter and downspout clearing so water flows free — preventing overflow damage, foundation issues, and mosquito breeding grounds. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "gutter cleaning Killeen TX",
    "pressure washing Killeen",
    "soft wash Killeen Texas",
    "AquaBlast Killeen",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Gutter Cleaning Killeen TX | AquaBlast",
    description: "Gutter Cleaning for Killeen homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutter Cleaning Killeen TX | AquaBlast",
    description: "Professional gutter cleaning in Killeen. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
