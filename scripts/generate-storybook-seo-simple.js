#!/usr/bin/env node

/**
 * Simple SEO files generator for Storybook build
 * Creates sitemap.xml and robots.txt for better search engine optimization
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STORYBOOK_BUILD_DIR = path.join(__dirname, '..', 'storybook-static');
const BASE_URL = 'https://aki-ui.akitect.io';

console.log('🔧 Generating SEO files for Storybook...');

// Simple sitemap generation
const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/?path=/docs/introduction--docs</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

    fs.writeFileSync(path.join(STORYBOOK_BUILD_DIR, 'sitemap.xml'), sitemap);
    console.log('✅ Generated sitemap.xml');
};

// Simple robots.txt generation
const generateRobots = () => {
    const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`;

    fs.writeFileSync(path.join(STORYBOOK_BUILD_DIR, 'robots.txt'), robots);
    console.log('✅ Generated robots.txt');
};

try {
    if (!fs.existsSync(STORYBOOK_BUILD_DIR)) {
        console.error('❌ Storybook build directory not found:', STORYBOOK_BUILD_DIR);
        process.exit(1);
    }

    generateSitemap();
    generateRobots();

    console.log('🎉 SEO files generated successfully!');
} catch (error) {
    console.error('❌ Error generating SEO files:', error);
    process.exit(1);
}
