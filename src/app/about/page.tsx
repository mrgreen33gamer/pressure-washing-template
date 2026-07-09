// AquaBlast Pressure Washing — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faBroom,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2015",
      description: "AquaBlast was founded in Waco by Cody Marsh, a Central Texas native who built the company one truck at a time. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust on Your Property",
      description: "Every technician on our team is background-checked, trained, and fully insured. We treat every home and business we clean with the same respect we'd want for our own — landscaping protected, surfaces rinsed, no mess left behind.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full-property package when a driveway clean is all you need. We won't blast delicate siding with high pressure to finish faster. Our reputation is built on straight talk — and nearly a decade of repeat customers prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2400, label: "Homes and businesses we've cleaned in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",                          suffix: "%", duration: 2 },
    { icon: faClock,     value: 10,   label: "Years serving Central Texas families",                 suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Free On-Site Estimate",        description: "Cody or a senior crew lead walks your property with you, notes surface types and problem areas, and gives you a firm, written price — no surprises later.", icon: faClipboardCheck },
    { number: 2, title: "Protect & Prep the Right Way",  description: "Landscaping pre-wetted, windows and fixtures protected, soft-wash vs pressure wash decided per surface. Good cleaning jobs are won or lost in the prep.", icon: faShieldHalved },
    { number: 3, title: "Clean With Care",               description: "Our crew applies the right pressure and eco-friendly solutions for each surface — siding, roof, concrete, deck, or commercial hardscape — with a tidy work site throughout.", icon: faBroom },
    { number: 4, title: "Final Walkthrough & Guarantee", description: "We walk the property with you before we call the job done, and back the finished work with our free re-clean satisfaction guarantee.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About AquaBlast Pressure Washing"
        subtitle="Waco-owned, Waco-operated, and Central Texas-proud since 2015. We do honest exterior cleaning at fair prices for the families and businesses we've called neighbors for nearly a decade."
      />

      <TrustBar headline="2,400+ Central Texas homes and businesses trust AquaBlast — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="10 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's Pressure Washing Company — Ready When You Need Us"
        subline="Same-day service available. Flat-rate pricing. Free re-clean guarantee. No contracts — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12549008842"
        secondaryText="Request Estimate Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
