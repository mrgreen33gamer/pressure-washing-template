// AquaBlast Pressure Washing — Roof Cleaning Service Page
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
  faSprayCanSparkles, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock, faTrophy, faChartLine, faHouseChimney, faRoad, faDroplet, faTree,
} from "@fortawesome/free-solid-svg-icons";

export default function RoofCleaningPage() {

  const expectations = [
    { icon: faSearch, title: "Roof Assessment", description: "We identify algae, moss, lichen, and granule condition before recommending treatment." },
    { icon: faFileContract, title: "Soft Wash Only on Shingles", description: "Low-pressure application protects shingles — we never blast asphalt with high pressure." },
    { icon: faCheckCircle, title: "Root-Kill Treatment", description: "Solutions kill Gloeocapsa magma algae at the source so black streaks stay gone longer." },
    { icon: faShieldHalved, title: "Landscaping Protected", description: "Plants pre-wetted and rinsed. Gutters flushed after treatment." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Curb Appeal Fast", description: "Most roofs look dramatically better within days as the treatment works." },
    { icon: faSprayCanSparkles, title: "Shingle-Safe Method", description: "Soft wash preserves manufacturer warranties better than high-pressure blasting." },
    { icon: faShieldHalved, title: "Licensed & Bonded", description: "Roof work performed by trained, insured crews only." },
  ];

  const processSteps = [
    { number: 1, title: "Free Estimate", description: "We assess roof type, pitch, and algae severity from the ground and ladder.", icon: faHeadset },
    { number: 2, title: "Protect Landscape", description: "Plants and vehicles protected; gutters prepped.", icon: faSearch },
    { number: 3, title: "Soft Wash Apply", description: "Low-pressure treatment applied evenly across affected areas.", icon: faFileContract },
    { number: 4, title: "Rinse & Follow-Up", description: "Controlled rinse where needed; aftercare tips provided.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 900, label: "Roofs soft-washed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 10, label: "Years of local experience", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available crews.", badge: "Fastest Response" },
    { town: "Hewitt", benefit: "Full roof clean coverage throughout Hewitt.", badge: "" },
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
    { question: "Is soft washing safe for asphalt shingles?", answer: "Yes when done correctly. Soft wash uses low pressure and algaecide solutions rather than high-pressure blasting that strips granules." },
    { question: "How much does roof cleaning cost in Waco?", answer: "Most residential roofs run $350–$900 depending on size, pitch, and severity. Multi-story or steep roofs cost more for safety." },
    { question: "Will black streaks come back?", answer: "Treatment kills algae at the root. Most homes stay cleaner for 2–4 years depending on shade and tree cover." },
    { question: "Do you clean metal and tile roofs?", answer: "Yes — method is adjusted for surface type. Metal and tile often use lower chemical concentration and careful rinse control." },
  ];

  const crossServices = [
    { icon: faHouseChimney, title: "House Washing", body: "Match your clean roof with fresh siding.", link: "/services/house-washing" },
    { icon: faDroplet, title: "Gutter Cleaning", body: "Clear gutters after roof treatment runoff.", link: "/services/gutter-cleaning" },
    { icon: faRoad, title: "Driveway & Concrete", body: "Clean sidewalks stained by roof runoff.", link: "/services/driveway-concrete-cleaning" },
    { icon: faTree, title: "Deck & Fence", body: "Restore outdoor living spaces below.", link: "/services/deck-fence-cleaning" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Roof Cleaning" },
      ]} />

      <SectionIntro
        title="Roof Cleaning in Waco, TX"
        subtitle="Soft-wash roof cleaning that kills black algae streaks and moss at the root — safe for asphalt shingles, tile, and metal roofs."
      />

      <TrustBar headline="2,400+ Central Texas properties trust AquaBlast for exterior cleaning" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Book Roof Cleaning" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/roof-cleaning" title="Roof Cleaning Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Roof Cleaning FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Black Streaks on Your Roof?"
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
          title="Schedule Roof Cleaning"
          cityName="Waco"
          slug="services/roof-cleaning"
          spot="roof-cleaning-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
