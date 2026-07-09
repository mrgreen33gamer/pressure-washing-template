// AquaBlast — Commercial Pressure Washing in Waco, TX
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
  faWarehouse, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock, faTrophy, faChartLine, faHouseChimney, faRoad, faDroplet, faTree,
} from "@fortawesome/free-solid-svg-icons";

export default function WacoCommercialPressureWashingPage() {

  const whyFeatures = [
    { icon: faClock, title: "Local Waco Crews", description: "AquaBlast provides commercial pressure washing with home base with the fastest scheduling in the city. Flat-rate pricing and free re-clean guarantee on every job." },
    { icon: faWarehouse, title: "Commercial Pressure Washing Specialists", description: "Storefronts, parking lots, HOAs, restaurants, and multi-unit properties cleaned on flexible schedules that will not interrupt your business." },
    { icon: faShieldHalved, title: "Licensed, Bonded & Insured", description: "Every technician is trained and fully insured. Your Waco property is protected from first spray to final rinse." },
  ];

  const expectations = [
    { icon: faSearch, title: "On-Site Assessment", description: "We walk your Waco property, note surface types, and explain the best cleaning approach in plain English." },
    { icon: faFileContract, title: "Flat-Rate Quote First", description: "Written price before we start. It does not change mid-job." },
    { icon: faCheckCircle, title: "Professional Results", description: "Right pressure and eco-friendly solutions for each surface — then a walkthrough with you." },
    { icon: faShieldHalved, title: "Free Re-Clean Guarantee", description: "Not happy? We return and re-clean at no charge." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or online. Serving Waco and McLennan County.", icon: faHeadset },
    { number: 2, title: "Assessment", description: "Crew lead inspects surfaces and problem areas on site.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before work begins — zero pressure.", icon: faFileContract },
    { number: 4, title: "Clean & Guarantee", description: "Professional clean, walkthrough, free re-clean if needed.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 400, label: "Commercial properties maintained", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98, label: "Client retention satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 10, label: "Years serving Central Texas businesses", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "Do you offer commercial pressure washing in Waco?", answer: "Yes — AquaBlast regularly serves Waco and McLennan County with the same flat-rate pricing and free re-clean guarantee as our Waco jobs." },
    { question: "How soon can you come to Waco?", answer: "Most Waco jobs can be estimated within a few days and cleaned within the week. Same-day service is often available — call (254) 900-8842 to confirm." },
    { question: "Is pricing the same as Waco?", answer: "Yes. Flat-rate written pricing applies across every city we serve, including Waco." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Commercial Pressure Washing", href: "/services/commercial-pressure-washing" },
        { label: "Waco, TX" },
      ]} />

      <SectionIntro
        title="Commercial Pressure Washing in Waco, TX"
        subtitle="Storefronts, parking lots, HOAs, restaurants, and multi-unit properties cleaned on flexible schedules that will not interrupt your business. Serving Waco and McLennan County with flat-rate pricing and a free re-clean guarantee."
      />

      <TrustBar headline="Trusted commercial pressure washing for Waco homes and businesses" />

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={`Why Waco Chooses AquaBlast`} />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle={`Commercial Pressure Washing in Waco — What to Expect`} expectations={expectations} />
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
        <FAQ cityName="Waco" faq={faq} title={`Commercial Pressure Washing in Waco — FAQs`} />
      </div>

      <CTABanner
        headline={`Commercial Pressure Washing in Waco — Book Today`}
        subline="Flat-rate pricing. Free re-clean guarantee. Licensed, bonded & insured crews."
        primaryText="Call (254) 900-8842"
        primaryLink="tel:+12549008842"
        secondaryText="Free Estimate"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4
          title={`Request Commercial Quote — Waco`}
          cityName="Waco"
          slug={`services/commercial-pressure-washing/waco-tx`}
          spot={`commercial-pressure-washing-waco-tx-form`}
          formVariant={2}
        />
      </div>
    </main>
  );
}
