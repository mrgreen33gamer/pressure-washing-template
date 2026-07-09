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

export default function RestaurantsHospitalityPage() {
  const whyFeatures = [
    { icon: faHandshake, title: "Built for Restaurants", description: "Keep patios, dumpster pads, drive-thrus, and storefronts spotless — without interrupting service hours." },
    { icon: faClock, title: "Flexible Scheduling", description: "We work around your residents, guests, and tenants — not the other way around." },
    { icon: faShieldHalved, title: "Licensed, Bonded & Insured", description: "COIs available on request. Every crew is fully covered for commercial properties." },
  ];

  const faq = [
    { question: "Can you clean after closing?", answer: "Yes — nights and early mornings are standard for restaurants so you never lose a service period." },
    { question: "Do you clean grease-stained concrete?", answer: "Yes. We pre-treat grease with commercial degreasers before high-pressure cleaning." },
    { question: "Can you service multiple locations?", answer: "Yes — we support multi-location operators with scheduled routes across Waco, Temple, and Killeen." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Restaurants & Hospitality" },
      ]} />

      <SectionIntro
        title="Restaurants & Hospitality"
        subtitle="Keep patios, dumpster pads, drive-thrus, and storefronts spotless — without interrupting service hours."
      />

      <TrustBar headline="Commercial-ready exterior cleaning for Central Texas portfolios" />

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Restaurants Clients Choose AquaBlast" />
      </div>

      <div className={styles.section}>
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.25rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>What You Get</h2>
          <ul>
            <li>Night and early-morning scheduling around service hours</li>
            <li>Grease-safe degreasing on dumpster pads and kitchen exits</li>
            <li>Patio, sidewalk, and storefront soft/pressure wash options</li>
            <li>Recurring weekly or monthly plans for multi-location operators</li>
          </ul>
        </section>
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Restaurants & Hospitality — FAQs" />
      </div>

      <CTABanner
        headline="Need a Reliable Cleaning Partner?"
        subline="Recurring programs, COIs, and flat-rate pricing for restaurants clients across Central Texas."
        primaryText="Call (254) 900-8842"
        primaryLink="tel:+12549008842"
        secondaryText="Request a Quote"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4
          title="Request a Restaurants Quote"
          cityName="Waco"
          slug="industries/restaurants-hospitality"
          spot="restaurants-hospitality-form"
          formVariant={2}
        />
      </div>
    </main>
  );
}
