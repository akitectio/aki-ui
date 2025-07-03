import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export const useSEO = ({
  title = "Aki UI - Modern React Component Library",
  description = "Build beautiful, accessible React applications with Aki UI. A comprehensive component library with TypeScript support, responsive design, and modern styling.",
  keywords = "react, component library, ui library, typescript, tailwind css, accessibility, responsive design",
  ogTitle,
  ogDescription,
  ogImage = "/aki-ui-banner.png",
  ogType = "website",
  canonicalUrl,
  structuredData,
}: SEOProps = {}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (
      property: string,
      content: string,
      isProperty = false
    ) => {
      const selector = isProperty
        ? `meta[property="${property}"]`
        : `meta[name="${property}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        if (isProperty) {
          meta.setAttribute("property", property);
        } else {
          meta.setAttribute("name", property);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Open Graph tags
    updateMetaTag("og:title", ogTitle || title, true);
    updateMetaTag("og:description", ogDescription || description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:site_name", "Aki UI", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", ogTitle || title);
    updateMetaTag("twitter:description", ogDescription || description);
    updateMetaTag("twitter:image", ogImage);

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      const existingScript = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Clean up function
    return () => {
      // Optionally clean up dynamic meta tags when component unmounts
    };
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    canonicalUrl,
    structuredData,
  ]);
};

// Pre-defined SEO configurations for different pages
export const SEO_CONFIGS = {
  home: {
    title: "Aki UI - Modern React Component Library",
    description:
      "Build beautiful, accessible React applications with Aki UI. A comprehensive component library with TypeScript support, responsive design, and modern styling.",
    keywords:
      "react, component library, ui library, typescript, tailwind css, accessibility, responsive design",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Aki UI",
      description:
        "Modern React Component Library for building beautiful applications",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      programmingLanguage: "JavaScript",
      author: {
        "@type": "Organization",
        name: "Akitect.io",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  },

  components: {
    title: "React Components - Aki UI Component Library",
    description:
      "Browse 16+ production-ready React components. Buttons, forms, cards, data tables and more. Copy-paste examples with TypeScript support.",
    keywords:
      "react components, button component, form components, card component, data table, ui components, react library",
    ogTitle: "React Components Library - Aki UI",
    ogDescription:
      "Discover 16+ production-ready React components with examples and documentation.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Aki UI React Components",
      description: "Collection of React components for modern web development",
      numberOfItems: 16,
      itemListElement: [
        {
          "@type": "SoftwareSourceCode",
          name: "Button Component",
          description: "Interactive button component with multiple variants",
        },
        {
          "@type": "SoftwareSourceCode",
          name: "Card Component",
          description: "Flexible content container component",
        },
        {
          "@type": "SoftwareSourceCode",
          name: "Form Components",
          description: "Input, select, checkbox and form controls",
        },
      ],
    },
  },

  docs: {
    title: "Documentation - Aki UI React Component Library",
    description:
      "Complete documentation for Aki UI React components. Installation guide, examples, API reference, and customization options.",
    keywords:
      "aki ui documentation, react component docs, installation guide, api reference, component examples",
    ogTitle: "Aki UI Documentation - React Component Library",
    ogDescription:
      "Complete guide to using Aki UI React components in your projects.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: "Aki UI Documentation",
      description: "Complete documentation for Aki UI React component library",
      author: {
        "@type": "Organization",
        name: "Akitect.io",
      },
      datePublished: "2025-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    },
  },

  templates: {
    title: "React Templates - Aki UI Ready-to-use Templates",
    description:
      "Pre-built React templates and layouts using Aki UI components. Dashboard, landing page, admin panel templates ready to customize.",
    keywords:
      "react templates, dashboard template, admin template, landing page template, react layouts",
    ogTitle: "React Templates - Aki UI",
    ogDescription: "Ready-to-use React templates built with Aki UI components.",
  },

  playground: {
    title: "Playground - Test Aki UI Components Online",
    description:
      "Interactive playground to test and experiment with Aki UI React components. Live code editor with real-time preview.",
    keywords:
      "react playground, component testing, live editor, code playground, react components demo",
    ogTitle: "Aki UI Playground - Test Components Online",
    ogDescription:
      "Interactive playground to test Aki UI React components with live preview.",
  },
};
