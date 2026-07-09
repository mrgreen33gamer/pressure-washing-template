// AquaBlast Pressure Washing — Deck & Fence Cleaning Service Page
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
  faTree, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock, faTrophy, faChartLine, faHouseChimney, faRoad, faDroplet, faWarehouse,
} from "@fortawesome/free-solid-svg-icons";

export default function DeckFenceCleaningPage() {

  const expectations = [
    { icon: faSearch, title: "Material-Matched Method", description: "Wood, composite, and vinyl each get the right pressure and chemistry." },
    { icon: faFileContract, title: "Prep for Seal or Stain", description: "We clean so coatings bond correctly — ask about timing before sealing." },
    { icon: faCheckCircle, title: "Gray Weathering Lifted", description: "Remove mildew, dirt, and UV graying without shredding wood fibers." },
    { icon: faShieldHalved, title: "Yard Protected", description: "Nearby landscaping rinsed and protected throughout the job." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Weekend-Ready Scheduling", description: "Most decks and fences finish in a few hours — enjoy them the same weekend." },
    { icon: faTree, title: "Wood Care Expertise", description: "We know when to soft wash vs pressure wash so you do not fuzzy softwoods." },
    { icon: faShieldHalved, title: "Satisfaction Guaranteed", description: "Free re-clean if results do not meet expectations." },
  ];

  const processSteps = [
    { number: 1, title: "Estimate", description: "We note material, age, and condition — cleaning only or prep for coat.", icon: faHeadset },
    { number: 2, title: "Protect Area", description: "Furniture moved, plants protected, neighbors notified if fence-shared.", icon: faSearch },
    { number: 3, title: "Clean", description: "Even cleaning passes with appropriate pressure and detergents.", icon: faFileContract },
    { number: 4, title: "Dry & Advise", description: "We recommend dry time before sealing and aftercare tips.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 1100, label: "Decks and fences restored", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 10, label: "Years of local experience", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available crews.", badge: "Fastest Response" },
    { town: "Hewitt", benefit: "Full deck & fence coverage throughout Hewitt.", badge: "" },
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
    { question: "How much does deck cleaning cost in Waco?", answer: "Most residential decks run $150–$400. Full fence lines vary by linear feet — typically $2–$4 per foot depending on height and access." },
    { question: "Can you clean composite decking?", answer: "Yes. Composite needs gentler chemistry and pressure than raw wood — we adjust methods to avoid surface damage." },
    { question: "Should I seal after cleaning?", answer: "For wood decks and fences, sealing 24–72 hours after cleaning (when fully dry) dramatically extends life. We can recommend products and timing." },
    { question: "Will pressure washing splinter my wood?", answer: "High pressure can fuzzy softwoods. We use controlled pressure and detergents to clean without shredding fibers." },
  ];

  const crossServices = [
    { icon: faHouseChimney, title: "House Washing", body: "Clean the whole exterior in one visit.", link: "/services/house-washing" },
    { icon: faRoad, title: "Driveway & Concrete", body: "Patios and walkways cleaned to match.", link: "/services/driveway-concrete-cleaning" },
    { icon: faDroplet, title: "Gutter Cleaning", body: "Keep water off decks and fence lines.", link: "/services/gutter-cleaning" },
    { icon: faWarehouse, title: "Commercial", body: "HOA fence lines and amenity decks.", link: "/services/commercial-pressure-washing" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Deck & Fence Cleaning" },
      ]} />

      <SectionIntro
        title="Deck & Fence Cleaning in Waco, TX"
        subtitle="Restore weathered wood, composite, and vinyl fences and decks with surface-safe cleaning that prepares for sealing or staining."
      />

      <TrustBar headline="2,400+ Central Texas properties trust AquaBlast for exterior cleaning" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Book Deck & Fence Cleaning" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/deck-fence-cleaning" title="Deck & Fence Cleaning Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Deck & Fence Cleaning FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Deck Looking Weathered?"
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
          title="Schedule Deck & Fence Cleaning"
          cityName="Waco"
          slug="services/deck-fence-cleaning"
          spot="deck-fence-cleaning-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
