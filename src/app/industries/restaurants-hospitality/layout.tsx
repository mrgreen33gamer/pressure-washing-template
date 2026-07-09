import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/industries/restaurants-hospitality`;

export const metadata: Metadata = {
  title: "Restaurants & Hospitality Pressure Washing | AquaBlast Central Texas",
  description: "Restaurant and hospitality pressure washing in Waco and Central Texas. Patio cleaning, dumpster pads, drive-thrus, and storefronts. Night and weekend scheduling.",
  keywords: ["restaurants & hospitality pressure washing", "commercial cleaning Waco TX", "AquaBlast Restaurants"],
  alternates: { canonical: url },
  openGraph: {
    title: "Restaurants & Hospitality | AquaBlast Pressure Washing",
    description: "Restaurant and hospitality pressure washing in Waco and Central Texas. Patio cleaning, dumpster pads, drive-thrus, and storefronts. Night and weekend scheduling.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
