// AquaBlast Pressure Washing Hero — spray-cyan / deep-lagoon
// Photographic parallax stage (framer-motion useScroll + useTransform, disabled
// under reduced-motion; next/image fill + priority) behind a translucent lagoon
// scrim. The right visual is an authentic pressure-washing photo card — brand
// framed, uppercase badge top-left, glass spec card with two proof points.
// Photos live in /public/pages/home/welcome (real exterior-cleaning imagery).
'use client';
import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax on the background photo. Disabled under reduced-motion.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '16%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, reduceMotion ? 1.08 : 1.16]);

  const badgeText = 'Waco\'s Most Trusted Pressure Washing — Since 2015';
  const headlineLines = [
    'Clean Exteriors.',
    'Clear Results.',
  ];
  const headlineAccent = 'AquaBlast.';
  const subheadline = 'Flat-rate pricing. Same-day service. Free re-clean if you\'re not happy. Serving Waco and Central Texas with licensed, bonded exterior cleaning crews.';
  const primaryCta = { label: 'Call (254) 900-8842', href: 'tel:+12549008842' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = [
    'Free Estimates',
    'No Contracts',
    'Licensed & Bonded',
    '10+ Yrs Local',
    'Free Re-Clean',
  ];

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Photographic parallax background — real exterior soft-wash scene */}
      <motion.div
        className={styles.bgLayer}
        style={{ y: bgY, scale: bgScale }}
        aria-hidden="true"
      >
        <Image
          src="/pages/home/welcome/pw-hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>
      {/* Lagoon scrim — keeps the wet-clean photo on-brand and the headline legible */}
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Authentic pressure-washing photo — the ownable image, framed as a spec card */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
        >
          <div className={styles.photoCard}>
            <Image
              src="/pages/home/welcome/pw-siding-wash.jpg"
              alt="Pressure-washing technician in protective gear soft-washing the vinyl siding of a two-story home"
              fill
              priority
              sizes="(max-width: 960px) 88vw, 460px"
              className={styles.photo}
            />
            <div className={styles.photoGlaze} aria-hidden="true" />

            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              Licensed Crew · On-Site
            </div>

            <div className={styles.specCard}>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Flat-rate pricing
              </span>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Free re-clean guarantee
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
