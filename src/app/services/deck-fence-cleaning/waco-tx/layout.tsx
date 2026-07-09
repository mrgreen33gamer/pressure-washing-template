import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/deck-fence-cleaning/waco-tx`;

export const metadata: Metadata = {
  title: "Deck & Fence Cleaning Waco TX | AquaBlast Pressure Washing",
  description: "Professional deck & fence cleaning in Waco, TX. Restore weathered wood, composite, and vinyl fences and decks with surface-safe cleaning that prepares for sealing or staining. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "deck & fence cleaning Waco TX",
    "pressure washing Waco",
    "soft wash Waco Texas",
    "AquaBlast Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Deck & Fence Cleaning Waco TX | AquaBlast",
    description: "Deck & Fence Cleaning for Waco homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck & Fence Cleaning Waco TX | AquaBlast",
    description: "Professional deck & fence cleaning in Waco. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
