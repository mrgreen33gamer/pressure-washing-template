'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import AuthorBio from '#/PageComponents/AuthorBio/AuthorBio';
import { faRoad, faOilCan, faCloudSun, faCalendarCheck, faShieldHalved, faLeaf } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Driveways take the worst of Texas weather, vehicle drips, and shade mold. Clean too rarely and stains set permanently. Clean with the wrong pressure and you etch the surface. Here is a practical schedule for Central Texas.",
  },
  {
    type: 'cards',
    heading: 'What Determines Your Cleaning Schedule',
    cards: [
      { icon: faCloudSun, title: 'Sun vs shade', body: 'North-facing or tree-covered drives grow mildew faster — often twice yearly.' },
      { icon: faOilCan, title: 'Vehicle leaks', body: 'Oil and transmission fluid need degreaser pre-treat; the longer they sit, the deeper they go.' },
      { icon: faLeaf, title: 'Leaf tannins', body: 'Live oak and pecan leaves leave brown stains that embed if left all season.' },
      { icon: faRoad, title: 'Traffic load', body: 'Multi-car households and short driveways show tire marks faster.' },
      { icon: faCalendarCheck, title: 'Baseline: once a year', body: 'Most open, sunny Waco driveways look great with one annual deep clean.' },
      { icon: faShieldHalved, title: 'Before selling or sealing', body: 'Always clean thoroughly before coating or listing photos.' },
    ],
  },
  {
    type: 'table',
    heading: 'Recommended Driveway Cleaning Frequency',
    tableHeaders: ['Situation', 'Frequency', 'Notes'],
    tableRows: [
      ['Open sun, light traffic', 'Every 12 months', 'Standard surface clean'],
      ['Heavy shade / trees', 'Every 6–9 months', 'Mildew returns faster'],
      ['Visible oil spots', 'As needed + annual', 'Pre-treat oil immediately'],
      ['Before seal / sale', 'Right before project', 'Let dry fully before coating'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Surface cleaners give even results across large pads — wand-only cleaning often leaves tiger stripes.',
  },
  {
    type: 'tips',
    heading: 'Between Professional Cleans',
    items: [
      'Sweep leaves weekly in fall so tannins do not set',
      'Blot fresh oil with absorbent, then degrease — do not just hose it',
      'Watch for slick green film after rainy weeks in shaded spots',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Often Should You Pressure Wash Your Driveway in Central Texas?"
        description="An honest cleaning schedule for Waco, Temple, and Killeen driveways — based on shade, oil, and traffic."
        imageSrc="/pages/blogs/hvac-filter.jpg"
        imageAlt="How often to pressure wash a driveway in Central Texas"
        category="Driveway"
        date="April 14, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Driveway Looking Rough?"
        body="AquaBlast provides flat-rate driveway and concrete cleaning across Central Texas."
        buttonText="Get Free Estimate"
        buttonHref="/services/driveway-concrete-cleaning"
      />
      <AuthorBio cityName="Waco" />
      <NewsletterSignup variant={1} spot="driveway-frequency-blog" />
    </>
  );
}
