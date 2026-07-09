import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/commercial-pressure-washing`;

export const metadata: Metadata = {
  title: "Commercial Pressure Washing Waco TX | Soft Wash & Pressure Washing | AquaBlast",
  description: "Commercial pressure washing in Waco, Temple, and Killeen. Storefronts, parking lots, HOAs, and restaurants. Flexible scheduling, licensed & insured.",
  keywords: [
    "commercial pressure washing Waco",
    "parking lot cleaning Central Texas",
    "storefront washing Temple",
    "HOA exterior cleaning",
    "restaurant patio cleaning Killeen",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Pressure Washing Waco TX | AquaBlast Pressure Washing",
    description: "Commercial pressure washing in Waco, Temple, and Killeen. Storefronts, parking lots, HOAs, and restaurants. Flexible scheduling, licensed & insured.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Pressure Washing Waco TX | AquaBlast",
    description: "Commercial pressure washing in Waco, Temple, and Killeen. Storefronts, parking lots, HOAs, and restaurants. Flexible scheduling, licensed & insured.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Pressure Washing",
  description: "Commercial pressure washing in Waco, Temple, and Killeen. Storefronts, parking lots, HOAs, and restaurants. Flexible scheduling, licensed & insured.",
  provider: {
    "@type": "LocalBusiness",
    name: "AquaBlast Pressure Washing",
    url: BASE_URL,
    telephone: "+12549008842",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1187 Lake Shore Dr",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76708",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco" },
    { "@type": "City", name: "Temple" },
    { "@type": "City", name: "Killeen" },
  ],
  serviceType: "Commercial Pressure Washing",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
