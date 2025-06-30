export async function GET() {
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://aki-ui.akitect.io/sitemap.xml

# Specific rules for search engines
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Block unnecessary files
Disallow: /api/
Disallow: /_next/
Disallow: /node_modules/
Disallow: /*.json$

# Allow important assets
Allow: /images/
Allow: /icons/
Allow: /*.css$
Allow: /*.js$

# Performance and Analytics
User-agent: *
Disallow: /admin/
Disallow: /private/
`.trim();

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
