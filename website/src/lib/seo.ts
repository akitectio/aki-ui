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
  image = "/aki-ui-banner.png",
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

/**
 * Page-specific SEO configurations
 * Maps page paths to their SEO metadata
 */
export const pageSEOConfigs: Record<string, SEOProps> = {
  // Home page
  "/": {
    title: "Aki UI - Modern React Component Library",
    description:
      "Build beautiful, accessible React applications with Aki UI. A comprehensive component library featuring AI-powered integration, TypeScript support, and customizable Tailwind CSS styling.",
    keywords: [
      "react library",
      "component framework",
      "UI kit",
      "typescript",
      "tailwind css",
      "AI integration",
    ],
    type: "website",
    section: "Homepage",
  },

  // Documentation pages
  "/docs": {
    title: "Documentation - Aki UI",
    description:
      "Complete documentation for Aki UI component library. Learn how to install, customize, and use our React components in your projects.",
    keywords: ["documentation", "guides", "tutorial", "help", "api reference"],
    section: "Documentation",
  },

  "/docs/installation": {
    title: "Installation Guide - Aki UI",
    description:
      "Step-by-step installation guide for Aki UI. Learn how to install and set up the component library in your React project with npm, yarn, or CDN.",
    keywords: [
      "installation",
      "setup",
      "npm",
      "yarn",
      "cdn",
      "getting started",
      "configuration",
    ],
    section: "Getting Started",
  },

  "/docs/theming": {
    title: "Theming & Customization - Aki UI",
    description:
      "Learn how to customize Aki UI components with themes, CSS variables, and Tailwind CSS classes. Create your own design system and brand colors.",
    keywords: [
      "theming",
      "customization",
      "css variables",
      "design tokens",
      "styling",
      "brand colors",
      "design system",
    ],
    section: "Customization",
  },

  "/docs/color-modes": {
    title: "Color Modes & Dark Theme - Aki UI",
    description:
      "Implement dark mode and light mode in your Aki UI application. Learn about color mode configuration, theme switching, and accessibility best practices.",
    keywords: [
      "dark mode",
      "light mode",
      "color modes",
      "theme switching",
      "accessibility",
      "user preferences",
    ],
    section: "Theming",
  },

  "/docs/mcp": {
    title: "MCP Integration - AI-Powered Development",
    description:
      "Learn about Model Context Protocol (MCP) integration with Aki UI. AI-powered component development, code generation, and intelligent design assistance.",
    keywords: [
      "MCP",
      "AI integration",
      "model context protocol",
      "AI development",
      "code generation",
      "intelligent design",
    ],
    section: "AI Integration",
  },

  // Component documentation
  "/docs/components": {
    title: "Components Overview - Aki UI",
    description:
      "Explore all available components in Aki UI library. Interactive examples, comprehensive API documentation, and usage guidelines for every component.",
    keywords: [
      "components",
      "overview",
      "component library",
      "UI elements",
      "react components",
    ],
    section: "Components",
  },

  "/docs/components/button": {
    title: "Button Component - Aki UI",
    description:
      "Customizable button component with multiple variants, sizes, and states. Includes primary, secondary, outline, and ghost styles with full accessibility support.",
    keywords: [
      "button",
      "cta",
      "action",
      "click",
      "interactive",
      "form controls",
      "accessibility",
    ],
    section: "Components",
  },

  "/docs/components/card": {
    title: "Card Component - Aki UI",
    description:
      "Flexible card container component for displaying content. Perfect for organizing information with headers, footers, actions, and responsive layouts.",
    keywords: [
      "card",
      "container",
      "panel",
      "content",
      "layout",
      "grid",
      "responsive",
    ],
    section: "Components",
  },

  "/docs/components/input": {
    title: "Input Component - Aki UI",
    description:
      "Form input component with validation, labels, and various input types. Includes support for disabled states, error handling, and accessibility features.",
    keywords: [
      "input",
      "form",
      "text field",
      "validation",
      "form controls",
      "accessibility",
      "error handling",
    ],
    section: "Components",
  },

  "/docs/components/modal": {
    title: "Modal Component - Aki UI",
    description:
      "Modal dialog component for displaying overlay content with backdrop and focus management. Supports various sizes, configurations, and accessibility features.",
    keywords: [
      "modal",
      "dialog",
      "popup",
      "overlay",
      "lightbox",
      "focus management",
      "accessibility",
    ],
    section: "Components",
  },

  "/docs/components/alert": {
    title: "Alert Component - Aki UI",
    description:
      "Alert component for displaying important messages with different severity levels and optional actions. Includes success, error, warning, and info variants.",
    keywords: [
      "alert",
      "notification",
      "message",
      "warning",
      "error",
      "success",
      "info",
      "feedback",
    ],
    section: "Components",
  },

  "/docs/components/badge": {
    title: "Badge Component - Aki UI",
    description:
      "Small badge component for displaying status, counts, or labels. Available in multiple colors, sizes, and variants for various use cases.",
    keywords: [
      "badge",
      "label",
      "tag",
      "status",
      "indicator",
      "count",
      "notification",
    ],
    section: "Components",
  },

  "/docs/components/avatar": {
    title: "Avatar Component - Aki UI",
    description:
      "User avatar component supporting images, initials, and fallback states. Includes various sizes, shapes, and accessibility features.",
    keywords: [
      "avatar",
      "profile",
      "user",
      "image",
      "initials",
      "fallback",
      "user interface",
    ],
    section: "Components",
  },

  "/docs/components/checkbox": {
    title: "Checkbox Component - Aki UI",
    description:
      "Accessible checkbox component with custom styling and indeterminate state support. Perfect for forms and multi-selection interfaces.",
    keywords: [
      "checkbox",
      "form",
      "selection",
      "input",
      "boolean",
      "multi-select",
      "accessibility",
    ],
    section: "Components",
  },

  "/docs/components/radio": {
    title: "Radio Component - Aki UI",
    description:
      "Radio button component for single selection from multiple options. Fully accessible, customizable, and perfect for form interfaces.",
    keywords: [
      "radio",
      "form",
      "selection",
      "input",
      "choice",
      "single select",
      "accessibility",
    ],
    section: "Components",
  },

  "/docs/components/switch": {
    title: "Switch Component - Aki UI",
    description:
      "Toggle switch component for boolean inputs. Perfect for settings, preferences, and on/off controls with smooth animations.",
    keywords: [
      "switch",
      "toggle",
      "boolean",
      "settings",
      "preferences",
      "on/off",
      "animation",
    ],
    section: "Components",
  },

  "/docs/components/tabs": {
    title: "Tabs Component - Aki UI",
    description:
      "Tab component for organizing content into separate views with keyboard navigation support. Includes horizontal and vertical orientations.",
    keywords: [
      "tabs",
      "navigation",
      "panels",
      "content",
      "tabbed interface",
      "keyboard navigation",
    ],
    section: "Components",
  },

  // Additional pages
  "/playground": {
    title: "Component Playground - Aki UI",
    description:
      "Interactive playground for testing and experimenting with Aki UI components. Try different configurations, see live results, and generate code.",
    keywords: [
      "playground",
      "interactive",
      "testing",
      "experimentation",
      "live demo",
      "code generation",
    ],
    section: "Tools",
  },

  "/docs/layout": {
    title: "Layout Components - Aki UI",
    description:
      "Layout components for structuring your application. Grid systems, flex containers, responsive utilities, and spacing controls.",
    keywords: [
      "layout",
      "grid",
      "flex",
      "responsive",
      "structure",
      "spacing",
      "container",
    ],
    section: "Components",
  },

  "/docs/forms": {
    title: "Form Components - Aki UI",
    description:
      "Comprehensive form components and validation utilities for building accessible and user-friendly forms with React.",
    keywords: [
      "forms",
      "validation",
      "form controls",
      "input",
      "accessibility",
      "user experience",
      "form design",
    ],
    section: "Components",
  },

  "/docs/introduction": {
    title: "Introduction - Aki UI",
    description:
      "Get started with Aki UI, a modern React component library. Learn about features, philosophy, and how to integrate into your project.",
    keywords: [
      "introduction",
      "getting started",
      "overview",
      "features",
      "philosophy",
      "react library",
    ],
    section: "Getting Started",
  },

  "/docs/llm": {
    title: "LLM Integration - Aki UI",
    description:
      "Learn how to integrate Large Language Models with Aki UI components for enhanced AI-powered user experiences.",
    keywords: [
      "LLM",
      "AI integration",
      "large language models",
      "AI components",
      "chatbot",
      "AI assistance",
    ],
    section: "AI Integration",
  },

  "/404": {
    title: "404 - Page Not Found - Aki UI",
    description:
      "This page demonstrates a custom 404 error page built with Aki UI components. Features responsive design, helpful navigation, and modern styling.",
    keywords: [
      "404",
      "page not found",
      "error page",
      "custom 404",
      "user experience",
      "navigation",
    ],
    section: "Examples",
  },
};

/**
 * Get SEO metadata for a specific page path
 */
export const getPageSEO = (path: string): Metadata => {
  const config = pageSEOConfigs[path];

  if (!config) {
    // Generate default SEO for unknown pages
    const pathSegments = path.split("/").filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1];
    const title =
      lastSegment
        ?.split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ") || "Page";

    return generateSEO({
      title: `${title} - Aki UI`,
      description: `${title} page in Aki UI component library documentation.`,
      url: path,
      section: "Documentation",
    });
  }

  return generateSEO({
    ...config,
    url: path,
  });
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbStructuredData = (
  breadcrumbs: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://aki-ui.akitect.io${item.url}`,
    })),
  };
};

/**
 * Generate FAQ structured data for documentation pages
 */
export const generateFAQStructuredData = (
  faqs: Array<{ question: string; answer: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};
