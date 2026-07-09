// src/app/service-areas/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Pressure Washing Service Areas | Waco, Temple, Killeen & Central Texas | AquaBlast',
  description:
    'AquaBlast Pressure Washing serves Waco, Hewitt, Woodway, Robinson, China Spring, Killeen, Temple, and all of Central Texas. Flat-rate pricing, same-day service, free re-clean guarantee.',
  keywords: [
    'pressure washing service areas Central Texas',
    'pressure washing Waco TX',
    'house washing Hewitt TX',
    'pressure washing Killeen TX',
    'pressure washing Temple TX',
    'soft wash Central Texas',
    'driveway cleaning Waco',
    'AquaBlast service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Pressure Washing Service Areas | AquaBlast — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate exterior cleaning. Same-day service available.',
    url,
    siteName: 'AquaBlast Pressure Washing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pressure Washing Service Areas | AquaBlast — Central Texas',
    description: 'Serving Waco and all of Central Texas. Flat-rate pricing, same-day service, free re-clean guarantee.',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'AquaBlast Pressure Washing',
  url: BASE_URL,
  telephone: '+12549008842',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1187 Lake Shore Dr',
    addressLocality: 'Waco',
    addressRegion: 'TX',
    postalCode: '76708',
    addressCountry: 'US',
  },
  areaServed: [
    'Waco, TX', 'Hewitt, TX', 'Woodway, TX', 'Robinson, TX',
    'China Spring, TX', 'Killeen, TX', 'Temple, TX',
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '17:00' },
  ],
  priceRange: '$$',
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
