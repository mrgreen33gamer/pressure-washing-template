import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/gutter-cleaning`;

export const metadata: Metadata = {
  title: "Gutter Cleaning Waco TX | Soft Wash & Pressure Washing | AquaBlast",
  description: "Professional gutter cleaning in Waco, TX. Full gutter and downspout clearing, flush, and inspection. Licensed crews, flat-rate pricing, free estimates.",
  keywords: [
    "gutter cleaning Waco TX",
    "downspout cleaning Central Texas",
    "clogged gutters Waco",
    "gutter flush Temple TX",
    "gutter cleaning Killeen",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Gutter Cleaning Waco TX | AquaBlast Pressure Washing",
    description: "Professional gutter cleaning in Waco, TX. Full gutter and downspout clearing, flush, and inspection. Licensed crews, flat-rate pricing, free estimates.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutter Cleaning Waco TX | AquaBlast",
    description: "Professional gutter cleaning in Waco, TX. Full gutter and downspout clearing, flush, and inspection. Licensed crews, flat-rate pricing, free estimates.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gutter Cleaning",
  description: "Professional gutter cleaning in Waco, TX. Full gutter and downspout clearing, flush, and inspection. Licensed crews, flat-rate pricing, free estimates.",
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
  serviceType: "Gutter Cleaning",
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
