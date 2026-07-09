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

export default function RetailCommercialRealEstatePage() {
  const whyFeatures = [
    { icon: faHandshake, title: "Built for Retail & CRE", description: "Storefronts, parking lots, and portfolio exteriors that look investor-ready and tenant-ready — on a schedule that fits leasing and foot traffic." },
    { icon: faClock, title: "Flexible Scheduling", description: "We work around your residents, guests, and tenants — not the other way around." },
    { icon: faShieldHalved, title: "Licensed, Bonded & Insured", description: "COIs available on request. Every crew is fully covered for commercial properties." },
  ];

  const faq = [
    { question: "Do you clean shopping centers?", answer: "Yes — parking lots, sidewalks, dumpster enclosures, and building exteriors for retail centers and strip centers." },
    { question: "Can one contract cover multiple assets?", answer: "Yes. We build portfolio schedules with per-property scopes and consolidated billing." },
    { question: "Do you provide before/after documentation?", answer: "Yes — photo documentation is available for owners, lenders, and marketing packages." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Retail & Commercial Real Estate" },
      ]} />

      <SectionIntro
        title="Retail & Commercial Real Estate"
        subtitle="Storefronts, parking lots, and portfolio exteriors that look investor-ready and tenant-ready — on a schedule that fits leasing and foot traffic."
      />

      <TrustBar headline="Commercial-ready exterior cleaning for Central Texas portfolios" />

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Retail & CRE Clients Choose AquaBlast" />
      </div>

      <div className={styles.section}>
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.25rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>What You Get</h2>
          <ul>
            <li>Portfolio-wide programs with consistent standards</li>
            <li>Storefront, canopy, sidewalk, and parking lot cleaning</li>
            <li>COIs and photo documentation for owners and asset managers</li>
            <li>Flexible scheduling around peak shopping hours</li>
          </ul>
        </section>
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Retail & Commercial Real Estate — FAQs" />
      </div>

      <CTABanner
        headline="Need a Reliable Cleaning Partner?"
        subline="Recurring programs, COIs, and flat-rate pricing for retail & cre clients across Central Texas."
        primaryText="Call (254) 900-8842"
        primaryLink="tel:+12549008842"
        secondaryText="Request a Quote"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4
          title="Request a Retail & CRE Quote"
          cityName="Waco"
          slug="industries/retail-commercial-real-estate"
          spot="retail-commercial-real-estate-form"
          formVariant={2}
        />
      </div>
    </main>
  );
}
