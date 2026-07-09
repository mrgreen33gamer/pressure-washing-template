// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for AquaBlast Pressure Washing — used by Testimonials
// component, schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'House Washing',
    text:     "Our siding was gray with mildew after years of Central Texas humidity. AquaBlast soft-washed the whole house in one afternoon and it looks brand-new. Crew was careful around the landscaping and the price was exactly what they quoted. Highly recommend.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Driveway & Concrete',
    text:     'Oil stains and black mold had taken over our driveway. AquaBlast blasted it clean — looks like we just poured new concrete. Showed up on time, finished fast, fair price. This is the kind of service you tell your neighbors about.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Roof Cleaning',
    text:     'Black algae streaks made our roof look 20 years older. They used a soft wash that killed the algae without damaging the shingles. Difference is night and day. Cody walked me through the whole process — no pressure sales, just straight talk.',
  },
  {
    name:     'Patricia L.',
    location: 'Robinson, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Deck & Fence Cleaning',
    text:     'Had three companies quote us on cleaning and sealing our cedar fence. AquaBlast was honest about what it needed and didn\'t try to upsell a full restain we didn\'t want yet. Fence looks fantastic and they left zero mess.',
  },
  {
    name:     'David M.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Gutter Cleaning',
    text:     'Gutters were overflowing every storm. They cleared every downspout, flushed the lines, and even pointed out a loose hanger. Great crew, very professional, and the house stopped getting waterfall damage. Will use them every spring.',
  },
  {
    name:     'Angela W.',
    location: 'Temple, TX',
    rating:   5,
    date:     'October 2025',
    service:  'House Washing',
    text:     'Booked a full house wash before listing our home. They squeezed us in same week, did a meticulous job, and the curb appeal jump was immediate. No after-hours gouge either — totally fair rate. My new pressure washing company for life.',
  },
  {
    name:     'Robert H.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Commercial Pressure Washing',
    text:     'We hired AquaBlast to clean our storefront sidewalks and parking pad over a weekend so we wouldn\'t lose business hours. They finished ahead of schedule and the finish quality is excellent. Patient, professional crew. Highly recommend.',
  },
  {
    name:     'Cheryl B.',
    location: 'Waco, TX',
    rating:   5,
    date:     'August 2025',
    service:  'House Washing',
    text:     'Called them about green algae on the north side of our house. They treated it carefully, protected the flower beds, and came back a week later for a free spot touch-up when I noticed a streak. That re-clean guarantee is real. Thank you.',
  },
];

export default reviews;
