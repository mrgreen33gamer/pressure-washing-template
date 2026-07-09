import fs from 'fs';
import path from 'path';

const ROOT = 'src/app/industries';
const BASE = 'https://www.aquablastpw.com';

const INDUSTRIES = [
  {
    old: 'automotive',
    slug: 'property-management-hoas',
    title: 'Property Management & HOAs',
    short: 'Property Management',
    intro: 'Recurring exterior cleaning programs for multi-family properties, HOA common areas, and managed communities across Central Texas.',
    metaDesc: 'Pressure washing for property managers and HOAs in Waco, Temple, and Killeen. Multi-unit exteriors, amenities, parking lots. COIs available. Recurring programs.',
    painPoints: [
      ['Resident complaints about dirty exteriors','Common-area mildew and stained sidewalks drive complaints and hurt renewal rates.'],
      ['Inconsistent vendors','One-off cleaners miss schedules, leave messes, and never send COIs on time.'],
      ['Budget unpredictability','Hourly billing and surprise trip charges blow HOA maintenance budgets.'],
    ],
    benefits: [
      'Monthly or quarterly recurring programs with locked-in pricing',
      'Certificates of insurance provided for boards and management companies',
      'Amenity decks, dumpster pads, sidewalks, and building exteriors',
      'Off-hours scheduling to minimize resident disruption',
    ],
    faq: [
      ['Do you work with HOA boards and property managers?','Yes — we invoice management companies, provide COIs, and schedule around board requirements and quiet hours.'],
      ['Can you clean multi-building communities?','Yes. We scope multi-building complexes with a written map of surfaces and a recurring calendar.'],
      ['What surfaces do you cover for HOAs?','Building exteriors, sidewalks, parking lots, dumpster pads, amenity decks, pool decks, and fence lines.'],
    ],
  },
  {
    old: 'manufacturing',
    slug: 'restaurants-hospitality',
    title: 'Restaurants & Hospitality',
    short: 'Restaurants',
    intro: 'Keep patios, dumpster pads, drive-thrus, and storefronts spotless — without interrupting service hours.',
    metaDesc: 'Restaurant and hospitality pressure washing in Waco and Central Texas. Patio cleaning, dumpster pads, drive-thrus, and storefronts. Night and weekend scheduling.',
    painPoints: [
      ['Grease and odor around dumpsters','Dumpster pads and back-of-house concrete stain quickly and attract pests.'],
      ['Patio and entryway grime','Customers notice dirty outdoor seating long before they notice a new menu item.'],
      ['Daytime disruption','Cleaning during lunch or dinner kills seat turns and reviews.'],
    ],
    benefits: [
      'Night and early-morning scheduling around service hours',
      'Grease-safe degreasing on dumpster pads and kitchen exits',
      'Patio, sidewalk, and storefront soft/pressure wash options',
      'Recurring weekly or monthly plans for multi-location operators',
    ],
    faq: [
      ['Can you clean after closing?','Yes — nights and early mornings are standard for restaurants so you never lose a service period.'],
      ['Do you clean grease-stained concrete?','Yes. We pre-treat grease with commercial degreasers before high-pressure cleaning.'],
      ['Can you service multiple locations?','Yes — we support multi-location operators with scheduled routes across Waco, Temple, and Killeen.'],
    ],
  },
  {
    old: 'oil-gas',
    slug: 'retail-commercial-real-estate',
    title: 'Retail & Commercial Real Estate',
    short: 'Retail & CRE',
    intro: 'Storefronts, parking lots, and portfolio exteriors that look investor-ready and tenant-ready — on a schedule that fits leasing and foot traffic.',
    metaDesc: 'Commercial real estate and retail pressure washing in Central Texas. Storefronts, parking lots, shopping centers. Portfolio programs for property owners.',
    painPoints: [
      ['Curb appeal kills leasing velocity','Dirty storefronts and parking lots signal neglect to prospective tenants.'],
      ['Scattered vendor quality','Different cleaners per property mean inconsistent results and paperwork chaos.'],
      ['Safety and slip risks','Algae on walkways and oil on parking pads create liability.'],
    ],
    benefits: [
      'Portfolio-wide programs with consistent standards',
      'Storefront, canopy, sidewalk, and parking lot cleaning',
      'COIs and photo documentation for owners and asset managers',
      'Flexible scheduling around peak shopping hours',
    ],
    faq: [
      ['Do you clean shopping centers?','Yes — parking lots, sidewalks, dumpster enclosures, and building exteriors for retail centers and strip centers.'],
      ['Can one contract cover multiple assets?','Yes. We build portfolio schedules with per-property scopes and consolidated billing.'],
      ['Do you provide before/after documentation?','Yes — photo documentation is available for owners, lenders, and marketing packages.'],
    ],
  },
];

function page(ind) {
  return `"use client";

import styles from "../page.module.scss";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";

import {
  faBuilding, faClock, faShieldHalved, faHandshake, faCheckCircle, faFileContract,
} from "@fortawesome/free-solid-svg-icons";

export default function ${ind.slug.split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join('')}Page() {
  const whyFeatures = [
    { icon: faHandshake, title: "Built for ${ind.short}", description: "${ind.intro}" },
    { icon: faClock, title: "Flexible Scheduling", description: "We work around your residents, guests, and tenants — not the other way around." },
    { icon: faShieldHalved, title: "Licensed, Bonded & Insured", description: "COIs available on request. Every crew is fully covered for commercial properties." },
  ];

  const faq = [
${ind.faq.map(([q,a]) => `    { question: "${q}", answer: "${a}" },`).join('\n')}
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "${ind.title}" },
      ]} />

      <SectionIntro
        title="${ind.title}"
        subtitle="${ind.intro}"
      />

      <TrustBar headline="Commercial-ready exterior cleaning for Central Texas portfolios" />

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why ${ind.short} Clients Choose AquaBlast" />
      </div>

      <div className={styles.section}>
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.25rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>What You Get</h2>
          <ul>
${ind.benefits.map(b => `            <li>${b}</li>`).join('\n')}
          </ul>
        </section>
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="${ind.title} — FAQs" />
      </div>

      <CTABanner
        headline="Need a Reliable Cleaning Partner?"
        subline="Recurring programs, COIs, and flat-rate pricing for ${ind.short.toLowerCase()} clients across Central Texas."
        primaryText="Call (254) 900-8842"
        primaryLink="tel:+12549008842"
        secondaryText="Request a Quote"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4
          title="Request a ${ind.short} Quote"
          cityName="Waco"
          slug="industries/${ind.slug}"
          spot="${ind.slug}-form"
          formVariant={2}
        />
      </div>
    </main>
  );
}
`;
}

function layout(ind) {
  return `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '${BASE}';
const url = \`\${BASE_URL}/industries/${ind.slug}\`;

export const metadata: Metadata = {
  title: "${ind.title} Pressure Washing | AquaBlast Central Texas",
  description: "${ind.metaDesc}",
  keywords: ["${ind.title.toLowerCase()} pressure washing", "commercial cleaning Waco TX", "AquaBlast ${ind.short}"],
  alternates: { canonical: url },
  openGraph: {
    title: "${ind.title} | AquaBlast Pressure Washing",
    description: "${ind.metaDesc}",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
}

for (const ind of INDUSTRIES) {
  const oldPath = path.join(ROOT, ind.old);
  if (fs.existsSync(oldPath)) fs.rmSync(oldPath, { recursive: true, force: true });
  const dir = path.join(ROOT, ind.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), page(ind));
  fs.writeFileSync(path.join(dir, 'layout.tsx'), layout(ind));
  console.log('created', ind.slug);
}
console.log('done industries');
