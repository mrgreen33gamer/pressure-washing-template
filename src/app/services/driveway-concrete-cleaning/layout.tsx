import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/driveway-concrete-cleaning`;

export const metadata: Metadata = {
  title: "Driveway & Concrete Cleaning Waco TX | Soft Wash & Pressure Washing | AquaBlast",
  description: "Professional driveway and concrete cleaning in Waco, TX. Oil stain removal, sidewalks, patios, and parking pads. Flat-rate pricing, free estimates.",
  keywords: [
    "driveway cleaning Waco TX",
    "concrete pressure washing",
    "oil stain removal driveway",
    "sidewalk cleaning Central Texas",
    "patio washing Temple TX",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Driveway & Concrete Cleaning Waco TX | AquaBlast Pressure Washing",
    description: "Professional driveway and concrete cleaning in Waco, TX. Oil stain removal, sidewalks, patios, and parking pads. Flat-rate pricing, free estimates.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Driveway & Concrete Cleaning Waco TX | AquaBlast",
    description: "Professional driveway and concrete cleaning in Waco, TX. Oil stain removal, sidewalks, patios, and parking pads. Flat-rate pricing, free estimates.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Driveway & Concrete Cleaning",
  description: "Professional driveway and concrete cleaning in Waco, TX. Oil stain removal, sidewalks, patios, and parking pads. Flat-rate pricing, free estimates.",
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
  serviceType: "Driveway & Concrete Cleaning",
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
