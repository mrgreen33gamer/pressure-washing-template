// AquaBlast Pressure Washing — Service Areas Page
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.scss';
import CTABanner from '#/PageComponents/CTABanner/CTABanner';
import FAQ from '#/PageComponents/FAQ/FAQ';

const SERVICE_AREAS = [
  {
    city:        'Waco',
    slug:        'waco-tx',
    county:      'McLennan County',
    badge:       'Home Base',
    description: 'Our headquarters. Fastest scheduling and most available crews in the city. Full house washing, roof cleaning, driveway cleaning, and commercial pressure washing across all of Waco.',
    highlights:  ['Same-day service', 'Free estimates', 'All services available'],
  },
  {
    city:        'Hewitt',
    slug:        'hewitt-tx',
    county:      'McLennan County',
    badge:       'Primary Area',
    description: 'Full exterior cleaning coverage for Hewitt homes and businesses. Fast scheduling from our Waco base — typically same week.',
    highlights:  ['Same-week scheduling', 'Residential & commercial', 'Free estimates'],
  },
  {
    city:        'Woodway',
    slug:        'woodway-tx',
    county:      'McLennan County',
    badge:       'Primary Area',
    description: "Serving Woodway's residential neighborhoods with the same flat-rate pricing and free re-clean guarantee as every other area we cover.",
    highlights:  ['Flat-rate pricing', 'Free re-clean guarantee', 'Soft-wash specialists'],
  },
  {
    city:        'Robinson',
    slug:        'robinson-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Reliable exterior cleaning for Robinson residents. Soft wash, pressure wash, gutters, decks, and concrete — all surfaces, all property types.',
    highlights:  ['Licensed & bonded', 'Free estimates', 'No contracts'],
  },
  {
    city:        'China Spring',
    slug:        'china-spring-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Rural and residential exterior cleaning for the China Spring area. We make the drive — flat-rate pricing applies just the same.',
    highlights:  ['Rural coverage', 'Flat-rate pricing', 'Free estimates'],
  },
  {
    city:        'Killeen',
    slug:        'killeen-tx',
    county:      'Bell County',
    badge:       '',
    description: 'House washing, roof cleaning, and commercial pressure washing for Killeen and Fort Cavazos area homes and businesses. Military-friendly scheduling.',
    highlights:  ['Military-friendly', 'Residential & commercial', 'Same-day when available'],
  },
  {
    city:        'Temple',
    slug:        'temple-tx',
    county:      'Bell County',
    badge:       '',
    description: 'Full-service exterior cleaning for Temple. Residential neighborhoods and commercial properties served. Soft wash and high-pressure options.',
    highlights:  ['Full service coverage', 'All neighborhoods', 'Commercial & residential'],
  },
];

const faq = [
  {
    question: 'What areas do you service?',
    answer: 'We serve Waco and the surrounding Central Texas region — including Hewitt, Woodway, Robinson, China Spring, Killeen, Temple, and most communities within about 60 miles of Waco. Call us if you\'re not sure — we probably cover your area.',
  },
  {
    question: 'Is your pricing the same in all service areas?',
    answer: 'Yes — flat-rate pricing applies across every city and community we serve. The price we quote before we start is the price you pay, regardless of your location.',
  },
  {
    question: 'Do you offer free estimates outside of Waco?',
    answer: 'Yes. Free on-site estimates are available across all of our service areas. We\'ll give you an honest timeline when you call — not a vague window.',
  },
  {
    question: 'Do you handle commercial pressure washing in all areas?',
    answer: 'Yes — storefronts, parking lots, restaurants, HOAs, and multi-unit properties are within scope across all our coverage areas. Call to discuss your specific project and location.',
  },
  {
    question: 'How soon can you start my job?',
    answer: 'For Waco and immediate surrounding areas (Hewitt, Woodway, Robinson, China Spring), we typically schedule an estimate within a few days and can often clean within the same week. For Temple and Killeen, scheduling is similar — call to confirm current availability.',
  },
];

export default function ServiceAreasPage() {
  return (
    <main className={styles.page}>

      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              Central Texas Pressure Washing — Since 2015
            </div>
            <h1 className={styles.heroTitle}>
              Service Areas
              <span className={styles.heroAccent}>We Come to You.</span>
            </h1>
            <p className={styles.heroSub}>
              Based in Waco, serving all of Central Texas. Flat-rate pricing, licensed & bonded crews, and a free re-clean guarantee — no matter where you are.
            </p>
            <div className={styles.heroActions}>
              <a href="tel:+12549008842" className={styles.heroCTAPrimary}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call (254) 900-8842
              </a>
              <Link href="/contact" className={styles.heroCTASecondary}>
                Free Estimate
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div className={styles.trustStrip}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            {[
              { val: '60mi',     lbl: 'Coverage radius from Waco' },
              { val: '7+',       lbl: 'Cities we actively serve' },
              { val: 'Same Day', lbl: 'Service when available' },
              { val: 'Free',     lbl: 'Re-clean guarantee' },
            ].map(({ val, lbl }) => (
              <div key={lbl} className={styles.trustStat}>
                <span className={styles.trustVal}>{val}</span>
                <span className={styles.trustLbl}>{lbl}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.areasSection}>
        <div className={styles.areasSectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Full Coverage Map</span>
            <h2 className={styles.sectionTitle}>Every Community We Serve</h2>
            <p className={styles.sectionSub}>
              Click any city to explore our exterior cleaning services available in your area — house washing, roof cleaning, driveways, gutters, and more.
            </p>
          </div>

          <div className={styles.areasGrid}>
            {SERVICE_AREAS.map((area, i) => (
              <motion.div
                key={area.city}
                className={styles.areaCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <div className={styles.areaCardTop}>
                  <div>
                    <h3 className={styles.areaCity}>{area.city}</h3>
                    <span className={styles.areaCounty}>{area.county}</span>
                  </div>
                  {area.badge && <span className={styles.areaBadge}>{area.badge}</span>}
                </div>
                <p className={styles.areaDesc}>{area.description}</p>
                <ul className={styles.areaHighlights}>
                  {area.highlights.map((h) => (
                    <li key={h}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className={styles.areaLinks}>
                  <Link href={`/services/house-washing/${area.slug}`} className={styles.areaLink}>
                    House Washing →
                  </Link>
                  <Link href={`/services/roof-cleaning/${area.slug}`} className={styles.areaLink}>
                    Roof Cleaning →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.faqWrap}>
        <FAQ cityName="Central Texas" faq={faq} title="Service Area FAQs" />
      </div>

      <CTABanner
        headline="We Serve Your Neighborhood."
        subline="Free estimates across Waco, Temple, Killeen, and all of Central Texas. Flat-rate pricing. Free re-clean guarantee."
        primaryText="Call (254) 900-8842"
        primaryLink="tel:+12549008842"
        secondaryText="Request Estimate"
        secondaryLink="/contact"
      />

    </main>
  );
}
