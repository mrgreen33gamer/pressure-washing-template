// src/app/projects/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/projects`;

export const metadata: Metadata = {
  title: 'Projects & Before/After Gallery | AquaBlast Pressure Washing — Waco, TX',
  description: 'Real soft washes, roof cleans, driveways, and commercial jobs by AquaBlast across Central Texas — Waco, Temple, Killeen, and beyond.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Projects & Before/After Gallery | AquaBlast Pressure Washing',
    description: 'Real exterior cleaning jobs across Central Texas — before and after results.',
    url, siteName: 'AquaBlast Pressure Washing', locale: 'en_US', type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | AquaBlast Pressure Washing',
    description: 'Real exterior cleaning results for Central Texas homes and businesses.',
  },
  robots: { index: true, follow: true },
};

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'AquaBlast Pressure Washing — Projects',
  description: 'Completed house washing, roof cleaning, driveway, and commercial pressure washing jobs across Central Texas.',
  url,
  about: {
    '@type': 'LocalBusiness',
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
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      {children}
    </>
  );
}
