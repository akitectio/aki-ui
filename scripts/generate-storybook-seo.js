#!/usr/bin/env node

/**
 * Generate SEO files for Storybook build
 * Creates sitemap.xml and robots.txt for better search engine optimization
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateStorybookSitemap, generateStorybookRobots } from '../src/lib/storybook-seo.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STORYBOOK_BUILD_DIR = path.join(__dirname, '..', 'storybook-static');
const BASE_URL = 'https://aki-ui.akitect.io';

console.log('🔧 Generating SEO files for Storybook...');

// Ensure storybook build directory exists
if (!fs.existsSync(STORYBOOK_BUILD_DIR)) {
  console.error('❌ Storybook build directory not found. Please run "npm run build-storybook" first.');
  process.exit(1);
}

try {
  // Generate sitemap.xml
  const sitemapContent = generateStorybookSitemap(BASE_URL);
  const sitemapPath = path.join(STORYBOOK_BUILD_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');
  console.log('✅ Generated sitemap.xml');

  // Generate robots.txt
  const robotsContent = generateStorybookRobots(BASE_URL);
  const robotsPath = path.join(STORYBOOK_BUILD_DIR, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsContent, 'utf-8');
  console.log('✅ Generated robots.txt');

  // Update HTML files with canonical URLs and improved meta tags
  const htmlFiles = fs.readdirSync(STORYBOOK_BUILD_DIR)
    .filter(file => file.endsWith('.html') && file !== 'iframe.html');

  htmlFiles.forEach(htmlFile => {
    const htmlPath = path.join(STORYBOOK_BUILD_DIR, htmlFile);
    let htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    // Add canonical URL
    if (!htmlContent.includes('<link rel="canonical"')) {
      const canonicalUrl = htmlFile === 'index.html' ? BASE_URL : `${BASE_URL}/${htmlFile}`;
      const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />`;
      htmlContent = htmlContent.replace('</head>', `  ${canonicalTag}\n</head>`);
    }

    // Improve title tag for better SEO
    if (htmlFile === 'index.html') {
      htmlContent = htmlContent.replace(
        /<title>.*?<\/title>/,
        '<title>Aki UI - Modern React Component Library | Interactive Documentation</title>'
      );
    }

    // Add schema.org markup for component library
    if (!htmlContent.includes('application/ld+json')) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Aki UI Component Library",
        "description": "Interactive documentation and examples for Aki UI React components",
        "url": BASE_URL,
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${BASE_URL}/?search={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      };

      const scriptTag = `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
      htmlContent = htmlContent.replace('</head>', `  ${scriptTag}\n</head>`);
    }

    fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
  });

  console.log('✅ Updated HTML files with SEO improvements');

  // Generate and update component count
  const componentCount = Object.keys(await import('../src/lib/storybook-seo.js')).length;
  console.log(`📊 Documentation covers ${componentCount} components`);

  console.log('🎉 SEO optimization complete!');
  console.log(`📍 Sitemap available at: ${BASE_URL}/sitemap.xml`);
  console.log(`🤖 Robots.txt available at: ${BASE_URL}/robots.txt`);

} catch (error) {
  console.error('❌ Error generating SEO files:', error);
  process.exit(1);
}
