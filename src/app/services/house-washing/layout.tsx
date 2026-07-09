import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/house-washing`;

export const metadata: Metadata = {
  title: "House Washing Waco TX | Soft Wash & Pressure Washing | AquaBlast",
  description: "Professional house washing and soft washing in Waco, TX. Safe low-pressure cleaning for vinyl, brick, stucco, and painted siding. Licensed, bonded & insured. Free estimates.",
  keywords: [
    "house washing Waco TX",
    "soft wash Waco",
    "siding cleaning Central Texas",
    "exterior house cleaning Waco",
    "pressure washing house Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "House Washing Waco TX | AquaBlast Pressure Washing",
    description: "Professional house washing and soft washing in Waco, TX. Safe low-pressure cleaning for vinyl, brick, stucco, and painted siding. Licensed, bonded & insured. Free estimates.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "House Washing Waco TX | AquaBlast",
    description: "Professional house washing and soft washing in Waco, TX. Safe low-pressure cleaning for vinyl, brick, stucco, and painted siding. Licensed, bonded & insured. Free estimates.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "House Washing",
  description: "Professional house washing and soft washing in Waco, TX. Safe low-pressure cleaning for vinyl, brick, stucco, and painted siding. Licensed, bonded & insured. Free estimates.",
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
  serviceType: "House Washing",
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
