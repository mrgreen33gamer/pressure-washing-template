// src/app/sitemap.xml/route.ts
// AquaBlast Pressure Washing — XML Sitemap
import { NextResponse } from 'next/server';
import { getAllPosts } from '&/blog-posts';

export const revalidate = 0;

export async function GET() {
  const baseUrl = 'https://www.aquablastpw.com';
  const today   = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/',               priority: '1.0',  changefreq: 'weekly'  },
    { url: '/about',          priority: '0.9',  changefreq: 'monthly' },
    { url: '/services',       priority: '0.9',  changefreq: 'weekly'  },
    { url: '/industries',     priority: '0.85', changefreq: 'monthly' },
    { url: '/service-areas',  priority: '0.85', changefreq: 'monthly' },
    { url: '/projects',       priority: '0.85', changefreq: 'weekly'  },
    { url: '/contact',        priority: '0.8',  changefreq: 'monthly' },
    { url: '/blogs',          priority: '0.7',  changefreq: 'weekly'  },
    { url: '/privacy-policy', priority: '0.4',  changefreq: 'yearly'  },
  ];

  const coreServices = [
    'house-washing',
    'gutter-cleaning',
    'roof-cleaning',
    'deck-fence-cleaning',
    'driveway-concrete-cleaning',
    'commercial-pressure-washing',
  ].map(slug => ({
    url: `/services/${slug}`,
    priority: '0.95',
    changefreq: 'weekly',
  }));

  const cities = ['waco-tx', 'temple-tx', 'killeen-tx'];
  const serviceCities = coreServices.flatMap(svc =>
    cities.map(city => ({
      url: `${svc.url}/${city}`,
      priority: city === 'waco-tx' ? '0.90' : '0.85',
      changefreq: 'weekly',
    }))
  );

  const industries = [
    'property-management-hoas',
    'restaurants-hospitality',
    'retail-commercial-real-estate',
  ].map(slug => ({
    url: `/industries/${slug}`,
    priority: '0.80',
    changefreq: 'monthly',
  }));

  const blogPages = getAllPosts().map((post: { slug: string }) => ({
    url: `/blogs/${post.slug}`,
    priority: '0.70',
    changefreq: 'monthly',
  }));

  const allPages = [
    ...staticPages,
    ...coreServices,
    ...serviceCities,
    ...industries,
    ...blogPages,
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  allPages.forEach(({ url, priority, changefreq }) => {
    xml += `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  });

  xml += '</urlset>';

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
