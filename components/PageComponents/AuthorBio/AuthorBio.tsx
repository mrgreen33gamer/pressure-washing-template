// components/PageComponents/AuthorBio/AuthorBio.tsx
"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useTrackEvent } from '&/useTrackEvent';

interface AuthorBioProps {
  cityName:  string;
  imageSrc?: string;
  imageAlt?: string;
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AquaBlast Pressure Washing",
  url: "https://www.aquablastpw.com",
  sameAs: [
    "https://facebook.com/aquablastpw",
  ],
  knowsAbout: [
    "House Washing", "Soft Wash Roof Cleaning", "Driveway Cleaning",
    "Gutter Cleaning", "Deck & Fence Cleaning", "Commercial Pressure Washing",
  ],
  description:
    "Licensed, bonded & insured pressure washing company based in Waco, TX. Serving Central Texas homes and businesses with soft wash and exterior cleaning since 2015.",
};

const AuthorBio: React.FC<AuthorBioProps> = ({
  cityName,
  imageSrc = "/pages/seo-template-resources/owner.jpg",
  imageAlt = "Cody Marsh — Owner of AquaBlast Pressure Washing",
}) => {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.authorBio} aria-label="About the Author">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className={styles.card}>
        <div className={styles.accentStrip} aria-hidden="true" />

        <div className={styles.imageCol}>
          <div className={styles.imageRing}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={180}
              height={180}
              className={styles.authorImage}
              priority
            />
          </div>
          <div className={styles.verifiedBadge}>✓ Licensed & Bonded</div>
        </div>

        <div className={styles.content}>
          <p className={styles.role}>Owner & Lead Technician · AquaBlast Pressure Washing</p>
          <h2 className={styles.title}>Cody Marsh</h2>

          <p className={styles.description}>
            Founder of AquaBlast Pressure Washing in{" "}
            <strong>Waco, TX</strong> — serving <strong>{cityName}</strong> and Central Texas
            since 2015. Cody still walks estimates personally and trains every crew on soft-wash
            safety, eco-friendly solutions, and the free re-clean standard.
          </p>

          <ul className={styles.credentials} aria-label="Credentials and specializations">
            <li>Licensed, bonded & insured since 2015</li>
            <li>Soft-wash specialist for siding and roofs</li>
            <li>2,400+ properties cleaned across Central Texas</li>
            <li>100% satisfaction — free re-clean guarantee</li>
          </ul>

          <p className={styles.updated}>
            Last updated April 2026 · Based on real job data &amp; Central Texas exterior conditions
          </p>

          <div className={styles.footer}>
            <a
              href="https://facebook.com/aquablastpw"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
              aria-label="Follow AquaBlast Pressure Washing on Facebook"
              onClick={() => trackEvent({
                eventType:    'click',
                elementLabel: 'Follow on Facebook',
                section:      'AuthorBio',
              })}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
              </svg>
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;
