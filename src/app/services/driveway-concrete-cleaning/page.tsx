// AquaBlast Pressure Washing — Driveway & Concrete Cleaning Service Page
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
  faRoad, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock, faTrophy, faChartLine, faHouseChimney, faSprayCanSparkles, faDroplet, faWarehouse,
} from "@fortawesome/free-solid-svg-icons";

export default function DrivewayConcreteCleaningPage() {

  const expectations = [
    { icon: faSearch, title: "Stain Assessment", description: "Oil, rust, mildew, and tire marks each need different pre-treatments — we diagnose first." },
    { icon: faFileContract, title: "Flat-Rate Quote", description: "Price locked before we start. Surface-safe pressures for decorative concrete." },
    { icon: faCheckCircle, title: "Deep Clean Results", description: "Surface cleaners and high-pressure methods for even, streak-free concrete." },
    { icon: faShieldHalved, title: "Neighbors Considered", description: "Controlled spray and runoff management to keep mess off adjacent properties." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Fast Turnaround", description: "Most driveways finish in 1–3 hours depending on size and stain severity." },
    { icon: faRoad, title: "Hardscape Specialists", description: "Driveways, sidewalks, patios, pool decks, and parking pads." },
    { icon: faShieldHalved, title: "Curb Appeal Boost", description: "One of the highest ROI exterior cleans before selling or hosting." },
  ];

  const processSteps = [
    { number: 1, title: "Quote", description: "Measure area, note stains, provide flat-rate price.", icon: faHeadset },
    { number: 2, title: "Pre-Treat", description: "Apply degreasers or detergents to oil and organic stains.", icon: faSearch },
    { number: 3, title: "Surface Clean", description: "Even high-pressure cleaning for uniform results.", icon: faFileContract },
    { number: 4, title: "Rinse & Review", description: "Final rinse and walkthrough with you.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 2000, label: "Driveways and hardscapes cleaned", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 10, label: "Years of local experience", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available crews.", badge: "Fastest Response" },
    { town: "Hewitt", benefit: "Full driveway clean coverage throughout Hewitt.", badge: "" },
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
    { question: "How much does driveway cleaning cost in Waco?", answer: "Most two-car driveways run $150–$350. Larger circular drives or heavy oil staining may cost more — always quoted flat-rate first." },
    { question: "Can you remove oil stains completely?", answer: "Many oil stains lighten dramatically; deeply set petroleum can leave a faint shadow. We pre-treat aggressively and set honest expectations." },
    { question: "Is pressure washing safe for stamped concrete?", answer: "Yes with correct tips and distance. Decorative concrete needs lower pressure and more detergent dwell time." },
    { question: "How often should I clean my driveway?", answer: "Once a year keeps mold and tire marks from embedding. High-shade drives may need twice yearly." },
  ];

  const crossServices = [
    { icon: faHouseChimney, title: "House Washing", body: "Pair curb appeal with a full soft wash.", link: "/services/house-washing" },
    { icon: faSprayCanSparkles, title: "Roof Cleaning", body: "Stop roof runoff from restaining concrete.", link: "/services/roof-cleaning" },
    { icon: faDroplet, title: "Gutter Cleaning", body: "Fix the source of sidewalk splash stains.", link: "/services/gutter-cleaning" },
    { icon: faWarehouse, title: "Commercial", body: "Parking lots and storefront pads.", link: "/services/commercial-pressure-washing" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Driveway & Concrete Cleaning" },
      ]} />

      <SectionIntro
        title="Driveway & Concrete Cleaning in Waco, TX"
        subtitle="High-pressure cleaning for driveways, sidewalks, patios, and parking pads. Oil stains, tire marks, mildew, and years of buildup — gone."
      />

      <TrustBar headline="2,400+ Central Texas properties trust AquaBlast for exterior cleaning" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Book Driveway & Concrete Cleaning" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/driveway-concrete-cleaning" title="Driveway & Concrete Cleaning Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Driveway & Concrete Cleaning FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Driveway Looking Rough?"
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
          title="Schedule Concrete Cleaning"
          cityName="Waco"
          slug="services/driveway-concrete-cleaning"
          spot="driveway-concrete-cleaning-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
