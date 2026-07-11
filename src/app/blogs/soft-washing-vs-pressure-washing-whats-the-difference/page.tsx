'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faDroplet, faGaugeHigh, faHouseChimney, faRoad, faShieldHalved, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Homeowners often use “pressure washing” as a catch-all. Pros know soft wash and high-pressure cleaning are different tools for different surfaces. Using the wrong one is how paint peels, shingles lose granules, and warranties get voided.",
  },
  {
    type: 'cards',
    heading: 'The Core Difference',
    cards: [
      { icon: faDroplet, title: 'Soft wash = low pressure + chemistry', body: 'Specialized cleaners kill mold and algae at the root; pressure stays gentle on siding and roofs.' },
      { icon: faGaugeHigh, title: 'Pressure wash = mechanical force', body: 'High PSI blasts dirt from durable surfaces like concrete, brick, and heavy hardscape.' },
      { icon: faHouseChimney, title: 'Best soft-wash surfaces', body: 'Vinyl, fiber cement, painted wood, stucco, asphalt shingles, and many roofs.' },
      { icon: faRoad, title: 'Best high-pressure surfaces', body: 'Driveways, sidewalks, parking lots, dumpster pads, and some stone.' },
      { icon: faShieldHalved, title: 'Safety & landscaping', body: 'Both methods need plant protection — soft wash still requires pre-wet and rinse discipline.' },
      { icon: faCheck, title: 'What AquaBlast does', body: 'We match method to material on every estimate — never one PSI for the whole house.' },
    ],
  },
  {
    type: 'table',
    heading: 'Soft Wash vs Pressure Wash at a Glance',
    tableHeaders: ['', 'Soft Wash', 'Pressure Wash'],
    tableRows: [
      ['Primary tool', 'Low pressure + detergent', 'High PSI water'],
      ['Siding & roofs', 'Preferred', 'Risky'],
      ['Concrete & brick', 'Sometimes as pre-treat', 'Preferred'],
      ['Kills organic growth', 'Yes at the root', 'Often surface only'],
      ['Typical home use', 'House + roof', 'Driveway + patio'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: If a company only owns one high-pressure machine and no soft-wash setup, they are not equipped for modern residential exteriors.',
  },
  {
    type: 'tips',
    heading: 'Questions to Ask Any Cleaner',
    items: [
      'What PSI and method will you use on my siding or roof?',
      'How do you protect plants and pets during chemical application?',
      'Is the quote flat-rate, and is a re-clean included if I am not happy?',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Soft Washing vs. Pressure Washing: What’s the Difference?"
        description="When to soft wash siding and roofs — and when high pressure is the right tool for concrete in Central Texas."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Soft washing vs pressure washing comparison for Texas homes"
        category="Education"
        date="April 10, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Not Sure Which Method You Need?"
        body="AquaBlast assesses every surface on-site and quotes the right approach — soft wash, pressure wash, or both."
        buttonText="Get Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="soft-vs-pressure-blog" />
    </>
  );
}
