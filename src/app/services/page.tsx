// AquaBlast Pressure Washing — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faHouseChimney, faSprayCanSparkles, faRoad, faDroplet, faTree, faWarehouse,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faShieldHalved, faLock, faRotateLeft, faLeaf,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faHouseChimney,     title: "House Washing",              body: "Low-pressure soft wash that lifts mold, mildew, and dirt without damaging siding, paint, or landscaping.", link: "/services/house-washing" },
    { icon: faSprayCanSparkles, title: "Roof Cleaning",              body: "Soft-wash roof cleaning that kills black algae streaks and moss — safe for asphalt, tile, and metal.", link: "/services/roof-cleaning" },
    { icon: faRoad,             title: "Driveway & Concrete",        body: "High-pressure cleaning for driveways, sidewalks, and patios. Oil stains, tire marks, and mildew — gone.", link: "/services/driveway-concrete-cleaning" },
    { icon: faDroplet,          title: "Gutter Cleaning",            body: "Full gutter and downspout clearing so water flows free and foundations stay protected.", link: "/services/gutter-cleaning" },
    { icon: faTree,             title: "Deck & Fence Cleaning",      body: "Restore weathered wood, composite, and vinyl fences and decks — prep-ready for seal or stain.", link: "/services/deck-fence-cleaning" },
    { icon: faWarehouse,        title: "Commercial Pressure Washing", body: "Storefronts, parking lots, HOAs, and restaurants on flexible schedules that won't interrupt business.", link: "/services/commercial-pressure-washing" },
  ];

  const expectations = [
    { icon: faSearch,       title: "Free On-Site Estimate",        description: "We inspect your property and explain exactly what needs cleaning with a flat-rate price before anything is touched." },
    { icon: faCheckCircle,  title: "Upfront Flat-Rate Pricing",    description: "No hourly billing, no surprise fees. You approve the price before we start — and it never changes mid-job." },
    { icon: faShieldHalved, title: "Licensed, Bonded & Insured",   description: "Every crew is fully covered. You know exactly who is coming to your property." },
    { icon: faLeaf,         title: "Eco-Friendly Soft Wash",       description: "Plant- and pet-safe solutions on delicate surfaces. High pressure reserved for durable concrete." },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2400, label: "Homes and businesses cleaned since 2015", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",             suffix: "%", duration: 2 },
    { icon: faClock,     value: 10,   label: "Years serving Waco and Central Texas",     suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faLeaf,          title: "Soft Wash + Pressure Wash Expertise", description: "We match the method to the surface. Soft wash for siding and roofs; high pressure for concrete — never the wrong tool for the job." },
    { icon: faHeadset,       title: "No Contracts, Ever",                  description: "You hire us because we do great work — not because you're locked into a multi-year package." },
    { icon: faShieldHalved,  title: "Free Re-Clean Guarantee",             description: "Not happy with the results? We come back and re-clean at no charge. Real guarantee, not fine print." },
  ];

  const processSteps = [
    { number: 1, title: "Schedule",  description: "Call, text, or book online. We'll confirm a time that fits your schedule — usually same week.", icon: faHeadset },
    { number: 2, title: "Assess",    description: "Crew lead walks the property, notes surfaces, and explains the plan clearly — no pressure.",   icon: faSearch },
    { number: 3, title: "Quote",     description: "Flat-rate written quote before any work starts. No surprises, no hidden fees.",                  icon: faFileContract },
    { number: 4, title: "Clean",     description: "Completed carefully, site left neat, backed by our free re-clean satisfaction guarantee.",      icon: faCheckCircle },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — best availability and fastest response in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial service coverage.",                badge: "" },
    { town: "Woodway",      benefit: "Same-week availability for Woodway-area homes.",                   badge: "" },
    { town: "Robinson",     benefit: "Regular route — quick turnaround for Robinson customers.",        badge: "" },
    { town: "China Spring", benefit: "Rural coverage with no trip charge for most locations.",          badge: "" },
    { town: "Temple",       benefit: "Full service coverage for Bell County homes and businesses.",     badge: "" },
    { town: "Killeen",      benefit: "Killeen and Fort Cavazos area service available.",                badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate upfront pricing",       us: true, others: false },
    { feature: "Free re-clean guarantee",         us: true, others: false },
    { feature: "Licensed, bonded & insured",      us: true, others: true },
    { feature: "No service contracts required",   us: true, others: false },
    { feature: "Same-day service available",      us: true, others: "Sometimes" },
  ];

  const faq = [
    { question: "How much does pressure washing cost in Waco?", answer: "House washes typically run $250–$550. Driveways run $150–$350. Roof soft washes run $350–$900. We always provide a flat-rate written quote before any work begins." },
    { question: "Do you soft wash or pressure wash?", answer: "Both. Soft wash for siding, roofs, and delicate surfaces. High pressure for concrete, brick, and durable hardscape. We choose the method that cleans without damage." },
    { question: "Are your solutions safe for plants and pets?", answer: "Yes — eco-friendly, biodegradable solutions with landscaping pre-wet and rinse. Pets can return once surfaces are dry." },
    { question: "Are you available for same-day service?", answer: "Yes — same-day is available most days. Call (254) 900-8842 and we'll give you an honest ETA." },
    { question: "What areas do you serve?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Robinson, China Spring, and most of Central Texas within about 60 miles of Waco." },
  ];

  return (
    <>
      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services" },
      ]} />

      <SectionIntro
        title="Pressure Washing Services for Waco & Central Texas"
        subtitle="House washing, roof cleaning, driveways, gutters, decks, and commercial — done right, priced fairly, backed by a free re-clean guarantee."
      />

      <TrustBar headline="Trusted by 2,400+ Central Texas homes and businesses since 2015" />

      <div className={styles.section}>
        <ServiceCardComponent heading="What We Do" cards={services} />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect on Every Job" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Chooses AquaBlast" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Serving All of Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Pressure Washing FAQs" />
      </div>

      <CTABanner
        headline="Ready for a Spotless Exterior?"
        subline="Same-day service available. Flat-rate pricing. Free re-clean guarantee."
        primaryText="Call (254) 900-8842"
        primaryLink="tel:+12549008842"
        secondaryText="Free Estimate"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4
          title="Request a Free Estimate"
          cityName="Waco"
          slug="services"
          spot="services-index-form"
          formVariant={2}
        />
      </div>
    </>
  );
}
