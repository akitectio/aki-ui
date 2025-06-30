import { pageSEOConfigs } from "@/lib/seo";

export async function GET() {
  const baseUrl = "https://aki-ui.akitect.io";
  const currentDate = new Date().toISOString();

  // Generate sitemap entries from SEO configs
  const staticPages = Object.keys(pageSEOConfigs)
    .map((path) => {
      const priority =
        path === "/"
          ? "1.0"
          : path.includes("/docs/components/")
          ? "0.8"
          : path.includes("/docs/")
          ? "0.9"
          : "0.7";

      const changefreq = path === "/" ? "weekly" : "monthly";

      return `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${staticPages}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
