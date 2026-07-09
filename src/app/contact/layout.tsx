// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact AquaBlast Pressure Washing | Free Estimate in Waco & Central Texas',
  description:
    'Contact AquaBlast Pressure Washing to schedule house washing, roof cleaning, driveway cleaning, or a free estimate. Serving Waco, Temple, Killeen, and all of Central Texas. Call (254) 900-8842.',
  keywords: [
    'contact AquaBlast Pressure Washing',
    'pressure washing estimate Waco TX',
    'schedule house washing Waco',
    'pressure washing quote Central Texas',
    'AquaBlast contact',
    '254-900-8842',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact AquaBlast Pressure Washing | Free Estimate in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Flat-rate pricing, free re-clean guarantee, licensed & bonded crews.',
    url,
    siteName: 'AquaBlast Pressure Washing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact AquaBlast Pressure Washing | Waco & Central Texas',
    description: 'Schedule exterior cleaning or get a free estimate. Call (254) 900-8842.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
