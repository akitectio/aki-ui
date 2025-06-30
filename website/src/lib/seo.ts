import { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image = "/og-image.png",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: SEOProps = {}): Metadata {
  const baseUrl = "https://aki-ui.akitect.io";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;

  const defaultTitle = "Aki UI - Modern React Component Library";
  const defaultDescription =
    "A comprehensive, accessible, and customizable React component library built for modern applications. Featuring AI-powered integration, TypeScript support, and Tailwind CSS styling.";

  const seoTitle = title ? `${title} | Aki UI` : defaultTitle;
  const seoDescription = description || defaultDescription;

  const defaultKeywords = [
    "React",
    "Components",
    "UI Library",
    "TypeScript",
    "Tailwind CSS",
    "Accessibility",
    "Modern UI",
    "Component Library",
    "AI Integration",
    "MCP Support",
    "Design System",
    "Frontend Framework",
  ];

  const allKeywords = [...defaultKeywords, ...keywords];

  const metadata: Metadata = {
    title: seoTitle,
    description: seoDescription,
    keywords: allKeywords,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: fullUrl,
      siteName: "Aki UI",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [image],
    },
  };

  // Add article-specific metadata
  if (
    type === "article" &&
    (publishedTime || modifiedTime || section || tags.length > 0)
  ) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      section,
      tags,
    };
  }

  return metadata;
}

// Pre-defined SEO configurations for common pages
export const seoConfigs = {
  home: generateSEO({
    title: "Aki UI - Modern React Component Library",
    description:
      "Build beautiful, accessible, and customizable React applications with Aki UI. Features 50+ components, TypeScript support, AI integration, and comprehensive documentation.",
    keywords: [
      "React UI Library",
      "Component Library",
      "TypeScript",
      "AI Integration",
      "Modern Design",
    ],
    url: "/",
  }),

  docs: generateSEO({
    title: "Documentation",
    description:
      "Complete documentation for Aki UI React component library. Learn how to install, customize, and use all components with TypeScript support.",
    keywords: ["Documentation", "Guide", "Tutorial", "API Reference"],
    url: "/docs",
  }),

  components: generateSEO({
    title: "Components",
    description:
      "Explore 50+ accessible and customizable React components in Aki UI. From basic buttons to complex data tables and forms.",
    keywords: ["React Components", "UI Components", "Accessible Components"],
    url: "/docs/components",
  }),

  playground: generateSEO({
    title: "Playground - Interactive Storybook",
    description:
      "Try Aki UI components live in our interactive Storybook playground. Test themes, configurations, and see real-time examples with full interactive controls.",
    keywords: [
      "Storybook",
      "Interactive",
      "Live Demo",
      "Component Playground",
      "UI Testing",
    ],
    url: "/playground",
  }),

  storybook: {
    title: "Aki UI Storybook - Interactive Component Library",
    description:
      "Explore Aki UI components in our interactive Storybook environment. Live examples, theme customization, and comprehensive documentation.",
    url: "https://aki-ui.vercel.app/",
    keywords: [
      "Storybook",
      "Interactive Components",
      "Live Preview",
      "Component Documentation",
    ],
  },
};

// Generate component-specific SEO
export function generateComponentSEO(
  componentName: string,
  description?: string
): Metadata {
  const formattedName =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);

  return generateSEO({
    title: `${formattedName} Component`,
    description:
      description ||
      `Learn how to use the ${formattedName} component in Aki UI. Complete API reference, examples, and customization options.`,
    keywords: [
      `${formattedName} Component`,
      "React Component",
      componentName,
      "API Reference",
    ],
    url: `/docs/components/${componentName.toLowerCase()}`,
    type: "article",
    section: "Components",
    tags: ["component", "react", componentName],
  });
}

// Generate structured data for components
export function generateComponentStructuredData(
  componentName: string,
  description: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${componentName} Component - Aki UI`,
    description,
    author: {
      "@type": "Organization",
      name: "Akitect.io",
      url: "https://akitect.io",
    },
    publisher: {
      "@type": "Organization",
      name: "Akitect.io",
      logo: {
        "@type": "ImageObject",
        url: "https://aki-ui.akitect.io/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aki-ui.akitect.io/docs/components/${componentName.toLowerCase()}`,
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  };
}
