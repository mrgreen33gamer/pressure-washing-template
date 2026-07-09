import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aquablastpw.com';
const url = `${BASE_URL}/services/deck-fence-cleaning/killeen-tx`;

export const metadata: Metadata = {
  title: "Deck & Fence Cleaning Killeen TX | AquaBlast Pressure Washing",
  description: "Professional deck & fence cleaning in Killeen, TX. Restore weathered wood, composite, and vinyl fences and decks with surface-safe cleaning that prepares for sealing or staining. Call (254) 900-8842 for a free estimate.",
  keywords: [
    "deck & fence cleaning Killeen TX",
    "pressure washing Killeen",
    "soft wash Killeen Texas",
    "AquaBlast Killeen",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Deck & Fence Cleaning Killeen TX | AquaBlast",
    description: "Deck & Fence Cleaning for Killeen homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck & Fence Cleaning Killeen TX | AquaBlast",
    description: "Professional deck & fence cleaning in Killeen. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
