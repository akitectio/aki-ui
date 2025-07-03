#!/usr/bin/env node

/**
 * Generate sitemap.xml for Aki UI website
 * Updates lastmod with current date and includes all main pages
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://aki-ui.akitect.io';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const WEBSITE_OUT_DIR = path.join(__dirname, '..', 'website', 'out');

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
    return new Date().toISOString().split('T')[0];
};

// Get all component names from the library
const getComponentNames = () => {
    const componentsDir = path.join(__dirname, '..', 'src', 'lib', 'components');
    try {
        const items = fs.readdirSync(componentsDir, { withFileTypes: true });
        return items
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name)
            .filter(name => !name.startsWith('.') && name !== 'index.ts')
            .sort();
    } catch (error) {
        console.warn('Could not read components directory:', error);
        return [];
    }
};

// Get all documentation pages from website
const getDocumentationPages = () => {
    const docsDir = path.join(__dirname, '..', 'website', 'src', 'app', 'docs');
    const pages = [];

    const scanDirectory = (dir, basePath = '/docs') => {
        try {
            const items = fs.readdirSync(dir, { withFileTypes: true });

            for (const item of items) {
                if (item.isDirectory() && !item.name.startsWith('.')) {
                    const itemPath = path.join(dir, item.name);
                    const routePath = `${basePath}/${item.name}`;

                    // Check if directory has a page.tsx
                    const pageFile = path.join(itemPath, 'page.tsx');
                    if (fs.existsSync(pageFile)) {
                        pages.push(routePath);
                    }

                    // Recursively scan subdirectories
                    scanDirectory(itemPath, routePath);
                }
            }
        } catch (error) {
            console.warn(`Could not scan directory ${dir}:`, error);
        }
    };

    // Add main docs page
    const mainPageFile = path.join(docsDir, 'page.tsx');
    if (fs.existsSync(mainPageFile)) {
        pages.push('/docs');
    }

    scanDirectory(docsDir);
    return pages.sort();
};

// Generate sitemap content
const generateSitemap = () => {
    const currentDate = getCurrentDate();
    const components = getComponentNames();
    const docPages = getDocumentationPages();

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Main Pages -->
    <url>
        <loc>${BASE_URL}/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${BASE_URL}/playground</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>${BASE_URL}/storybook</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>`;

    // Add documentation pages
    sitemap += `\n    <!-- Documentation Pages -->`;
    for (const docPage of docPages) {
        const priority = docPage === '/docs' ? 0.9 :
            docPage.includes('/components') ? 0.8 : 0.7;
        const changefreq = docPage.includes('/components') ? 'weekly' : 'monthly';

        sitemap += `
    <url>
        <loc>${BASE_URL}${docPage}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`;
    }

    // Add component showcase pages (if they exist as separate routes)
    sitemap += `\n    <!-- Component Showcase -->`;
    for (const component of components) {
        const componentSlug = component.toLowerCase();
        sitemap += `
    <url>
        <loc>${BASE_URL}/docs/components/${componentSlug}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`;
    }

    sitemap += `
</urlset>`;

    return sitemap;
};

// Generate robots.txt content
const generateRobots = () => {
    return `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`;
};

// Main function
const main = () => {
    try {
        const components = getComponentNames();
        const docPages = getDocumentationPages();
        const sitemapContent = generateSitemap();
        const robotsContent = generateRobots();

        // Write to public directory (for main build)
        if (fs.existsSync(PUBLIC_DIR)) {
            fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapContent);
            fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsContent);
            console.log('✅ Generated sitemap.xml and robots.txt in public/');
        }

        // Write to website out directory (if exists, for deployment)
        if (fs.existsSync(WEBSITE_OUT_DIR)) {
            fs.writeFileSync(path.join(WEBSITE_OUT_DIR, 'sitemap.xml'), sitemapContent);
            fs.writeFileSync(path.join(WEBSITE_OUT_DIR, 'robots.txt'), robotsContent);
            console.log('✅ Generated sitemap.xml and robots.txt in website/out/');
        }

        console.log(`📅 Last modified: ${getCurrentDate()}`);
        console.log(`🌍 Base URL: ${BASE_URL}`);
        console.log(`📊 Generated ${docPages.length} documentation pages`);
        console.log(`🧩 Generated ${components.length} component pages`);
        console.log(`📄 Total URLs: ${docPages.length + components.length + 3} (+ main pages)`);

    } catch (error) {
        console.error('❌ Error generating sitemap:', error);
        process.exit(1);
    }
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    main();
}

export { generateSitemap, generateRobots };
