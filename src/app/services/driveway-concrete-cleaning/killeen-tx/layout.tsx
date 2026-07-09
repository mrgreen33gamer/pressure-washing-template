import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/driveway-concrete-cleaning/killeen-tx`;

export const metadata: Metadata = {
  title: "Driveway & Concrete Cleaning Killeen TX | AquaBlast Pressure Washing",
  description: "Professional driveway & concrete cleaning in Killeen, TX. High-pressure cleaning for driveways, sidewalks, patios, and parking pads. Oil stains, tire marks, mildew, and years of buildup — gone. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "driveway & concrete cleaning Killeen TX",
    "pressure washing Killeen",
    "soft wash Killeen Texas",
    "AquaBlast Killeen",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Driveway & Concrete Cleaning Killeen TX | AquaBlast",
    description: "Driveway & Concrete Cleaning for Killeen homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Driveway & Concrete Cleaning Killeen TX | AquaBlast",
    description: "Professional driveway & concrete cleaning in Killeen. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
