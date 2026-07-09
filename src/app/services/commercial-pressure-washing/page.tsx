// AquaBlast Pressure Washing — Commercial Pressure Washing Service Page
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
  faWarehouse, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock, faTrophy, faChartLine, faHouseChimney, faRoad, faDroplet, faTree,
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialPressureWashingPage() {

  const expectations = [
    { icon: faSearch, title: "Site Walk & Scope", description: "We document surfaces, access, hours, and COI requirements before quoting." },
    { icon: faFileContract, title: "Written Scope & Price", description: "Clear scope of work — recurring programs available for property managers." },
    { icon: faCheckCircle, title: "Off-Hours Friendly", description: "Nights and weekends available to avoid disrupting customers and tenants." },
    { icon: faShieldHalved, title: "Fully Insured", description: "Certificates of insurance provided for property managers and GCs." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Flexible Scheduling", description: "We work around your busiest hours and HOA quiet times." },
    { icon: faWarehouse, title: "Multi-Surface Capability", description: "Concrete, brick, dumpster pads, canopies, and building exteriors." },
    { icon: faShieldHalved, title: "Reliable Recurring Service", description: "Monthly or quarterly programs with consistent crews and pricing." },
  ];

  const processSteps = [
    { number: 1, title: "Site Assessment", description: "Walk the property, note problem areas and access.", icon: faHeadset },
    { number: 2, title: "Proposal", description: "Written scope, schedule options, and flat-rate pricing.", icon: faSearch },
    { number: 3, title: "Scheduled Clean", description: "Crew arrives on time, works the agreed plan, minimizes disruption.", icon: faFileContract },
    { number: 4, title: "Sign-Off", description: "Walkthrough with PM or owner; photos available on request.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 400, label: "Commercial properties maintained", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Client retention satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 10, label: "Years serving Central Texas businesses", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available crews.", badge: "Fastest Response" },
    { town: "Hewitt", benefit: "Full commercial coverage throughout Hewitt.", badge: "" },
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
    { question: "Do you provide certificates of insurance?", answer: "Yes — COIs for property managers, HOAs, and general contractors are available on request." },
    { question: "Can you work after hours?", answer: "Yes. Nights and weekends are common for restaurants, retail, and multi-family properties." },
    { question: "Do you offer recurring contracts?", answer: "Yes — monthly or quarterly exterior maintenance programs with locked-in pricing." },
    { question: "What commercial surfaces do you clean?", answer: "Parking lots, sidewalks, dumpster pads, storefronts, building exteriors, loading docks, and amenity areas." },
  ];

  const crossServices = [
    { icon: faHouseChimney, title: "House Washing", body: "Residential soft wash for multi-family units.", link: "/services/house-washing" },
    { icon: faRoad, title: "Driveway & Concrete", body: "Parking pads and sidewalks.", link: "/services/driveway-concrete-cleaning" },
    { icon: faDroplet, title: "Gutter Cleaning", body: "Multi-unit gutter programs.", link: "/services/gutter-cleaning" },
    { icon: faTree, title: "Deck & Fence", body: "Amenity decks and common-area fencing.", link: "/services/deck-fence-cleaning" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Commercial Pressure Washing" },
      ]} />

      <SectionIntro
        title="Commercial Pressure Washing in Waco, TX"
        subtitle="Storefronts, parking lots, HOAs, restaurants, and multi-unit properties cleaned on flexible schedules that will not interrupt your business."
      />

      <TrustBar headline="2,400+ Central Texas properties trust AquaBlast for exterior cleaning" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Book Commercial Pressure Washing" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/commercial-pressure-washing" title="Commercial Pressure Washing Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Commercial Pressure Washing FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Need a Commercial Cleaning Partner?"
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
          title="Request Commercial Quote"
          cityName="Waco"
          slug="services/commercial-pressure-washing"
          spot="commercial-pressure-washing-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
