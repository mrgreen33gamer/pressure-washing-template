"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";

import styles from "./page.module.scss";

import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faLeaf,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Operation Before We Quote",
      description: "Property managers, restaurants, and retail owners each have different hours, access rules, and compliance needs. We scope the real surface list — not a one-size-fits-all package.",
    },
    {
      icon: faShieldHalved,
      title: "Commercial-Ready Insurance & COIs",
      description: "Licensed, bonded, and insured with certificates of insurance available for management companies, HOA boards, and general contractors.",
    },
    {
      icon: faLeaf,
      title: "Recurring Programs That Stick",
      description: "Monthly and quarterly exterior maintenance plans with locked-in pricing so your curb appeal stays consistent without re-bidding every season.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 400, label: "Commercial and multi-family properties cleaned", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,  label: "Client satisfaction on recurring programs",        suffix: "%", duration: 3 },
    { icon: faClock,     value: 10,  label: "Years serving Central Texas businesses",           suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Our home base — commercial routes across McLennan County.",                 badge: "Headquarters" },
    { town: "Hewitt",       benefit: "Retail strips, multi-family, and HOA communities.",                        badge: "" },
    { town: "Woodway",      benefit: "Professional buildings and high-end residential associations.",           badge: "" },
    { town: "Temple",       benefit: "Restaurants, medical-adjacent retail, and commercial parks.",             badge: "" },
    { town: "Killeen",      benefit: "Multi-unit housing and retail near Fort Cavazos.",                        badge: "" },
    { town: "China Spring", benefit: "Rural commercial and managed properties.",                                badge: "" },
  ];

  const comparisonRows = [
    { feature: "Recurring program pricing",              us: true, others: false },
    { feature: "COIs for PMs and HOA boards",            us: true, others: "Sometimes" },
    { feature: "Off-hours / night scheduling",           us: true, others: "Sometimes" },
    { feature: "Flat-rate written scopes",               us: true, others: false },
    { feature: "Free re-clean if you're not happy",      us: true, others: false },
  ];

  const faq = [
    {
      question: "What industries does AquaBlast specialize in?",
      answer: "We focus on property management & HOAs, restaurants & hospitality, and retail & commercial real estate — plus general residential exterior cleaning across Central Texas.",
    },
    {
      question: "Do you offer recurring commercial contracts?",
      answer: "Yes — monthly and quarterly programs with locked-in pricing, consistent crews, and photo documentation available on request.",
    },
    {
      question: "Can you provide a certificate of insurance?",
      answer: "Yes. COIs for property managers, HOA boards, and GCs are available before the first visit.",
    },
    {
      question: "Do you work after business hours?",
      answer: "Yes. Nights and early mornings are common for restaurants, retail centers, and multi-family properties so we never disrupt tenants or customers.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />

      <SectionIntro
        title="Industries We Serve"
        subtitle="Exterior cleaning programs built for property managers, restaurants, and commercial real estate — not generic one-off washes."
      />

      <TrustBar headline="Commercial-ready crews. Flat-rate programs. Central Texas coverage." />

      <div className={styles.section}>
        <SectionIndustriesServed
          title="Who We Partner With"
          subtitle="Specialized exterior cleaning for the industries that need consistent curb appeal."
        />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Commercial Clients" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Commercial Coverage Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} title="AquaBlast vs. One-Off Cleaners" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Commercial Cleaning FAQs" />
      </div>

      <CTABanner
        headline="Need a Reliable Exterior Cleaning Partner?"
        subline="Recurring programs, COIs, and flat-rate pricing for Central Texas commercial clients."
        primaryText="Call (254) 900-8842"
        primaryLink="tel:+12549008842"
        secondaryText="Request a Quote"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4
          title="Request a Commercial Quote"
          cityName="Waco"
          slug="industries"
          spot="industries-index-form"
          formVariant={2}
        />
      </div>
    </main>
  );
}
