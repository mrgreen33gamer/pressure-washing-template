import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/deck-fence-cleaning`;

export const metadata: Metadata = {
  title: "Deck & Fence Cleaning Waco TX | Soft Wash & Pressure Washing | AquaBlast",
  description: "Professional deck and fence cleaning in Waco, TX. Wood, composite, and vinyl restoration. Safe cleaning before seal or stain. Free estimates.",
  keywords: [
    "deck cleaning Waco TX",
    "fence cleaning Central Texas",
    "wood deck wash Waco",
    "composite deck cleaning",
    "vinyl fence wash Temple",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Deck & Fence Cleaning Waco TX | AquaBlast Pressure Washing",
    description: "Professional deck and fence cleaning in Waco, TX. Wood, composite, and vinyl restoration. Safe cleaning before seal or stain. Free estimates.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck & Fence Cleaning Waco TX | AquaBlast",
    description: "Professional deck and fence cleaning in Waco, TX. Wood, composite, and vinyl restoration. Safe cleaning before seal or stain. Free estimates.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deck & Fence Cleaning",
  description: "Professional deck and fence cleaning in Waco, TX. Wood, composite, and vinyl restoration. Safe cleaning before seal or stain. Free estimates.",
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
  serviceType: "Deck & Fence Cleaning",
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
