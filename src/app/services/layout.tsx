// src/app/services/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Pressure Washing Services | House, Roof, Driveway & Commercial | AquaBlast",
  description:
    "AquaBlast Pressure Washing offers house washing, roof cleaning, driveway cleaning, gutter cleaning, deck & fence cleaning, and commercial pressure washing in Waco and Central Texas. Flat-rate pricing, free re-clean guarantee.",
  keywords: [
    "pressure washing services Waco TX",
    "house washing Central Texas",
    "roof cleaning Waco",
    "driveway cleaning Waco",
    "commercial pressure washing Temple",
    "soft wash Killeen TX",
    "AquaBlast services",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Pressure Washing Services | AquaBlast — Waco & Central Texas",
    description:
      "House washing, roof cleaning, driveways, gutters, decks, and commercial. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pressure Washing Services | AquaBlast",
    description:
      "Exterior cleaning for Waco and Central Texas. Flat-rate pricing, free re-clean guarantee.",
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "AquaBlast Pressure Washing — Exterior Cleaning Services",
  description:
    "Full-service exterior cleaning for Central Texas homes and businesses: house washing, roof cleaning, driveways, gutters, decks, and commercial pressure washing.",
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
      addressCountry: "US",
    },
  },
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Washing", url: `${BASE_URL}/services/house-washing` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Cleaning", url: `${BASE_URL}/services/gutter-cleaning` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Cleaning", url: `${BASE_URL}/services/roof-cleaning` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deck & Fence Cleaning", url: `${BASE_URL}/services/deck-fence-cleaning` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Driveway & Concrete Cleaning", url: `${BASE_URL}/services/driveway-concrete-cleaning` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Pressure Washing", url: `${BASE_URL}/services/commercial-pressure-washing` } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: url },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
