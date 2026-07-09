import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/industries/retail-commercial-real-estate`;

export const metadata: Metadata = {
  title: "Retail & Commercial Real Estate Pressure Washing | AquaBlast Central Texas",
  description: "Commercial real estate and retail pressure washing in Central Texas. Storefronts, parking lots, shopping centers. Portfolio programs for property owners.",
  keywords: ["retail & commercial real estate pressure washing", "commercial cleaning Waco TX", "AquaBlast Retail & CRE"],
  alternates: { canonical: url },
  openGraph: {
    title: "Retail & Commercial Real Estate | AquaBlast Pressure Washing",
    description: "Commercial real estate and retail pressure washing in Central Texas. Storefronts, parking lots, shopping centers. Portfolio programs for property owners.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
