const BASE_URL = 'https://thrivingindividuals.org';

// Add any pages that should be excluded from the sitemap here
const EXCLUDED_ROUTES = [
  '/confirm-subscription',
  '/pb/_',
  '/framework',
  '/partnerships',
];

// List your static page routes here
// Routes derived from the file search (adjust if needed)
const staticPages = [
  '/',
  '/join',
  '/team',
  '/contact',
  '/support',
  '/projects',
  '/framework',
  '/partnerships',
  '/projects/joint',
  // Add any other static pages found if the search missed them
].filter(page => !EXCLUDED_ROUTES.includes(page));

// If you had dynamic routes (e.g., blog posts), you would fetch them here
// Example: const dynamicPosts = await fetchBlogPosts();

export async function GET() {
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600', // Cache for 1 hour
    'Content-Type': 'application/xml',
  };

  let xml = `<?xml version="1.0" encoding="UTF-8" ?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  for (const page of staticPages) {
    xml += `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <priority>${page === '/' ? '1.0' : '0.7'}</priority>
    <changefreq>monthly</changefreq>
  </url>`;
  }

  // Add dynamic pages (if any)
  // Example:
  // for (const post of dynamicPosts) {
  //   xml += `
  // <url>
  //   <loc>${BASE_URL}/blog/${post.slug}</loc>
  //   <priority>0.5</priority>
  //   <lastmod>${new Date(post.updatedAt).toISOString().split('T')[0]}</lastmod>
  //   <changefreq>weekly</changefreq>
  // </url>`;
  // }

  xml += `\n</urlset>`;

  return new Response(xml, { headers });
} 