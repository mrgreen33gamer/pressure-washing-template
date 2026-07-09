"use client";

import styles from "../page.module.scss";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";

import {
  faBuilding, faClock, faShieldHalved, faHandshake, faCheckCircle, faFileContract,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyManagementHoasPage() {
  const whyFeatures = [
    { icon: faHandshake, title: "Built for Property Management", description: "Recurring exterior cleaning programs for multi-family properties, HOA common areas, and managed communities across Central Texas." },
    { icon: faClock, title: "Flexible Scheduling", description: "We work around your residents, guests, and tenants — not the other way around." },
    { icon: faShieldHalved, title: "Licensed, Bonded & Insured", description: "COIs available on request. Every crew is fully covered for commercial properties." },
  ];

  const faq = [
    { question: "Do you work with HOA boards and property managers?", answer: "Yes — we invoice management companies, provide COIs, and schedule around board requirements and quiet hours." },
    { question: "Can you clean multi-building communities?", answer: "Yes. We scope multi-building complexes with a written map of surfaces and a recurring calendar." },
    { question: "What surfaces do you cover for HOAs?", answer: "Building exteriors, sidewalks, parking lots, dumpster pads, amenity decks, pool decks, and fence lines." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Property Management & HOAs" },
      ]} />

      <SectionIntro
        title="Property Management & HOAs"
        subtitle="Recurring exterior cleaning programs for multi-family properties, HOA common areas, and managed communities across Central Texas."
      />

      <TrustBar headline="Commercial-ready exterior cleaning for Central Texas portfolios" />

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Property Management Clients Choose AquaBlast" />
      </div>

      <div className={styles.section}>
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.25rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>What You Get</h2>
          <ul>
            <li>Monthly or quarterly recurring programs with locked-in pricing</li>
            <li>Certificates of insurance provided for boards and management companies</li>
            <li>Amenity decks, dumpster pads, sidewalks, and building exteriors</li>
            <li>Off-hours scheduling to minimize resident disruption</li>
          </ul>
        </section>
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Property Management & HOAs — FAQs" />
      </div>

      <CTABanner
        headline="Need a Reliable Cleaning Partner?"
        subline="Recurring programs, COIs, and flat-rate pricing for property management clients across Central Texas."
        primaryText="Call (254) 900-8842"
        primaryLink="tel:+12549008842"
        secondaryText="Request a Quote"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4
          title="Request a Property Management Quote"
          cityName="Waco"
          slug="industries/property-management-hoas"
          spot="property-management-hoas-form"
          formVariant={2}
        />
      </div>
    </main>
  );
}
