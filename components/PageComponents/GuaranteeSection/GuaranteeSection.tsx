// components/PageComponents/GuaranteeSection/GuaranteeSection.tsx
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faRotateLeft,
  faTag,
  faCertificate,
  faCalendarCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useTrackEvent } from '&/useTrackEvent';

interface Guarantee {
  icon: any;
  title: string;
  description: string;
}

interface GuaranteeSectionProps {
  title?:      string;
  headline?:   string;
  guarantees?: Guarantee[];
  ctaText?:    string;
  ctaLink?:    string;
}

const DEFAULT_GUARANTEES: Guarantee[] = [
  {
    icon: faTag,
    title: "Flat-Rate Pricing. Always.",
    description:
      "You get a firm price before we start — no hourly billing, no surprise add-ons. What we quote is what you pay.",
  },
  {
    icon: faShieldHalved,
    title: "Licensed, Bonded & Insured",
    description:
      "Every AquaBlast crew is fully licensed, bonded, and insured. Your property is protected from the first spray to the final walkthrough.",
  },
  {
    icon: faRotateLeft,
    title: "Free Re-Clean Guarantee",
    description:
      "Not happy with the results? We'll come back and re-clean at no charge. 100% satisfaction — no exceptions.",
  },
  {
    icon: faCertificate,
    title: "Eco-Friendly Soft Wash",
    description:
      "We use plant- and pet-safe cleaning solutions and low-pressure soft wash on delicate surfaces like siding and roofs.",
  },
  {
    icon: faCalendarCheck,
    title: "No Contracts. No Lock-In.",
    description:
      "We earn your business with every visit — not by locking you into a multi-year package. Book when you need us.",
  },
  {
    icon: faStar,
    title: "On-Time or We Call Ahead",
    description:
      "We respect your time. If we're running late, we call before your window closes — and we show up when we say we will.",
  },
];

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({
  title      = "Our Promise to You",
  headline   = "We back every job\nwith real guarantees.",
  guarantees = DEFAULT_GUARANTEES,
  ctaText    = "Get a Free Estimate",
  ctaLink    = "/contact",
}) => {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.section} aria-label="Our Guarantees">
      <div className={styles.container}>

        {/* Left: headline + CTA */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>{title}</span>
          <h2 className={styles.headline}>
            {headline.split("\n").map((line, i) => (
              <span key={i}>
                {i === 1 ? <em>{line}</em> : line}
                {i < headline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className={styles.body}>
            Every pressure washing company in Central Texas makes promises. We back ours in writing — with flat-rate pricing, trained crews, and a free re-clean if you&apos;re not happy.
          </p>
          <Link
            href={ctaLink}
            className={styles.cta}
            onClick={() => trackEvent({
              eventType:    'click',
              elementLabel: ctaText,
              section:      'GuaranteeSection',
            })}
          >
            {ctaText}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>

          <div className={styles.ratingRow}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <span className={styles.ratingText}>5.0 · 300+ verified Google reviews</span>
          </div>
        </div>

        {/* Right: guarantee cards */}
        <div className={styles.rightCol}>
          <div className={styles.grid}>
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.45, ease: "easeOut" }}
              >
                <div className={styles.iconWrap} aria-hidden="true">
                  <FontAwesomeIcon icon={g.icon} className={styles.icon} />
                </div>
                <div className={styles.cardText}>
                  <h3 className={styles.cardTitle}>{g.title}</h3>
                  <p className={styles.cardBody}>{g.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GuaranteeSection;
