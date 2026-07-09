// libs/local-db/projects.ts
// Completed AquaBlast jobs for the /projects page.

export type ProjectCategory =
  | 'House Washing'
  | 'Roof Cleaning'
  | 'Driveway & Concrete'
  | 'Deck & Fence'
  | 'Commercial'
  | 'Gutter Cleaning';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  category: ProjectCategory;
  year: string;
  shortDesc: string;
  fullDesc: string;
  result: string;
  tags: string[];
  images: ProjectImage[];
  beforeImage?: ProjectImage;
  afterImage?: ProjectImage;
  duration?: string;
  featured?: boolean;
  liveUrl?: string;
  offline?: boolean;
}

const g = (n: string) => `/projects/gallery/${n}`;

const houseWashing: Project[] = [
  {
    id: 'woodway-full-house-soft-wash',
    title: 'Woodway Full-House Soft Wash',
    client: 'Private Residence',
    location: 'Woodway, TX',
    category: 'House Washing',
    year: '2026',
    duration: '4 hours',
    shortDesc: 'Two-story fiber-cement home soft-washed end-to-end — mildew, pollen film, and spider webs gone without high-pressure damage.',
    fullDesc: 'The homeowners had deferred exterior cleaning for three years. North-facing elevations were heavily mildewed. We pre-wet landscaping, soft-washed all elevations with plant-safe solution, rinsed windows and fixtures, and walked the property with the owners. Zero paint lift, zero plant damage, free re-clean guarantee on file.',
    result: 'Like-New Siding',
    tags: ['Soft Wash', 'Two-Story', 'Woodway'],
    images: [
      { src: g('2.png'), alt: 'Woodway house washing after soft wash' },
      { src: g('3.png'), alt: 'Clean siding detail' },
    ],
    beforeImage: { src: g('4.png'), alt: 'Before — mildew on siding' },
    afterImage:  { src: g('2.png'), alt: 'After — soft-washed siding' },
    featured: true,
  },
  {
    id: 'hewitt-brick-soft-wash',
    title: 'Hewitt Brick Home Soft Wash',
    client: 'Private Residence',
    location: 'Hewitt, TX',
    category: 'House Washing',
    year: '2025',
    duration: '3 hours',
    shortDesc: 'Single-story brick home with heavy organic growth on the north wall and soffits — restored without blasting mortar joints.',
    fullDesc: 'Brick and mortar need controlled chemistry, not maximum PSI. We soft-washed organic growth, cleaned soffits and gutters as an add-on, and left the property dry and tidy for an evening open house.',
    result: 'Open-House Ready',
    tags: ['Brick', 'Soft Wash', 'Hewitt'],
    images: [{ src: g('5.png'), alt: 'Hewitt brick home after cleaning' }],
    beforeImage: { src: g('7.png'), alt: 'Before brick mildew' },
    afterImage:  { src: g('5.png'), alt: 'After brick soft wash' },
  },
];

const roofCleaning: Project[] = [
  {
    id: 'waco-shingle-algae-treatment',
    title: 'Waco Shingle Algae Treatment',
    client: 'Private Residence',
    location: 'Waco, TX',
    category: 'Roof Cleaning',
    year: '2026',
    duration: 'Half day',
    shortDesc: 'Black algae streaks cleared from a 12-year asphalt roof with soft wash — no high-pressure granule loss.',
    fullDesc: 'Gloeocapsa magma streaks made the roof look decades older. We soft-washed the full field, protected landscaping, flushed gutters after treatment, and explained the multi-week fade-out as dead algae releases. Homeowner curb appeal improved dramatically within days.',
    result: 'Algae Root-Killed',
    tags: ['Soft Wash', 'Asphalt Shingles', 'Waco'],
    images: [{ src: g('ertret.png'), alt: 'Roof after soft wash treatment' }],
    beforeImage: { src: g('etru7.png'), alt: 'Before black algae streaks' },
    afterImage:  { src: g('ertret.png'), alt: 'After roof soft wash' },
    featured: true,
  },
];

const driveway: Project[] = [
  {
    id: 'robinson-oil-driveway',
    title: 'Robinson Oil-Stained Driveway',
    client: 'Private Residence',
    location: 'Robinson, TX',
    category: 'Driveway & Concrete',
    year: '2025',
    duration: '2 hours',
    shortDesc: 'Two-car concrete driveway with embedded oil spots and tire marks restored with degreaser pre-treat and surface cleaning.',
    fullDesc: 'Heavy petroleum staining required chemical dwell time before high-pressure surface cleaning. We set honest expectations on deep-set oil shadows, then delivered a bright, even finish across the full pad and apron.',
    result: 'Oil Stains Lifted',
    tags: ['Driveway', 'Oil Stains', 'Robinson'],
    images: [{ src: g('ewew.png'), alt: 'Clean driveway after pressure washing' }],
    beforeImage: { src: g('gythgnb.png'), alt: 'Before oil-stained driveway' },
    afterImage:  { src: g('ewew.png'), alt: 'After driveway cleaning' },
  },
  {
    id: 'temple-sidewalk-patio',
    title: 'Temple Sidewalk & Patio Clean',
    client: 'Private Residence',
    location: 'Temple, TX',
    category: 'Driveway & Concrete',
    year: '2025',
    duration: '3 hours',
    shortDesc: 'Front sidewalk, porch, and rear patio cleaned as a package — mildew and leaf tannins removed.',
    fullDesc: 'Shaded hardscape was slick with mildew. We cleaned sidewalks, porch, and patio with surface cleaners for even results, then advised on annual maintenance before the next wet season.',
    result: 'Slip Risk Reduced',
    tags: ['Patio', 'Sidewalk', 'Temple'],
    images: [{ src: g('htf.png'), alt: 'Clean patio and sidewalk' }],
  },
];

const deckFence: Project[] = [
  {
    id: 'china-spring-cedar-fence',
    title: 'China Spring Cedar Fence Restore',
    client: 'Private Residence',
    location: 'China Spring, TX',
    category: 'Deck & Fence',
    year: '2025',
    duration: 'Half day',
    shortDesc: '160 linear feet of weathered cedar fence cleaned and prepped for sealing the following weekend.',
    fullDesc: 'UV graying and mildew made the fence look abandoned. Controlled cleaning lifted organics without fuzzying the softwood. Owner sealed two days later for a multi-year finish.',
    result: 'Seal-Ready Wood',
    tags: ['Cedar Fence', 'Prep for Seal', 'China Spring'],
    images: [{ src: g('iou.png'), alt: 'Cedar fence after cleaning' }],
    beforeImage: { src: g('iytyuhn.png'), alt: 'Before weathered fence' },
    afterImage:  { src: g('iou.png'), alt: 'After fence cleaning' },
  },
];

const commercial: Project[] = [
  {
    id: 'killeen-storefront-weekend',
    title: 'Killeen Storefront Weekend Clean',
    client: 'Retail Tenant',
    location: 'Killeen, TX',
    category: 'Commercial',
    year: '2026',
    duration: 'Night shift',
    shortDesc: 'Storefront sidewalks, entry canopy, and parking pad cleaned overnight so Monday foot traffic saw a fresh face.',
    fullDesc: 'Retail management needed curb appeal before a regional visit. We scheduled a Sunday night clean, degreased the dumpster pad, surface-cleaned the parking apron, and soft-washed the storefront brick. COI on file before arrival.',
    result: 'Monday-Ready',
    tags: ['Retail', 'Night Work', 'Killeen'],
    images: [{ src: g('jyfhtgb.png'), alt: 'Clean commercial storefront' }],
    featured: true,
  },
  {
    id: 'waco-hoa-quarterly',
    title: 'Waco HOA Quarterly Program',
    client: 'HOA Management Co.',
    location: 'Waco, TX',
    category: 'Commercial',
    year: '2025',
    duration: 'Recurring',
    shortDesc: 'Quarterly common-area package: sidewalks, dumpster pads, amenity deck, and clubhouse exterior.',
    fullDesc: 'Property management needed predictable pricing and consistent crews. We locked a quarterly scope with photo documentation after each visit and board-ready invoices. Resident complaints about dirty common areas dropped to near zero.',
    result: 'Recurring Program',
    tags: ['HOA', 'Recurring', 'Waco'],
    images: [{ src: g('kgh.png'), alt: 'HOA common area after cleaning' }],
  },
];

const gutters: Project[] = [
  {
    id: 'woodway-gutter-flush',
    title: 'Woodway Full Gutter Flush',
    client: 'Private Residence',
    location: 'Woodway, TX',
    category: 'Gutter Cleaning',
    year: '2025',
    duration: '2 hours',
    shortDesc: 'Two-story gutters cleared and downspouts flushed after overflow stained the fascia and landscaping.',
    fullDesc: 'Overflow was eroding beds and staining siding. We cleared every run, flushed downspouts, reseated a loose hanger, and recommended a soft wash for splash-stained elevations.',
    result: 'Flow Restored',
    tags: ['Gutters', 'Two-Story', 'Woodway'],
    images: [{ src: g('liukj.png'), alt: 'Gutters cleaned and flushed' }],
  },
];

export const ALL_PROJECTS: Project[] = [
  ...houseWashing,
  ...roofCleaning,
  ...driveway,
  ...deckFence,
  ...commercial,
  ...gutters,
];

export const PROJECTS_BY_CATEGORY: Record<ProjectCategory, Project[]> = {
  'House Washing':        houseWashing,
  'Roof Cleaning':        roofCleaning,
  'Driveway & Concrete':  driveway,
  'Deck & Fence':         deckFence,
  'Commercial':           commercial,
  'Gutter Cleaning':      gutters,
};

export const CATEGORIES: ProjectCategory[] = [
  'House Washing',
  'Roof Cleaning',
  'Driveway & Concrete',
  'Deck & Fence',
  'Commercial',
  'Gutter Cleaning',
];

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.id === slug);
}

export default ALL_PROJECTS;
