// AquaBlast Pressure Washing — Gutter Cleaning Service Page
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
  faDroplet, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock, faTrophy, faChartLine, faHouseChimney, faRoad, faTree, faWarehouse, faSprayCanSparkles,
} from "@fortawesome/free-solid-svg-icons";

export default function GutterCleaningPage() {

  const expectations = [
    { icon: faSearch, title: "Full Gutter Inspection", description: "We check every run and downspout for clogs, loose hangers, and overflow damage." },
    { icon: faFileContract, title: "Flat-Rate Quote First", description: "Written price before we climb a ladder. No surprise add-ons mid-job." },
    { icon: faCheckCircle, title: "Flush & Flow Test", description: "Debris removed, downspouts flushed, and water flow verified before we leave." },
    { icon: faShieldHalved, title: "Property Protected", description: "Landscaping and siding protected during cleaning. Mess hauled away — not left in your beds." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Fast Scheduling", description: "Most gutter cleans book within the week — critical before storm season." },
    { icon: faDroplet, title: "Complete Downspout Service", description: "We do not just scoop the troughs — we clear and flush every downspout." },
    { icon: faShieldHalved, title: "Licensed & Insured", description: "Crews are bonded and insured for ladder work on multi-story homes." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Tell us home height, gutter type, and access concerns.", icon: faHeadset },
    { number: 2, title: "On-Site Check", description: "We inspect runs, downspouts, and fascia for damage.", icon: faSearch },
    { number: 3, title: "Clear & Flush", description: "Debris removed, lines flushed, flow verified.", icon: faFileContract },
    { number: 4, title: "Walkthrough", description: "We show you what we found and haul debris away.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 1800, label: "Gutter systems cleaned", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 10, label: "Years of local experience", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available crews.", badge: "Fastest Response" },
    { town: "Hewitt", benefit: "Full gutter clean coverage throughout Hewitt.", badge: "" },
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
    { question: "How much does gutter cleaning cost in Waco?", answer: "Most single-story homes run $125–$250. Two-story homes typically $200–$400 depending on linear feet and access." },
    { question: "How often should gutters be cleaned?", answer: "Twice a year is ideal in Central Texas — once after spring pollen and once after fall leaf drop." },
    { question: "Do you clean gutter guards?", answer: "Yes. We service most screen and micro-mesh systems and can advise if guards need repair or replacement." },
    { question: "Can clogged gutters damage my foundation?", answer: "Yes. Overflowing gutters dump water next to the foundation, which can cause settling, basement moisture, and landscape erosion." },
  ];

  const crossServices = [
    { icon: faHouseChimney, title: "House Washing", body: "Soft-wash your siding while we are already on site.", link: "/services/house-washing" },
    { icon: faSprayCanSparkles, title: "Roof Cleaning", body: "Clear algae and moss that feeds gutter debris.", link: "/services/roof-cleaning" },
    { icon: faRoad, title: "Driveway & Concrete", body: "Clean the splash zones under overloaded gutters.", link: "/services/driveway-concrete-cleaning" },
    { icon: faWarehouse, title: "Commercial", body: "Multi-unit and commercial gutter programs available.", link: "/services/commercial-pressure-washing" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Gutter Cleaning" },
      ]} />

      <SectionIntro
        title="Gutter Cleaning in Waco, TX"
        subtitle="Full gutter and downspout clearing so water flows free — preventing overflow damage, foundation issues, and mosquito breeding grounds."
      />

      <TrustBar headline="2,400+ Central Texas properties trust AquaBlast for exterior cleaning" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Book Gutter Cleaning" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/gutter-cleaning" title="Gutter Cleaning Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Gutter Cleaning FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Gutters Overflowing? We Can Help."
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
          title="Schedule Gutter Cleaning"
          cityName="Waco"
          slug="services/gutter-cleaning"
          spot="gutter-cleaning-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
