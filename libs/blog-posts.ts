// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'signs-your-siding-needs-a-soft-wash-waco-tx',
    title:    '7 Signs Your Siding Needs a Soft Wash in Waco, TX (Not Just a Rinse)',
    excerpt:  'Central Texas humidity feeds mold and mildew on siding long before most homeowners notice. Here are the 7 clear warning signs it’s time for a professional soft wash.',
    category: 'House Washing',
    date:     'April 18, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Signs your siding needs a soft wash in Waco TX',
    featured: true,
  },
  {
    slug:     'how-often-should-you-pressure-wash-your-driveway',
    title:    'How Often Should You Pressure Wash Your Driveway in Central Texas?',
    excerpt:  'Texas sun, oil drips, and shade mold shorten the life of concrete curb appeal. Here’s the honest cleaning schedule for Waco, Temple, and Killeen driveways.',
    category: 'Driveway',
    date:     'April 14, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/hvac-filter.jpg',
    imageAlt: 'How often to pressure wash a driveway in Central Texas',
  },
  {
    slug:     'soft-washing-vs-pressure-washing-whats-the-difference',
    title:    'Soft Washing vs. Pressure Washing: What’s the Difference for Texas Homes?',
    excerpt:  'High pressure isn’t always better. Here’s when soft wash protects siding and roofs — and when high pressure is the right tool for concrete.',
    category: 'Education',
    date:     'April 10, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Soft washing vs pressure washing comparison for Texas homes',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
