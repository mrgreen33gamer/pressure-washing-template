// src/app/about/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url      = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About AquaBlast Pressure Washing — Waco TX Exterior Cleaning Since 2015",
  description:
    "Meet the AquaBlast team. Locally owned and operated in Waco, Texas since 2015. Licensed, bonded & insured crews, eco-friendly soft wash, flat-rate pricing, and a free re-clean if you're not happy. Serving Waco, Temple, Killeen, and all of Central Texas.",
  keywords: [
    "about AquaBlast Pressure Washing",
    "Waco pressure washing company",
    "pressure washing contractor Waco TX",
    "locally owned pressure washing Waco",
    "soft wash Waco Texas",
    "Central Texas exterior cleaning company",
    "pressure washing company history Waco",
    "Cody Marsh AquaBlast",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About AquaBlast Pressure Washing — Waco TX Exterior Cleaning Since 2015",
    description:
      "Locally owned and operated in Waco since 2015. Licensed, bonded & insured, flat-rate pricing, free re-clean guarantee. Serving all of Central Texas.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About AquaBlast Pressure Washing — Waco TX Since 2015",
    description:
      "Locally owned pressure washing company in Waco, TX. Soft wash specialists, flat-rate pricing, free re-clean guarantee.",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "AquaBlast Pressure Washing",
  url: BASE_URL,
  telephone: "+12549008842",
  email: "contact@aquablastpw.com",
  foundingDate: "2015",
  founder: {
    "@type": "Person",
    name: "Cody Marsh",
    jobTitle: "Owner & Lead Technician",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1187 Lake Shore Dr",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76708",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Waco",         containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Robinson",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  sameAs: [
    "https://www.facebook.com/aquablastpw",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",  item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: url },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
