import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/driveway-concrete-cleaning/temple-tx`;

export const metadata: Metadata = {
  title: "Driveway & Concrete Cleaning Temple TX | AquaBlast Pressure Washing",
  description: "Professional driveway & concrete cleaning in Temple, TX. High-pressure cleaning for driveways, sidewalks, patios, and parking pads. Oil stains, tire marks, mildew, and years of buildup — gone. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "driveway & concrete cleaning Temple TX",
    "pressure washing Temple",
    "soft wash Temple Texas",
    "AquaBlast Temple",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Driveway & Concrete Cleaning Temple TX | AquaBlast",
    description: "Driveway & Concrete Cleaning for Temple homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Driveway & Concrete Cleaning Temple TX | AquaBlast",
    description: "Professional driveway & concrete cleaning in Temple. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
