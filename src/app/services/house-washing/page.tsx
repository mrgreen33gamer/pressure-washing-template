// AquaBlast Pressure Washing — House Washing Service Page
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
  faHouseChimney, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock, faTrophy, faChartLine, faSprayCanSparkles, faRoad, faDroplet, faTree,
} from "@fortawesome/free-solid-svg-icons";

export default function HouseWashingPage() {

  const expectations = [
    { icon: faSearch, title: "Surface Assessment", description: "We identify siding type, soil level, and problem areas — soft wash vs light pressure chosen per surface." },
    { icon: faFileContract, title: "Flat-Rate Quote First", description: "Written price before any work starts. It never changes mid-job." },
    { icon: faCheckCircle, title: "Plant-Safe Soft Wash", description: "Eco-friendly solutions pre-wet and protect landscaping while killing mold and mildew at the root." },
    { icon: faShieldHalved, title: "Free Re-Clean Guarantee", description: "Not happy with the results? We come back and re-clean at no charge." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Same-Day Availability", description: "Most residential house washes can be scheduled same week — often same day when you call early." },
    { icon: faHouseChimney, title: "All Siding Types", description: "Vinyl, fiber cement, brick, stucco, wood, and painted surfaces — right technique for each." },
    { icon: faShieldHalved, title: "Licensed, Bonded & Insured", description: "Every crew is fully covered. Your home is protected from first spray to final rinse." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or online. We confirm a time that fits your schedule.", icon: faHeadset },
    { number: 2, title: "Walk the Property", description: "Crew lead notes siding type, soil, and landscaping protection needs.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before we start. You approve — zero pressure.", icon: faFileContract },
    { number: 4, title: "Soft Wash & Walkthrough", description: "Clean, rinse, and walk the property with you before we leave.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 2400, label: "Houses soft-washed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 10, label: "Years serving Waco-area homeowners", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available crews.", badge: "Fastest Response" },
    { town: "Hewitt", benefit: "Full house wash coverage throughout Hewitt.", badge: "" },
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
    { question: "How much does house washing cost in Waco?", answer: "Most residential house washes run $250–$550 depending on size, stories, and soil level. We always provide a flat-rate written quote before starting." },
    { question: "Is soft washing safer than pressure washing for siding?", answer: "Yes. Soft wash uses low pressure and specialized cleaners that kill mold and algae without driving water behind siding or stripping paint." },
    { question: "Will it hurt my plants?", answer: "We pre-wet landscaping, use plant-safe solutions, and rinse thoroughly. Pets can return once surfaces are dry." },
    { question: "How long does a house wash take?", answer: "Most single-story homes finish in 2–4 hours. Two-story homes typically take a half day." },
    { question: "How often should I soft wash my house?", answer: "Most Central Texas homes benefit from a soft wash every 12–24 months depending on shade, trees, and humidity." },
  ];

  const crossServices = [
    { icon: faSprayCanSparkles, title: "Roof Cleaning", body: "Soft-wash roof cleaning that kills black algae streaks safely.", link: "/services/roof-cleaning" },
    { icon: faRoad, title: "Driveway & Concrete", body: "Oil stains, mildew, and tire marks removed from hardscape.", link: "/services/driveway-concrete-cleaning" },
    { icon: faDroplet, title: "Gutter Cleaning", body: "Clear gutters and downspouts so water flows free.", link: "/services/gutter-cleaning" },
    { icon: faTree, title: "Deck & Fence", body: "Restore weathered wood, composite, and vinyl surfaces.", link: "/services/deck-fence-cleaning" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "House Washing" },
      ]} />

      <SectionIntro
        title="House Washing in Waco, TX"
        subtitle="Low-pressure soft wash that lifts mold, mildew, pollen, and dirt without damaging siding, paint, or landscaping."
      />

      <TrustBar headline="2,400+ Central Texas properties trust AquaBlast for exterior cleaning" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Book House Washing" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/house-washing" title="House Washing Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="House Washing FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Ready for a Spotless Exterior?"
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
          title="Schedule Your House Wash"
          cityName="Waco"
          slug="services/house-washing"
          spot="house-washing-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
