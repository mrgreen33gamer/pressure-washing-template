import fs from 'fs';
import path from 'path';

const ROOT = 'src/app/services';
const BASE = 'https://www.aquablastpw.com';

const SERVICES = [
  {
    slug: 'house-washing',
    title: 'House Washing',
    short: 'House Wash',
    icon: 'faHouseChimney',
    iconsImport: 'faHouseChimney, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock, faTrophy, faChartLine, faSprayCanSparkles, faRoad, faDroplet, faTree',
    intro: 'Low-pressure soft wash that lifts mold, mildew, pollen, and dirt without damaging siding, paint, or landscaping.',
    metaDesc: 'Professional house washing and soft washing in Waco, TX. Safe low-pressure cleaning for vinyl, brick, stucco, and painted siding. Licensed, bonded & insured. Free estimates.',
    keywords: ['house washing Waco TX','soft wash Waco','siding cleaning Central Texas','exterior house cleaning Waco','pressure washing house Waco'],
    expectations: [
      ['faSearch','Surface Assessment','We identify siding type, soil level, and problem areas — soft wash vs light pressure chosen per surface.'],
      ['faFileContract','Flat-Rate Quote First','Written price before any work starts. It never changes mid-job.'],
      ['faCheckCircle','Plant-Safe Soft Wash','Eco-friendly solutions pre-wet and protect landscaping while killing mold and mildew at the root.'],
      ['faShieldHalved','Free Re-Clean Guarantee','Not happy with the results? We come back and re-clean at no charge.'],
    ],
    why: [
      ['faClock','Same-Day Availability','Most residential house washes can be scheduled same week — often same day when you call early.'],
      ['faHouseChimney','All Siding Types','Vinyl, fiber cement, brick, stucco, wood, and painted surfaces — right technique for each.'],
      ['faShieldHalved','Licensed, Bonded & Insured','Every crew is fully covered. Your home is protected from first spray to final rinse.'],
    ],
    process: [
      ['Call or Book','Phone, text, or online. We confirm a time that fits your schedule.'],
      ['Walk the Property','Crew lead notes siding type, soil, and landscaping protection needs.'],
      ['Flat-Rate Quote','Written price before we start. You approve — zero pressure.'],
      ['Soft Wash & Walkthrough','Clean, rinse, and walk the property with you before we leave.'],
    ],
    metrics: [[2400,'Houses soft-washed across Central Texas'],[98,'Customer satisfaction rate'],[10,'Years serving Waco-area homeowners']],
    faq: [
      ['How much does house washing cost in Waco?','Most residential house washes run $250–$550 depending on size, stories, and soil level. We always provide a flat-rate written quote before starting.'],
      ['Is soft washing safer than pressure washing for siding?','Yes. Soft wash uses low pressure and specialized cleaners that kill mold and algae without driving water behind siding or stripping paint.'],
      ['Will it hurt my plants?','We pre-wet landscaping, use plant-safe solutions, and rinse thoroughly. Pets can return once surfaces are dry.'],
      ['How long does a house wash take?','Most single-story homes finish in 2–4 hours. Two-story homes typically take a half day.'],
      ['How often should I soft wash my house?','Most Central Texas homes benefit from a soft wash every 12–24 months depending on shade, trees, and humidity.'],
    ],
    cross: [
      ['faSprayCanSparkles','Roof Cleaning','/services/roof-cleaning','Soft-wash roof cleaning that kills black algae streaks safely.'],
      ['faRoad','Driveway & Concrete','/services/driveway-concrete-cleaning','Oil stains, mildew, and tire marks removed from hardscape.'],
      ['faDroplet','Gutter Cleaning','/services/gutter-cleaning','Clear gutters and downspouts so water flows free.'],
      ['faTree','Deck & Fence','/services/deck-fence-cleaning','Restore weathered wood, composite, and vinyl surfaces.'],
    ],
    cta: 'Ready for a Spotless Exterior?',
    formTitle: 'Schedule Your House Wash',
  },
  {
    slug: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    short: 'Gutter Clean',
    icon: 'faDroplet',
    iconsImport: 'faDroplet, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock, faTrophy, faChartLine, faHouseChimney, faRoad, faTree, faWarehouse, faSprayCanSparkles',
    intro: 'Full gutter and downspout clearing so water flows free — preventing overflow damage, foundation issues, and mosquito breeding grounds.',
    metaDesc: 'Professional gutter cleaning in Waco, TX. Full gutter and downspout clearing, flush, and inspection. Licensed crews, flat-rate pricing, free estimates.',
    keywords: ['gutter cleaning Waco TX','downspout cleaning Central Texas','clogged gutters Waco','gutter flush Temple TX','gutter cleaning Killeen'],
    expectations: [
      ['faSearch','Full Gutter Inspection','We check every run and downspout for clogs, loose hangers, and overflow damage.'],
      ['faFileContract','Flat-Rate Quote First','Written price before we climb a ladder. No surprise add-ons mid-job.'],
      ['faCheckCircle','Flush & Flow Test','Debris removed, downspouts flushed, and water flow verified before we leave.'],
      ['faShieldHalved','Property Protected','Landscaping and siding protected during cleaning. Mess hauled away — not left in your beds.'],
    ],
    why: [
      ['faClock','Fast Scheduling','Most gutter cleans book within the week — critical before storm season.'],
      ['faDroplet','Complete Downspout Service','We do not just scoop the troughs — we clear and flush every downspout.'],
      ['faShieldHalved','Licensed & Insured','Crews are bonded and insured for ladder work on multi-story homes.'],
    ],
    process: [
      ['Call or Book','Tell us home height, gutter type, and access concerns.'],
      ['On-Site Check','We inspect runs, downspouts, and fascia for damage.'],
      ['Clear & Flush','Debris removed, lines flushed, flow verified.'],
      ['Walkthrough','We show you what we found and haul debris away.'],
    ],
    metrics: [[1800,'Gutter systems cleaned'],[98,'Customer satisfaction rate'],[10,'Years of local experience']],
    faq: [
      ['How much does gutter cleaning cost in Waco?','Most single-story homes run $125–$250. Two-story homes typically $200–$400 depending on linear feet and access.'],
      ['How often should gutters be cleaned?','Twice a year is ideal in Central Texas — once after spring pollen and once after fall leaf drop.'],
      ['Do you clean gutter guards?','Yes. We service most screen and micro-mesh systems and can advise if guards need repair or replacement.'],
      ['Can clogged gutters damage my foundation?','Yes. Overflowing gutters dump water next to the foundation, which can cause settling, basement moisture, and landscape erosion.'],
    ],
    cross: [
      ['faHouseChimney','House Washing','/services/house-washing','Soft-wash your siding while we are already on site.'],
      ['faSprayCanSparkles','Roof Cleaning','/services/roof-cleaning','Clear algae and moss that feeds gutter debris.'],
      ['faRoad','Driveway & Concrete','/services/driveway-concrete-cleaning','Clean the splash zones under overloaded gutters.'],
      ['faWarehouse','Commercial','/services/commercial-pressure-washing','Multi-unit and commercial gutter programs available.'],
    ],
    cta: 'Gutters Overflowing? We Can Help.',
    formTitle: 'Schedule Gutter Cleaning',
  },
  {
    slug: 'roof-cleaning',
    title: 'Roof Cleaning',
    short: 'Roof Clean',
    icon: 'faSprayCanSparkles',
    iconsImport: 'faSprayCanSparkles, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock, faTrophy, faChartLine, faHouseChimney, faRoad, faDroplet, faTree',
    intro: 'Soft-wash roof cleaning that kills black algae streaks and moss at the root — safe for asphalt shingles, tile, and metal roofs.',
    metaDesc: 'Professional soft wash roof cleaning in Waco, TX. Safe algae and moss removal for asphalt shingles, tile, and metal. Licensed crews, free estimates.',
    keywords: ['roof cleaning Waco TX','soft wash roof Central Texas','black algae roof cleaning','roof moss removal Waco','shingle cleaning Temple TX'],
    expectations: [
      ['faSearch','Roof Assessment','We identify algae, moss, lichen, and granule condition before recommending treatment.'],
      ['faFileContract','Soft Wash Only on Shingles','Low-pressure application protects shingles — we never blast asphalt with high pressure.'],
      ['faCheckCircle','Root-Kill Treatment','Solutions kill Gloeocapsa magma algae at the source so black streaks stay gone longer.'],
      ['faShieldHalved','Landscaping Protected','Plants pre-wetted and rinsed. Gutters flushed after treatment.'],
    ],
    why: [
      ['faClock','Curb Appeal Fast','Most roofs look dramatically better within days as the treatment works.'],
      ['faSprayCanSparkles','Shingle-Safe Method','Soft wash preserves manufacturer warranties better than high-pressure blasting.'],
      ['faShieldHalved','Licensed & Bonded','Roof work performed by trained, insured crews only.'],
    ],
    process: [
      ['Free Estimate','We assess roof type, pitch, and algae severity from the ground and ladder.'],
      ['Protect Landscape','Plants and vehicles protected; gutters prepped.'],
      ['Soft Wash Apply','Low-pressure treatment applied evenly across affected areas.'],
      ['Rinse & Follow-Up','Controlled rinse where needed; aftercare tips provided.'],
    ],
    metrics: [[900,'Roofs soft-washed'],[98,'Customer satisfaction rate'],[10,'Years of local experience']],
    faq: [
      ['Is soft washing safe for asphalt shingles?','Yes when done correctly. Soft wash uses low pressure and algaecide solutions rather than high-pressure blasting that strips granules.'],
      ['How much does roof cleaning cost in Waco?','Most residential roofs run $350–$900 depending on size, pitch, and severity. Multi-story or steep roofs cost more for safety.'],
      ['Will black streaks come back?','Treatment kills algae at the root. Most homes stay cleaner for 2–4 years depending on shade and tree cover.'],
      ['Do you clean metal and tile roofs?','Yes — method is adjusted for surface type. Metal and tile often use lower chemical concentration and careful rinse control.'],
    ],
    cross: [
      ['faHouseChimney','House Washing','/services/house-washing','Match your clean roof with fresh siding.'],
      ['faDroplet','Gutter Cleaning','/services/gutter-cleaning','Clear gutters after roof treatment runoff.'],
      ['faRoad','Driveway & Concrete','/services/driveway-concrete-cleaning','Clean sidewalks stained by roof runoff.'],
      ['faTree','Deck & Fence','/services/deck-fence-cleaning','Restore outdoor living spaces below.'],
    ],
    cta: 'Black Streaks on Your Roof?',
    formTitle: 'Schedule Roof Cleaning',
  },
  {
    slug: 'deck-fence-cleaning',
    title: 'Deck & Fence Cleaning',
    short: 'Deck & Fence',
    icon: 'faTree',
    iconsImport: 'faTree, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock, faTrophy, faChartLine, faHouseChimney, faRoad, faDroplet, faWarehouse',
    intro: 'Restore weathered wood, composite, and vinyl fences and decks with surface-safe cleaning that prepares for sealing or staining.',
    metaDesc: 'Professional deck and fence cleaning in Waco, TX. Wood, composite, and vinyl restoration. Safe cleaning before seal or stain. Free estimates.',
    keywords: ['deck cleaning Waco TX','fence cleaning Central Texas','wood deck wash Waco','composite deck cleaning','vinyl fence wash Temple'],
    expectations: [
      ['faSearch','Material-Matched Method','Wood, composite, and vinyl each get the right pressure and chemistry.'],
      ['faFileContract','Prep for Seal or Stain','We clean so coatings bond correctly — ask about timing before sealing.'],
      ['faCheckCircle','Gray Weathering Lifted','Remove mildew, dirt, and UV graying without shredding wood fibers.'],
      ['faShieldHalved','Yard Protected','Nearby landscaping rinsed and protected throughout the job.'],
    ],
    why: [
      ['faClock','Weekend-Ready Scheduling','Most decks and fences finish in a few hours — enjoy them the same weekend.'],
      ['faTree','Wood Care Expertise','We know when to soft wash vs pressure wash so you do not fuzzy softwoods.'],
      ['faShieldHalved','Satisfaction Guaranteed','Free re-clean if results do not meet expectations.'],
    ],
    process: [
      ['Estimate','We note material, age, and condition — cleaning only or prep for coat.'],
      ['Protect Area','Furniture moved, plants protected, neighbors notified if fence-shared.'],
      ['Clean','Even cleaning passes with appropriate pressure and detergents.'],
      ['Dry & Advise','We recommend dry time before sealing and aftercare tips.'],
    ],
    metrics: [[1100,'Decks and fences restored'],[98,'Customer satisfaction rate'],[10,'Years of local experience']],
    faq: [
      ['How much does deck cleaning cost in Waco?','Most residential decks run $150–$400. Full fence lines vary by linear feet — typically $2–$4 per foot depending on height and access.'],
      ['Can you clean composite decking?','Yes. Composite needs gentler chemistry and pressure than raw wood — we adjust methods to avoid surface damage.'],
      ['Should I seal after cleaning?','For wood decks and fences, sealing 24–72 hours after cleaning (when fully dry) dramatically extends life. We can recommend products and timing.'],
      ['Will pressure washing splinter my wood?','High pressure can fuzzy softwoods. We use controlled pressure and detergents to clean without shredding fibers.'],
    ],
    cross: [
      ['faHouseChimney','House Washing','/services/house-washing','Clean the whole exterior in one visit.'],
      ['faRoad','Driveway & Concrete','/services/driveway-concrete-cleaning','Patios and walkways cleaned to match.'],
      ['faDroplet','Gutter Cleaning','/services/gutter-cleaning','Keep water off decks and fence lines.'],
      ['faWarehouse','Commercial','/services/commercial-pressure-washing','HOA fence lines and amenity decks.'],
    ],
    cta: 'Deck Looking Weathered?',
    formTitle: 'Schedule Deck & Fence Cleaning',
  },
  {
    slug: 'driveway-concrete-cleaning',
    title: 'Driveway & Concrete Cleaning',
    short: 'Driveway Clean',
    icon: 'faRoad',
    iconsImport: 'faRoad, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock, faTrophy, faChartLine, faHouseChimney, faSprayCanSparkles, faDroplet, faWarehouse',
    intro: 'High-pressure cleaning for driveways, sidewalks, patios, and parking pads. Oil stains, tire marks, mildew, and years of buildup — gone.',
    metaDesc: 'Professional driveway and concrete cleaning in Waco, TX. Oil stain removal, sidewalks, patios, and parking pads. Flat-rate pricing, free estimates.',
    keywords: ['driveway cleaning Waco TX','concrete pressure washing','oil stain removal driveway','sidewalk cleaning Central Texas','patio washing Temple TX'],
    expectations: [
      ['faSearch','Stain Assessment','Oil, rust, mildew, and tire marks each need different pre-treatments — we diagnose first.'],
      ['faFileContract','Flat-Rate Quote','Price locked before we start. Surface-safe pressures for decorative concrete.'],
      ['faCheckCircle','Deep Clean Results','Surface cleaners and high-pressure methods for even, streak-free concrete.'],
      ['faShieldHalved','Neighbors Considered','Controlled spray and runoff management to keep mess off adjacent properties.'],
    ],
    why: [
      ['faClock','Fast Turnaround','Most driveways finish in 1–3 hours depending on size and stain severity.'],
      ['faRoad','Hardscape Specialists','Driveways, sidewalks, patios, pool decks, and parking pads.'],
      ['faShieldHalved','Curb Appeal Boost','One of the highest ROI exterior cleans before selling or hosting.'],
    ],
    process: [
      ['Quote','Measure area, note stains, provide flat-rate price.'],
      ['Pre-Treat','Apply degreasers or detergents to oil and organic stains.'],
      ['Surface Clean','Even high-pressure cleaning for uniform results.'],
      ['Rinse & Review','Final rinse and walkthrough with you.'],
    ],
    metrics: [[2000,'Driveways and hardscapes cleaned'],[98,'Customer satisfaction rate'],[10,'Years of local experience']],
    faq: [
      ['How much does driveway cleaning cost in Waco?','Most two-car driveways run $150–$350. Larger circular drives or heavy oil staining may cost more — always quoted flat-rate first.'],
      ['Can you remove oil stains completely?','Many oil stains lighten dramatically; deeply set petroleum can leave a faint shadow. We pre-treat aggressively and set honest expectations.'],
      ['Is pressure washing safe for stamped concrete?','Yes with correct tips and distance. Decorative concrete needs lower pressure and more detergent dwell time.'],
      ['How often should I clean my driveway?','Once a year keeps mold and tire marks from embedding. High-shade drives may need twice yearly.'],
    ],
    cross: [
      ['faHouseChimney','House Washing','/services/house-washing','Pair curb appeal with a full soft wash.'],
      ['faSprayCanSparkles','Roof Cleaning','/services/roof-cleaning','Stop roof runoff from restaining concrete.'],
      ['faDroplet','Gutter Cleaning','/services/gutter-cleaning','Fix the source of sidewalk splash stains.'],
      ['faWarehouse','Commercial','/services/commercial-pressure-washing','Parking lots and storefront pads.'],
    ],
    cta: 'Driveway Looking Rough?',
    formTitle: 'Schedule Concrete Cleaning',
  },
  {
    slug: 'commercial-pressure-washing',
    title: 'Commercial Pressure Washing',
    short: 'Commercial',
    icon: 'faWarehouse',
    iconsImport: 'faWarehouse, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock, faTrophy, faChartLine, faHouseChimney, faRoad, faDroplet, faTree',
    intro: 'Storefronts, parking lots, HOAs, restaurants, and multi-unit properties cleaned on flexible schedules that will not interrupt your business.',
    metaDesc: 'Commercial pressure washing in Waco, Temple, and Killeen. Storefronts, parking lots, HOAs, and restaurants. Flexible scheduling, licensed & insured.',
    keywords: ['commercial pressure washing Waco','parking lot cleaning Central Texas','storefront washing Temple','HOA exterior cleaning','restaurant patio cleaning Killeen'],
    expectations: [
      ['faSearch','Site Walk & Scope','We document surfaces, access, hours, and COI requirements before quoting.'],
      ['faFileContract','Written Scope & Price','Clear scope of work — recurring programs available for property managers.'],
      ['faCheckCircle','Off-Hours Friendly','Nights and weekends available to avoid disrupting customers and tenants.'],
      ['faShieldHalved','Fully Insured','Certificates of insurance provided for property managers and GCs.'],
    ],
    why: [
      ['faClock','Flexible Scheduling','We work around your busiest hours and HOA quiet times.'],
      ['faWarehouse','Multi-Surface Capability','Concrete, brick, dumpster pads, canopies, and building exteriors.'],
      ['faShieldHalved','Reliable Recurring Service','Monthly or quarterly programs with consistent crews and pricing.'],
    ],
    process: [
      ['Site Assessment','Walk the property, note problem areas and access.'],
      ['Proposal','Written scope, schedule options, and flat-rate pricing.'],
      ['Scheduled Clean','Crew arrives on time, works the agreed plan, minimizes disruption.'],
      ['Sign-Off','Walkthrough with PM or owner; photos available on request.'],
    ],
    metrics: [[400,'Commercial properties maintained'],[98,'Client retention satisfaction'],[10,'Years serving Central Texas businesses']],
    faq: [
      ['Do you provide certificates of insurance?','Yes — COIs for property managers, HOAs, and general contractors are available on request.'],
      ['Can you work after hours?','Yes. Nights and weekends are common for restaurants, retail, and multi-family properties.'],
      ['Do you offer recurring contracts?','Yes — monthly or quarterly exterior maintenance programs with locked-in pricing.'],
      ['What commercial surfaces do you clean?','Parking lots, sidewalks, dumpster pads, storefronts, building exteriors, loading docks, and amenity areas.'],
    ],
    cross: [
      ['faHouseChimney','House Washing','/services/house-washing','Residential soft wash for multi-family units.'],
      ['faRoad','Driveway & Concrete','/services/driveway-concrete-cleaning','Parking pads and sidewalks.'],
      ['faDroplet','Gutter Cleaning','/services/gutter-cleaning','Multi-unit gutter programs.'],
      ['faTree','Deck & Fence','/services/deck-fence-cleaning','Amenity decks and common-area fencing.'],
    ],
    cta: 'Need a Commercial Cleaning Partner?',
    formTitle: 'Request Commercial Quote',
  },
];

const CITIES = [
  { slug: 'waco-tx', name: 'Waco', county: 'McLennan County', blurb: 'home base with the fastest scheduling in the city' },
  { slug: 'temple-tx', name: 'Temple', county: 'Bell County', blurb: 'full residential and commercial coverage across Temple' },
  { slug: 'killeen-tx', name: 'Killeen', county: 'Bell County', blurb: 'serving Killeen and Fort Cavazos area properties' },
];

function pascal(slug) {
  return slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('');
}

function mainPage(s) {
  const exp = s.expectations.map(([icon,t,d]) =>
    `    { icon: ${icon}, title: "${t}", description: "${d}" },`).join('\n');
  const why = s.why.map(([icon,t,d]) =>
    `    { icon: ${icon}, title: "${t}", description: "${d}" },`).join('\n');
  const proc = s.process.map((p,i) => {
    const icon = i===0?'faHeadset':i===1?'faSearch':i===2?'faFileContract':'faCheckCircle';
    return `    { number: ${i+1}, title: "${p[0]}", description: "${p[1]}", icon: ${icon} },`;
  }).join('\n');
  const metrics = `    { icon: faTrophy, value: ${s.metrics[0][0]}, label: "${s.metrics[0][1]}", suffix: "+", duration: 3 },
    { icon: faChartLine, value: ${s.metrics[1][0]}, label: "${s.metrics[1][1]}", suffix: "%", duration: 2 },
    { icon: faClock, value: ${s.metrics[2][0]}, label: "${s.metrics[2][1]}", suffix: "+", duration: 2 },`;
  const faq = s.faq.map(([q,a]) =>
    `    { question: "${q}", answer: "${a}" },`).join('\n');
  const cross = s.cross.map(([icon,t,link,body]) =>
    `    { icon: ${icon}, title: "${t}", body: "${body}", link: "${link}" },`).join('\n');

  return `// AquaBlast Pressure Washing — ${s.title} Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  ${s.iconsImport},
} from "@fortawesome/free-solid-svg-icons";

export default function ${pascal(s.slug)}Page() {

  const expectations = [
${exp}
  ];

  const whyFeatures = [
${why}
  ];

  const processSteps = [
${proc}
  ];

  const metrics = [
${metrics}
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available crews.", badge: "Fastest Response" },
    { town: "Hewitt", benefit: "Full ${s.short.toLowerCase()} coverage throughout Hewitt.", badge: "" },
    { town: "Woodway", benefit: "Same-week service for Woodway neighborhoods.", badge: "" },
    { town: "Robinson", benefit: "On our regular route — quick turnaround guaranteed.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for same-day availability.", badge: "" },
    { town: "Temple", benefit: "Full coverage for Bell County homes and businesses.", badge: "" },
    { town: "Killeen", benefit: "Killeen and Fort Cavazos area service available.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before work starts", us: true, others: false },
    { feature: "Free re-clean if you're not happy", us: true, others: false },
    { feature: "Licensed, bonded & insured crews", us: true, others: true },
    { feature: "Eco-friendly soft-wash options", us: true, others: "Sometimes" },
    { feature: "Same-day service available", us: true, others: "Sometimes" },
  ];

  const faq = [
${faq}
  ];

  const crossServices = [
${cross}
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "${s.title}" },
      ]} />

      <SectionIntro
        title="${s.title} in Waco, TX"
        subtitle="${s.intro}"
      />

      <TrustBar headline="2,400+ Central Texas properties trust AquaBlast for exterior cleaning" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Book ${s.title}" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls AquaBlast First" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/${s.slug}" title="${s.title} Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="${s.title} FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="${s.cta}"
        subline="Same-day service available. Flat-rate pricing, free re-clean guarantee, licensed & bonded crews."
        primaryText="Call Us Now"
        primaryLink="tel:+12549008842"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4
          title="${s.formTitle}"
          cityName="Waco"
          slug="services/${s.slug}"
          spot="${s.slug}-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
`;
}

function layoutMain(s) {
  const kws = s.keywords.map(k => `    "${k}",`).join('\n');
  return `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '${BASE}';
const url = \`\${BASE_URL}/services/${s.slug}\`;

export const metadata: Metadata = {
  title: "${s.title} Waco TX | Soft Wash & Pressure Washing | AquaBlast",
  description: "${s.metaDesc}",
  keywords: [
${kws}
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "${s.title} Waco TX | AquaBlast Pressure Washing",
    description: "${s.metaDesc}",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "${s.title} Waco TX | AquaBlast",
    description: "${s.metaDesc}",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "${s.title}",
  description: "${s.metaDesc}",
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
  serviceType: "${s.title}",
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
`;
}

function cityPage(s, city) {
  return `// AquaBlast — ${s.title} in ${city.name}, TX
"use client";

import styles from "../../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb           from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro         from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar             from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect         from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs          from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline      from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics        from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials         from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection     from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import FAQ                  from "#/PageComponents/FAQ/FAQ";
import CTABanner            from "#/PageComponents/CTABanner/CTABanner";
import Variant4             from "#/PageComponents/ContactForms/Variant4/Form";

import {
  ${s.iconsImport},
} from "@fortawesome/free-solid-svg-icons";

export default function ${city.name.replace(/\s/g,'')}${pascal(s.slug)}Page() {

  const whyFeatures = [
    { icon: faClock, title: "Local ${city.name} Crews", description: "AquaBlast provides ${s.title.toLowerCase()} with ${city.blurb}. Flat-rate pricing and free re-clean guarantee on every job." },
    { icon: ${s.icon}, title: "${s.title} Specialists", description: "${s.intro}" },
    { icon: faShieldHalved, title: "Licensed, Bonded & Insured", description: "Every technician is trained and fully insured. Your ${city.name} property is protected from first spray to final rinse." },
  ];

  const expectations = [
    { icon: faSearch, title: "On-Site Assessment", description: "We walk your ${city.name} property, note surface types, and explain the best cleaning approach in plain English." },
    { icon: faFileContract, title: "Flat-Rate Quote First", description: "Written price before we start. It does not change mid-job." },
    { icon: faCheckCircle, title: "Professional Results", description: "Right pressure and eco-friendly solutions for each surface — then a walkthrough with you." },
    { icon: faShieldHalved, title: "Free Re-Clean Guarantee", description: "Not happy? We return and re-clean at no charge." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or online. Serving ${city.name} and ${city.county}.", icon: faHeadset },
    { number: 2, title: "Assessment", description: "Crew lead inspects surfaces and problem areas on site.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before work begins — zero pressure.", icon: faFileContract },
    { number: 4, title: "Clean & Guarantee", description: "Professional clean, walkthrough, free re-clean if needed.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: ${s.metrics[0][0]}, label: "${s.metrics[0][1]}", suffix: "+", duration: 2 },
    { icon: faChartLine, value: ${s.metrics[1][0]}, label: "${s.metrics[1][1]}", suffix: "%", duration: 2 },
    { icon: faClock, value: ${s.metrics[2][0]}, label: "${s.metrics[2][1]}", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "Do you offer ${s.title.toLowerCase()} in ${city.name}?", answer: "Yes — AquaBlast regularly serves ${city.name} and ${city.county} with the same flat-rate pricing and free re-clean guarantee as our Waco jobs." },
    { question: "How soon can you come to ${city.name}?", answer: "Most ${city.name} jobs can be estimated within a few days and cleaned within the week. Same-day service is often available — call (254) 900-8842 to confirm." },
    { question: "Is pricing the same as Waco?", answer: "Yes. Flat-rate written pricing applies across every city we serve, including ${city.name}." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "${s.title}", href: "/services/${s.slug}" },
        { label: "${city.name}, TX" },
      ]} />

      <SectionIntro
        title="${s.title} in ${city.name}, TX"
        subtitle="${s.intro} Serving ${city.name} and ${city.county} with flat-rate pricing and a free re-clean guarantee."
      />

      <TrustBar headline="Trusted ${s.title.toLowerCase()} for ${city.name} homes and businesses" />

      <div className={styles.section}>
        <WhyChooseUs cityName="${city.name}" features={whyFeatures} title={\`Why ${city.name} Chooses AquaBlast\`} />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle={\`${s.title} in ${city.name} — What to Expect\`} expectations={expectations} />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="${city.name}" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="${city.name}" faq={faq} title={\`${s.title} in ${city.name} — FAQs\`} />
      </div>

      <CTABanner
        headline={\`${s.title} in ${city.name} — Book Today\`}
        subline="Flat-rate pricing. Free re-clean guarantee. Licensed, bonded & insured crews."
        primaryText="Call (254) 900-8842"
        primaryLink="tel:+12549008842"
        secondaryText="Free Estimate"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4
          title={\`${s.formTitle} — ${city.name}\`}
          cityName="${city.name}"
          slug={\`services/${s.slug}/${city.slug}\`}
          spot={\`${s.slug}-${city.slug}-form\`}
          formVariant={2}
        />
      </div>
    </main>
  );
}
`;
}

function cityLayout(s, city) {
  return `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '${BASE}';
const url = \`\${BASE_URL}/services/${s.slug}/${city.slug}\`;

export const metadata: Metadata = {
  title: "${s.title} ${city.name} TX | AquaBlast Pressure Washing",
  description: "Professional ${s.title.toLowerCase()} in ${city.name}, TX. ${s.intro} Call (254) 900-8842 for a free estimate.",
  keywords: [
    "${s.title.toLowerCase()} ${city.name} TX",
    "pressure washing ${city.name}",
    "soft wash ${city.name} Texas",
    "AquaBlast ${city.name}",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "${s.title} ${city.name} TX | AquaBlast",
    description: "${s.title} for ${city.name} homes and businesses. Flat-rate pricing, free re-clean guarantee.",
    url,
    siteName: "AquaBlast Pressure Washing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "${s.title} ${city.name} TX | AquaBlast",
    description: "Professional ${s.title.toLowerCase()} in ${city.name}. Free estimates — (254) 900-8842.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
}

const OLD = ['ac-repair','duct-cleaning','heating','indoor-air-quality','installation','maintenance'];
for (const o of OLD) {
  const p = path.join(ROOT, o);
  if (fs.existsSync(p)) {
    fs.rmSync(p, { recursive: true, force: true });
    console.log('removed', o);
  }
}

for (const s of SERVICES) {
  const dir = path.join(ROOT, s.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), mainPage(s));
  fs.writeFileSync(path.join(dir, 'layout.tsx'), layoutMain(s));
  for (const city of CITIES) {
    const cdir = path.join(dir, city.slug);
    fs.mkdirSync(cdir, { recursive: true });
    fs.writeFileSync(path.join(cdir, 'page.tsx'), cityPage(s, city));
    fs.writeFileSync(path.join(cdir, 'layout.tsx'), cityLayout(s, city));
  }
  console.log('created', s.slug);
}
console.log('done');
