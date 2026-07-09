import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/industries/property-management-hoas`;

export const metadata: Metadata = {
  title: "Property Management & HOAs Pressure Washing | AquaBlast Central Texas",
  description: "Pressure washing for property managers and HOAs in Waco, Temple, and Killeen. Multi-unit exteriors, amenities, parking lots. COIs available. Recurring programs.",
  keywords: ["property management & hoas pressure washing", "commercial cleaning Waco TX", "AquaBlast Property Management"],
  alternates: { canonical: url },
  openGraph: {
    title: "Property Management & HOAs | AquaBlast Pressure Washing",
    description: "Pressure washing for property managers and HOAs in Waco, Temple, and Killeen. Multi-unit exteriors, amenities, parking lots. COIs available. Recurring programs.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
