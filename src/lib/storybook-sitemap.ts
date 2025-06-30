/**
 * Generate sitemap for Storybook stories
 * This helps search engines discover and index component documentation
 */

import { componentSEOData } from "./storybook-seo";

export const generateStorybookSitemap = (
  baseUrl: string = "https://aki-ui.akitect.io"
) => {
  const currentDate = new Date().toISOString().split("T")[0];

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      changefreq: "weekly",
      priority: "1.0",
      lastmod: currentDate,
    },
    {
      url: `${baseUrl}/?path=/docs/introduction--docs`,
      changefreq: "monthly",
      priority: "0.9",
      lastmod: currentDate,
    },
  ];

  // Component pages
  const componentPages = Object.keys(componentSEOData).map((componentName) => ({
    url: `${baseUrl}/?path=/docs/components-${componentName.toLowerCase()}--docs`,
    changefreq: "weekly",
    priority: "0.8",
    lastmod: currentDate,
  }));

  // Story pages (examples)
  const storyPages = Object.keys(componentSEOData).flatMap((componentName) => [
    {
      url: `${baseUrl}/?path=/story/components-${componentName.toLowerCase()}--default`,
      changefreq: "monthly",
      priority: "0.6",
      lastmod: currentDate,
    },
  ]);

  const allPages = [...mainPages, ...componentPages, ...storyPages];

  // Generate XML sitemap
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return sitemapXml;
};

/**
 * Generate robots.txt for Storybook
 */
export const generateStorybookRobots = (
  baseUrl: string = "https://aki-ui.akitect.io"
) => {
  return `User-agent: *
Allow: /

# Main sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Disallow iframe content that shouldn't be indexed directly
Disallow: /iframe.html*

# Allow all story and documentation paths
Allow: /?path=/docs/*
Allow: /?path=/story/*

# SEO-friendly paths
Allow: /assets/*
Allow: /*.css
Allow: /*.js
Allow: /*.svg
Allow: /*.png
Allow: /*.jpg
Allow: /*.jpeg`;
};

/**
 * Generate structured data for component collection
 */
export const generateComponentCollectionStructuredData = () => {
  const components = Object.entries(componentSEOData).map(([name, data]) => ({
    "@type": "SoftwareApplication",
    name: `${data.componentName} Component`,
    description: data.componentDescription,
    applicationCategory: "WebApplication",
    url: `https://aki-ui.akitect.io/?path=/docs/components-${name.toLowerCase()}--docs`,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Aki UI React Components",
    description:
      "Collection of modern React UI components with TypeScript support",
    numberOfItems: components.length,
    itemListElement: components.map((component, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: component,
    })),
  };
};
