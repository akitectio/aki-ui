/**
 * SEO utilities for Storybook stories
 * Provides component-specific metadata for better search engine optimization
 */

export interface StorybookSEOProps {
  componentName: string;
  componentDescription: string;
  category?: string;
  keywords?: string[];
  examples?: string[];
}

export const generateStorybookSEO = ({
  componentName,
  componentDescription,
  category = "UI Components",
  keywords = [],
  examples = [],
}: StorybookSEOProps) => {
  const baseKeywords = [
    "react",
    "component",
    "ui",
    "typescript",
    "tailwind",
    "aki-ui",
    "design-system",
    "storybook",
  ];

  const componentKeywords = [
    componentName.toLowerCase(),
    `${componentName.toLowerCase()} component`,
    `react ${componentName.toLowerCase()}`,
    ...keywords,
  ];

  const allKeywords = [...baseKeywords, ...componentKeywords].join(", ");

  const title = `${componentName} - Aki UI Component Library`;
  const description = `${componentDescription} ${
    examples.length > 0 ? `Examples: ${examples.join(", ")}.` : ""
  } Part of Aki UI - Modern React Component Library with TypeScript support.`;

  return {
    title,
    description,
    keywords: allKeywords,
    ogTitle: `${componentName} Component | Aki UI`,
    ogDescription: componentDescription,
    ogImage: "/aki-ui-logo.svg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: `Aki UI ${componentName} Component`,
      description: componentDescription,
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
      programmingLanguage: "TypeScript",
      creator: {
        "@type": "Organization",
        name: "Akitect.io",
        url: "https://akitect.io",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      screenshot: "https://aki-ui.akitect.io/aki-ui-logo.svg",
      url: `https://aki-ui.akitect.io/?path=/docs/components-${componentName.toLowerCase()}--docs`,
    },
  };
};

/**
 * Component metadata for SEO generation
 */
export const componentSEOData: Record<string, StorybookSEOProps> = {
  Button: {
    componentName: "Button",
    componentDescription:
      "Customizable button component with multiple variants, sizes, and states. Supports primary, secondary, outline, and ghost styles.",
    category: "Interactive Components",
    keywords: ["button", "cta", "action", "click", "interactive"],
    examples: [
      "Primary Button",
      "Secondary Button",
      "Outline Button",
      "Icon Button",
    ],
  },
  Card: {
    componentName: "Card",
    componentDescription:
      "Flexible card container component for displaying content with optional headers, footers, and actions. Perfect for organizing information.",
    category: "Layout Components",
    keywords: ["card", "container", "panel", "content"],
    examples: [
      "Basic Card",
      "Card with Header",
      "Card with Actions",
      "Image Card",
    ],
  },
  Input: {
    componentName: "Input",
    componentDescription:
      "Form input component with validation, labels, and various input types. Includes support for disabled states and error handling.",
    category: "Form Components",
    keywords: ["input", "form", "text", "validation", "field"],
    examples: ["Text Input", "Password Input", "Email Input", "Number Input"],
  },
  Alert: {
    componentName: "Alert",
    componentDescription:
      "Alert component for displaying important messages with different severity levels and optional actions.",
    category: "Feedback Components",
    keywords: [
      "alert",
      "notification",
      "message",
      "warning",
      "error",
      "success",
    ],
    examples: ["Success Alert", "Error Alert", "Warning Alert", "Info Alert"],
  },
  Modal: {
    componentName: "Modal",
    componentDescription:
      "Modal dialog component for displaying overlay content with backdrop and focus management. Supports various sizes and configurations.",
    category: "Overlay Components",
    keywords: ["modal", "dialog", "popup", "overlay", "lightbox"],
    examples: [
      "Basic Modal",
      "Confirmation Modal",
      "Form Modal",
      "Large Modal",
    ],
  },
  Dropdown: {
    componentName: "Dropdown",
    componentDescription:
      "Dropdown menu component with keyboard navigation and customizable trigger elements. Perfect for navigation and actions.",
    category: "Navigation Components",
    keywords: ["dropdown", "menu", "select", "navigation", "actions"],
    examples: [
      "Button Dropdown",
      "Link Dropdown",
      "Icon Dropdown",
      "Multi-level Menu",
    ],
  },
  Badge: {
    componentName: "Badge",
    componentDescription:
      "Small badge component for displaying status, counts, or labels. Available in multiple colors and sizes.",
    category: "Display Components",
    keywords: ["badge", "label", "tag", "status", "indicator"],
    examples: [
      "Status Badge",
      "Count Badge",
      "Color Variants",
      "Size Variants",
    ],
  },
  Avatar: {
    componentName: "Avatar",
    componentDescription:
      "User avatar component supporting images, initials, and fallback states. Includes various sizes and shapes.",
    category: "Display Components",
    keywords: ["avatar", "profile", "user", "image", "initials"],
    examples: [
      "Image Avatar",
      "Initial Avatar",
      "Fallback Avatar",
      "Size Variants",
    ],
  },
  Spinner: {
    componentName: "Spinner",
    componentDescription:
      "Loading spinner component with multiple animation styles and sizes. Perfect for indicating loading states.",
    category: "Feedback Components",
    keywords: ["spinner", "loading", "loader", "progress", "animation"],
    examples: [
      "Basic Spinner",
      "Size Variants",
      "Color Variants",
      "Custom Animation",
    ],
  },
  Toast: {
    componentName: "Toast",
    componentDescription:
      "Toast notification component for displaying temporary messages with auto-dismiss and action support.",
    category: "Feedback Components",
    keywords: ["toast", "notification", "snackbar", "message", "alert"],
    examples: [
      "Success Toast",
      "Error Toast",
      "Action Toast",
      "Persistent Toast",
    ],
  },
  Breadcrumb: {
    componentName: "Breadcrumb",
    componentDescription:
      "Navigation breadcrumb component showing the current page location within a hierarchy.",
    category: "Navigation Components",
    keywords: ["breadcrumb", "navigation", "hierarchy", "path", "location"],
    examples: [
      "Basic Breadcrumb",
      "With Links",
      "Custom Separator",
      "Overflow Handling",
    ],
  },
  Pagination: {
    componentName: "Pagination",
    componentDescription:
      "Pagination component for navigating through multiple pages of content with customizable controls.",
    category: "Navigation Components",
    keywords: [
      "pagination",
      "paging",
      "navigation",
      "pages",
      "next",
      "previous",
    ],
    examples: ["Basic Pagination", "With Info", "Custom Size", "Jump to Page"],
  },
  Tabs: {
    componentName: "Tabs",
    componentDescription:
      "Tab component for organizing content into separate views with keyboard navigation support.",
    category: "Navigation Components",
    keywords: ["tabs", "navigation", "panels", "content", "switch"],
    examples: ["Basic Tabs", "Vertical Tabs", "With Icons", "Lazy Loading"],
  },
  Accordion: {
    componentName: "Accordion",
    componentDescription:
      "Collapsible accordion component for organizing content in expandable sections.",
    category: "Layout Components",
    keywords: ["accordion", "collapse", "expand", "sections", "faq"],
    examples: [
      "Basic Accordion",
      "Multiple Open",
      "With Icons",
      "Nested Content",
    ],
  },
  Grid: {
    componentName: "Grid",
    componentDescription:
      "Responsive grid layout component with flexible column configurations and gap controls.",
    category: "Layout Components",
    keywords: ["grid", "layout", "responsive", "columns", "flex"],
    examples: [
      "Basic Grid",
      "Responsive Columns",
      "Gap Variants",
      "Auto Layout",
    ],
  },
};

/**
 * Get SEO data for a specific component
 */
export const getComponentSEO = (componentName: string) => {
  const data = componentSEOData[componentName];
  if (!data) {
    return generateStorybookSEO({
      componentName,
      componentDescription: `${componentName} component from Aki UI library.`,
    });
  }
  return generateStorybookSEO(data);
};
