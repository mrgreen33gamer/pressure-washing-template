// src/app/layout.tsx
// AquaBlast Pressure Washing — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#06232b' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, ABeeZee } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS ─────────────────────────────────────────────────────────────────────
const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const aBeeZee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abeezee",
});

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.aquablastpw.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
// Next.js 14+ moved viewport / themeColor / colorScheme out of `metadata` and
// into a separate `viewport` export. The `viewportFit: 'cover'` is the single
// most important line in this file for the notch / home-indicator fix.
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  // Two themeColor entries so iOS Safari can pick the right one when the user
  // toggles light/dark mode. Both are obsidian dark to match the brand bg
  // applied to <body> in globals.css. Adjust if you want a lighter Safari
  // chrome tint for light-mode users.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06232b" },
    { media: "(prefers-color-scheme: dark)",  color: "#06232b" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AquaBlast Pressure Washing | House Washing, Roof & Driveway Cleaning — Waco, TX",
    template: "%s | AquaBlast Pressure Washing",
  },
  description:
    "AquaBlast Pressure Washing is a Waco, TX exterior cleaning company offering house washing, roof cleaning, driveway & concrete cleaning, gutter cleaning, and commercial pressure washing for Central Texas homes and businesses. Licensed, bonded, no contracts.",
  keywords: [
    "AquaBlast Pressure Washing",
    "pressure washing company Waco TX",
    "house washing Waco Texas",
    "soft wash roof cleaning Waco",
    "driveway cleaning Central Texas",
    "exterior cleaning Waco TX",
    "pressure washing contractor Hewitt TX",
    "gutter cleaning Waco",
    "commercial pressure washing Waco",
  ],
  authors: [{ name: "AquaBlast Pressure Washing", url: BASE_URL }],
  creator: "AquaBlast Pressure Washing",
  publisher: "AquaBlast Pressure Washing",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "AquaBlast Pressure Washing | House Washing, Roof & Driveway Cleaning — Waco, TX",
    description:
      "Waco-based pressure washing company for house washing, roof cleaning, driveway cleaning, and commercial exterior cleaning across Central Texas. Licensed & insured. No contracts.",
    url: BASE_URL,
    siteName: "AquaBlast Pressure Washing",
    images: [
      {
        url: `${BASE_URL}/logos/aquablast-pressure-washing-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "AquaBlast Pressure Washing — Waco TX Exterior Cleaning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaBlast Pressure Washing | Waco TX Exterior Cleaning",
    description:
      "House washing, roof cleaning, driveway cleaning & commercial pressure washing for Central Texas. Licensed & insured — no contracts.",
    images: [`${BASE_URL}/logos/aquablast-pressure-washing-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "AquaBlast Pressure Washing",
  alternateName: "AquaBlast Exterior Cleaning",
  description:
    "Residential and commercial pressure washing services in Waco and Central Texas — house washing, roof cleaning, driveway & concrete cleaning, gutter cleaning, and commercial pressure washing. Licensed, bonded, insured, no contracts.",
  url: BASE_URL,
  telephone: "+12549008842",
  email: "contact@aquablastpw.com",
  foundingDate: "2015",
  founder: {
    "@type": "Person",
    name: "Cody Marsh",
    jobTitle: "Owner & Founder",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1187 Lake Shore Dr",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76708",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Robinson",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hillsboro",    containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pressure Washing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Washing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Driveway & Concrete Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deck & Fence Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Pressure Washing" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/aquablastpw",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${aBeeZee.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* ConditionalShell shows Header/Footer only on non-admin pages */}
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#0891b2" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#06232b",
                }}
              >
                <PulseLoader size={50} color="#0891b2" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        {/* Footer only on non-admin pages */}
        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}