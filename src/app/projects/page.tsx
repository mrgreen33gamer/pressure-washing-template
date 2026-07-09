// src/app/projects/page.tsx
"use client";

import styles from './page.module.scss';

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import ProjectCardGrid from "#/PageComponents/ProjectCardGrid/ProjectCardGrid";
import BeforeAfter from "#/PageComponents/BeforeAfter/BeforeAfter";
import HighlightedProject from "#/PageComponents/HighlightedProject/HighlightedProject";
import CaseStudyGrid from "#/PageComponents/CaseStudyGrid/CaseStudyGrid";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import InsuredBadge from "#/PageComponents/InsuredBadge/InsuredBadge";
import SectionMap from "#/PageComponents/SectionMap/SectionMap";
import Variant1 from "#/PageComponents/ContactForms/Variant1/Form";

import reviews from "&/local-db/reviews";
import ALL_PROJECTS from "&/local-db/projects";

const beforeAfterItems = ALL_PROJECTS
  .filter((p) => p.beforeImage && p.afterImage)
  .map((p) => ({
    beforeSrc: p.beforeImage!.src,
    afterSrc: p.afterImage!.src,
    beforeAlt: p.beforeImage!.alt,
    afterAlt: p.afterImage!.alt,
    clientName: `${p.title} — ${p.location}`,
    result: p.result,
  }));

const caseStudies = [
  {
    title: 'HOA Quarterly Exterior Program',
    client: 'Waco HOA Management',
    location: 'Waco, TX',
    result: 'Recurring Contract',
    description: 'Quarterly sidewalks, dumpster pads, amenity deck, and clubhouse exterior with photo documentation and board-ready invoices.',
    imageSrc: '/projects/gallery/kgh.png',
    imageAlt: 'HOA common area after cleaning',
    link: '/industries/property-management-hoas',
  },
  {
    title: 'Restaurant Patio & Dumpster Pad',
    client: 'Local Restaurant Group',
    location: 'Temple, TX',
    result: 'Night Shift Clean',
    description: 'After-hours grease-pad degreasing and patio refresh so lunch service opened to a spotless exterior.',
    imageSrc: '/projects/gallery/jyfhtgb.png',
    imageAlt: 'Restaurant exterior after pressure washing',
    link: '/industries/restaurants-hospitality',
  },
  {
    title: 'Retail Storefront Weekend Reset',
    client: 'Killeen Retail Tenant',
    location: 'Killeen, TX',
    result: 'Monday-Ready',
    description: 'Sunday night storefront, canopy, and parking apron clean ahead of a regional manager visit.',
    imageSrc: '/projects/gallery/htf.png',
    imageAlt: 'Retail storefront after cleaning',
    link: '/industries/retail-commercial-real-estate',
  },
];

export default function ProjectsPage() {
  return (
    <main className={styles.pageWrapper}>
      <SectionIntro
        title="Our Projects"
        subtitle="Real soft washes, roof cleans, driveways, and commercial jobs across Central Texas — see what AquaBlast can do for your property"
      />

      <div className={styles.section}>
        <HighlightedProject
          title="Woodway Full-House Soft Wash"
          description="Two-story fiber-cement home restored in one afternoon with plant-safe soft wash — mildew gone, paint protected, free re-clean guarantee on file."
          imageSrc="/projects/gallery/2.png"
          imageAlt="Woodway house after soft wash"
          projectLink="/contact"
          projectLinkLabel="Get Results Like This"
          ctaLink="/services/house-washing"
          ctaLabel="House Washing Details"
          tag="Flagship Job"
        />
      </div>

      {beforeAfterItems.length > 0 && (
        <div className={styles.section}>
          <BeforeAfter
            title="Before & After — Real Results"
            subtitle="Drag the slider to see the transformation — dirty to spotless, side by side."
            items={beforeAfterItems}
          />
        </div>
      )}

      <div className={styles.section}>
        <ProjectCardGrid
          title="Selected Jobs"
          subtitle="House washing, roofs, driveways, decks, gutters, and commercial work across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <CaseStudyGrid
          title="Commercial Case Studies"
          studies={caseStudies}
        />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <InsuredBadge variant="section" ctaLink="/contact" />
      </div>

      <div className={styles.section}>
        <SectionMap />
      </div>

      <div className={styles.section}>
        <Variant1
          title="Want Results Like These for Your Property?"
          cityName="Waco"
          slug="projects"
          spot="projects-page"
          formVariant={1}
        />
      </div>
    </main>
  );
}
