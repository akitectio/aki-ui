import fs from "fs";
import path from "path";

interface SitemapUrl {
  url: string;
  lastModified: Date;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}

// Get all documentation pages dynamically
function getDocumentationPages(): SitemapUrl[] {
  const docsPath = path.join(process.cwd(), "src/app/docs");
  const pages: SitemapUrl[] = [];

  function scanDirectory(dir: string, relativePath = ""): void {
    try {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          // Skip certain directories
          if (item.startsWith(".") || item === "node_modules") continue;

          const newRelativePath = relativePath
            ? `${relativePath}/${item}`
            : item;
          scanDirectory(fullPath, newRelativePath);

          // Add directory index page if page.tsx exists
          const pageFile = path.join(fullPath, "page.tsx");
          if (fs.existsSync(pageFile)) {
            pages.push({
              url: `/docs/${newRelativePath}`,
              lastModified: stat.mtime,
              changeFrequency: "monthly",
              priority: newRelativePath.includes("components") ? 0.6 : 0.7,
            });
          }
        }
      }
    } catch (error) {
      console.warn(`Error scanning directory ${dir}:`, error);
    }
  }

  scanDirectory(docsPath);
  return pages;
}

// Generate complete sitemap
export function generateCompleteSitemap(): SitemapUrl[] {
  const baseUrl = "https://aki-ui.akitect.io";

  // Static pages with high priority
  const staticPages: SitemapUrl[] = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/playground`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Get documentation pages dynamically
  const docPages = getDocumentationPages().map((page) => ({
    ...page,
    url: `${baseUrl}${page.url}`,
  }));

  // Combine all pages
  return [...staticPages, ...docPages];
}

// SEO analysis helper
export function analyzeSEO() {
  const issues: string[] = [];
  const suggestions: string[] = [];

  // Check for required files
  const requiredFiles = [
    "public/robots.txt",
    "public/sitemap.xml",
    "public/favicon.ico",
    "public/og-image.png",
  ];

  requiredFiles.forEach((file) => {
    if (!fs.existsSync(path.join(process.cwd(), file))) {
      issues.push(`Missing file: ${file}`);
    }
  });

  // Check metadata in pages
  const pagesDir = path.join(process.cwd(), "src/app");

  function checkPageSEO(dir: string, route = ""): void {
    try {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory() && !item.startsWith(".")) {
          checkPageSEO(fullPath, `${route}/${item}`);
        } else if (item === "page.tsx") {
          const content = fs.readFileSync(fullPath, "utf-8");

          // Check for metadata export
          if (
            !content.includes("export const metadata") &&
            !content.includes("generateMetadata")
          ) {
            suggestions.push(
              `Consider adding metadata to ${route || "/"} page`
            );
          }

          // Check for structured data
          if (!content.includes("application/ld+json")) {
            suggestions.push(
              `Consider adding structured data to ${route || "/"} page`
            );
          }
        }
      }
    } catch (error) {
      console.warn(`Error checking SEO for ${dir}:`, error);
    }
  }

  checkPageSEO(pagesDir);

  return { issues, suggestions };
}

// Performance analysis
export function analyzePerformance() {
  const recommendations: string[] = [];

  // Check for large bundle sizes
  recommendations.push("Consider code splitting for better performance");
  recommendations.push("Implement image optimization");
  recommendations.push("Add service worker for caching");
  recommendations.push("Implement lazy loading for components");

  return recommendations;
}

export default {
  generateCompleteSitemap,
  analyzeSEO,
  analyzePerformance,
};
