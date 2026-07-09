// AquaBlast Pressure Washing — Homepage
// Phase 2: Reshuffled component order + fresh content
// Original order: WelcomePage → TrustBar → ServiceCards → WhatToExpect → WhyChooseUs
//                 → ProcessTimeline → ImpactMetrics → Testimonials → GuaranteeSection
//                 → LocalServiceAreas → FAQ → CTABanner → BlogPreview → Form
//
// New order:      WelcomePage → TrustBar → ImpactMetrics → ServiceCards
//                 → WhyChooseUs → CTABanner (mid) → ProcessTimeline → Testimonials
//                 → GuaranteeSection → LocalServiceAreas → WhatToExpect → FAQ
//                 → BlogPreview → Form
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faHouseChimney, faSprayCanSparkles, faRoad, faDroplet, faTree, faWarehouse,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faLeaf, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faFileAlt, faRotateLeft, faLock, faStar, faBroom,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  // ── Services ────────────────────────────────────────────────────────────────
  const services = [
    {
      icon: faHouseChimney,
      title: "House Washing",
      body: "Low-pressure soft wash that lifts mold, mildew, and dirt without damaging siding, paint, or landscaping. Your home looks brand-new again.",
      link: "/services/house-washing",
      image: "/pages/home/services/house-wash.jpg",
    },
    {
      icon: faSprayCanSparkles,
      title: "Roof Cleaning",
      body: "Soft-wash roof cleaning that kills black algae streaks and moss at the root — safe for asphalt shingles, tile, and metal roofs.",
      link: "/services/roof-cleaning",
      image: "/pages/home/services/roof.jpg",
    },
    {
      icon: faRoad,
      title: "Driveway & Concrete",
      body: "High-pressure cleaning for driveways, sidewalks, patios, and parking pads. Oil stains, tire marks, and mildew — gone.",
      link: "/services/driveway-concrete-cleaning",
      image: "/pages/home/services/driveway.jpg",
    },
    {
      icon: faDroplet,
      title: "Gutter Cleaning",
      body: "Full gutter and downspout clearing so water flows free. Prevents overflow damage, foundation issues, and mosquito breeding grounds.",
      link: "/services/gutter-cleaning",
      image: "/pages/home/services/gutter.jpg",
    },
    {
      icon: faTree,
      title: "Deck & Fence Cleaning",
      body: "Restore weathered wood, composite, and vinyl fences and decks. Safe cleaning that prepares surfaces for sealing or staining.",
      link: "/services/deck-fence-cleaning",
      image: "/pages/home/services/deck.jpg",
    },
    {
      icon: faWarehouse,
      title: "Commercial Pressure Washing",
      body: "Storefronts, parking lots, HOAs, restaurants, and multi-unit properties. Flexible scheduling that won't interrupt your business.",
      link: "/services/commercial-pressure-washing",
      image: "/pages/home/services/commercial.jpg",
    },
  ];

  // ── Impact metrics (moved up — builds trust before selling) ─────────────────
  const metrics = [
    { icon: faTrophy,    value: 2400, label: "Homes and businesses cleaned in Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 10,   label: "Years of local exterior cleaning experience",  suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",                  suffix: "%", duration: 2 },
  ];

  // ── Why Choose Us (3 differentiators) ───────────────────────────────────────
  const whyFeatures = [
    {
      icon: faLeaf,
      title: "Eco-Friendly Soft Wash",
      description: "Delicate surfaces get low-pressure soft wash with plant- and pet-safe solutions. We never blast paint, shingles, or landscaping just to finish faster.",
    },
    {
      icon: faShieldHalved,
      title: "Licensed, Bonded & Insured",
      description: "Every AquaBlast crew is fully licensed, bonded, and insured. Your property is protected from the first spray to the final walkthrough — no exceptions.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2015",
      description: "We're not a franchise. AquaBlast was founded in Waco by Cody Marsh, a Central Texas native. Every decision is made locally, and every call is answered by someone who lives here.",
    },
  ];

  // ── How it works (process) ───────────────────────────────────────────────────
  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a same-day or next-day visit that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "On-Site Assessment",
      description: "We walk the property, note surface types and problem areas, and explain exactly what needs cleaning — in plain English.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before we touch anything. You decide — zero pressure to proceed. The quote covers labor and materials, and it never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Spotless Results, Guaranteed",
      description: "Professional equipment, careful technique, free re-clean if you're not happy. We leave when you're satisfied — not when we feel like it.",
      icon: faCheckCircle,
    },
  ];

  // ── What to expect ───────────────────────────────────────────────────────────
  const expectations = [
    {
      icon: faSearch,
      title: "Honest Property Assessment",
      description: "We diagnose what's actually dirty and how best to clean it — soft wash vs pressure wash — not what's most profitable to sell.",
    },
    {
      icon: faBroom,
      title: "Clean, Respectful Crews",
      description: "Landscaping protected, windows rinsed, work area left neat. Every single visit ends with a walkthrough.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any work starts. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Satisfaction or Free Re-Clean",
      description: "If you're not happy with the results, we come back and re-clean at no charge. Real guarantee, not fine print.",
    },
  ];

  // ── Service areas ────────────────────────────────────────────────────────────
  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest dispatch and most available crews in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage. On our regular route.",     badge: "" },
    { town: "Woodway",      benefit: "Same-day availability for Woodway homes and businesses.",             badge: "" },
    { town: "Robinson",     benefit: "Regular service area — quick turnaround guaranteed.",                 badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",     badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",          badge: "" },
    { town: "Temple",       benefit: "Regular commercial and residential routes across Temple.",            badge: "" },
  ];

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  const faq = [
    {
      question: "How much does pressure washing cost in Waco?",
      answer: "Most residential house washes run $250–$550 depending on size and soil level. Driveways typically run $150–$350. We always provide a flat-rate written quote before starting — no surprises.",
    },
    {
      question: "Is soft washing safer than pressure washing?",
      answer: "Yes for siding, roofs, and painted surfaces. Soft wash uses low pressure and specialized cleaners to kill mold and algae at the root without damaging materials. We use high pressure only on concrete and durable hardscape.",
    },
    {
      question: "How quickly can you come out?",
      answer: "Same-day service is available most days. We'll give you an honest ETA when you call — not a vague 4-hour window. Call us anytime at (254) 900-8842.",
    },
    {
      question: "Are your cleaning solutions safe for plants and pets?",
      answer: "Yes. We use eco-friendly, biodegradable solutions and pre-wet / rinse landscaping as needed. Pets can return to cleaned areas once surfaces are dry.",
    },
    {
      question: "Are you licensed and insured in Texas?",
      answer: "Yes — fully licensed, bonded, and insured. Documentation available on request. Every crew that steps on your property is covered.",
    },
    {
      question: "What if I'm not happy with the results?",
      answer: "We'll re-clean at no charge. Our 100% satisfaction guarantee means free re-clean if you're not happy — no hoops, no fine print.",
    },
  ];

  // Transformation-first: services + CTA early (before/after trade)
  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Waco's trusted pressure washing company — licensed, bonded, insured, and guaranteed on every job"
      />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Exterior Cleaning for Your Home or Business"
          cards={services}
        />
      </div>
      <CTABanner
        headline="Ready for a Cleaner Exterior?"
        subline="Houses, driveways, decks, and commercial fronts — soft wash where paint needs care, power where concrete needs bite."
        primaryText="Call (254) 900-8842"
        primaryLink="tel:+12549008842"
        secondaryText="Free Estimate"
        secondaryLink="/contact"
        imageSrc="/pages/home/welcome/ba-after.jpg"
       />
      <div className={styles.section}>
        <ImpactMetrics title="Numbers That Speak for Us" metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="What Makes AquaBlast Different" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Serving All of Central Texas" />
      </div>
      <div className={styles.section}>
        <WhatToExpect sectionTitle="Every Job, Every Time" expectations={expectations} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Pressure Washing Questions — Answered Straight" />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request a Free Estimate" cityName="Waco" slug="/" spot="homepage-contact-form" formVariant={2} />
      </div>
    </main>
  );
}
