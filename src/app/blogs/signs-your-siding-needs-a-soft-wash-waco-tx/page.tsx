'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faLeaf, faHouseChimney, faClock, faExclamationTriangle, faTint, faBug } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Central Texas humidity is a buffet for mold, mildew, and algae on siding. A garden-hose rinse will not cut it once organic growth is established — here is how to know when you need a professional soft wash in Waco.",
  },
  {
    type: 'cards',
    heading: '7 Signs Your Siding Needs a Soft Wash',
    cards: [
      { icon: faLeaf, title: 'Green or black film on north walls', body: 'Shade + humidity = mildew colonies that feed on your paint and siding.' },
      { icon: faHouseChimney, title: 'Spider webs and dirt trails under eaves', body: 'Soft wash lifts organic debris high-pressure alone often smears.' },
      { icon: faTint, title: 'Streaking under windows and gutters', body: 'Mineral and organic runoff leaves permanent-looking tracks that soft wash removes.' },
      { icon: faBug, title: 'Visible mold near landscaping', body: 'Plants trap moisture against the wall — growth starts at the bottom and climbs.' },
      { icon: faClock, title: 'It has been 18+ months since last clean', body: 'Most Waco homes need soft wash every 12–24 months depending on trees and shade.' },
      { icon: faExclamationTriangle, title: 'Paint looks dull or chalky with growth', body: 'Organics accelerate coating failure — clean before you repaint, not after.' },
    ],
  },
  {
    type: 'table',
    heading: 'Soft Wash vs High Pressure on Siding',
    tableHeaders: ['Factor', 'Soft Wash', 'High Pressure Only'],
    tableRows: [
      ['Risk to paint/siding', 'Low', 'High — can force water behind panels'],
      ['Kills mold at the root', 'Yes', 'Often just blasts surface dirt'],
      ['Best for vinyl & fiber cement', 'Yes', 'No'],
      ['Plant safety', 'With proper prep', 'Overspray risk higher'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Soft wash first, then decide on paint. Cleaning often restores curb appeal enough to delay a full repaint by years.',
  },
  {
    type: 'tips',
    heading: 'What to Do Next in Waco',
    items: [
      'Walk the north and east elevations after rain — growth shows best when wet',
      'Ask for a flat-rate soft wash quote that includes plant protection',
      'Bundle gutters if overflow is staining siding',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="7 Signs Your Siding Needs a Soft Wash in Waco, TX"
        description="Central Texas humidity feeds mold and mildew on siding. Here are the clear warning signs it’s time for a professional soft wash."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Signs your siding needs a soft wash in Waco TX"
        category="House Washing"
        date="April 18, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready for a Soft Wash in Waco?"
        body="Get a free flat-rate estimate from AquaBlast — licensed, bonded crews with a free re-clean guarantee."
        buttonText="Get Free Estimate"
        buttonHref="/services/house-washing/waco-tx"
      />
      <NewsletterSignup variant={1} spot="siding-soft-wash-blog" />
    </>
  );
}
