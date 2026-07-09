import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/roof-cleaning`;

export const metadata: Metadata = {
  title: "Roof Cleaning Waco TX | Soft Wash & Pressure Washing | AquaBlast",
  description: "Professional soft wash roof cleaning in Waco, TX. Safe algae and moss removal for asphalt shingles, tile, and metal. Licensed crews, free estimates.",
  keywords: [
    "roof cleaning Waco TX",
    "soft wash roof Central Texas",
    "black algae roof cleaning",
    "roof moss removal Waco",
    "shingle cleaning Temple TX",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Roof Cleaning Waco TX | AquaBlast Pressure Washing",
    description: "Professional soft wash roof cleaning in Waco, TX. Safe algae and moss removal for asphalt shingles, tile, and metal. Licensed crews, free estimates.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Cleaning Waco TX | AquaBlast",
    description: "Professional soft wash roof cleaning in Waco, TX. Safe algae and moss removal for asphalt shingles, tile, and metal. Licensed crews, free estimates.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Roof Cleaning",
  description: "Professional soft wash roof cleaning in Waco, TX. Safe algae and moss removal for asphalt shingles, tile, and metal. Licensed crews, free estimates.",
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
  serviceType: "Roof Cleaning",
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
