import { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
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

  "/docs/framework-support": {
    title: "Framework Support - Aki UI",
    description:
      "Learn about framework support in Aki UI. Compatible with React, Next.js, Vite, and other modern React frameworks with TypeScript support.",
    keywords: [
      "framework support",
      "react",
      "nextjs",
      "vite",
      "typescript",
      "compatibility",
      "integration",
    ],
    section: "Getting Started",
  },

  "/docs/layout/grid": {
    title: "Grid System - Aki UI",
    description:
      "Responsive grid system for creating flexible layouts. CSS Grid-based with breakpoint support and customizable spacing.",
    keywords: [
      "grid system",
      "layout",
      "responsive",
      "css grid",
      "breakpoints",
      "spacing",
      "columns",
    ],
    section: "Layout",
  },

  "/docs/layout/stack": {
    title: "Stack Layout - Aki UI",
    description:
      "Stack layout component for vertical and horizontal arrangements. Perfect for organizing content with consistent spacing and alignment.",
    keywords: [
      "stack",
      "layout",
      "vertical",
      "horizontal",
      "spacing",
      "alignment",
      "flex",
    ],
    section: "Layout",
  },

  "/docs/layout/breakpoints": {
    title: "Breakpoints - Aki UI",
    description:
      "Responsive breakpoint system for mobile-first design. Includes predefined breakpoints and utilities for responsive layouts.",
    keywords: [
      "breakpoints",
      "responsive",
      "mobile first",
      "media queries",
      "screen sizes",
      "responsive design",
    ],
    section: "Layout",
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

  "/docs/components/colorpicker": {
    title: "ColorPicker Component - Aki UI",
    description:
      "Color picker component with preset colors and custom color selection. Perfect for themes, design tools, and user preferences with hex color support.",
    keywords: [
      "color picker",
      "color",
      "palette",
      "hex",
      "rgb",
      "theme",
      "design",
      "preset colors",
      "custom color",
    ],
    section: "Components",
  },

  "/docs/components/select": {
    title: "Select Component - Aki UI",
    description:
      "Dropdown select component with search, multi-select, and custom options. Perfect for forms with keyboard navigation and accessibility support.",
    keywords: [
      "select",
      "dropdown",
      "picker",
      "form",
      "options",
      "search",
      "multi-select",
      "accessibility",
    ],
    section: "Components",
  },

  "/docs/components/textarea": {
    title: "Textarea Component - Aki UI",
    description:
      "Multi-line text input component with auto-resize, character counting, and validation support. Perfect for longer text inputs and forms.",
    keywords: [
      "textarea",
      "text input",
      "multiline",
      "form",
      "auto-resize",
      "character count",
      "validation",
    ],
    section: "Components",
  },

  "/docs/components/dropdown": {
    title: "Dropdown Component - Aki UI",
    description:
      "Flexible dropdown menu component with customizable triggers, positioning, and content. Perfect for navigation menus and action lists.",
    keywords: [
      "dropdown",
      "menu",
      "popover",
      "navigation",
      "actions",
      "trigger",
      "positioning",
    ],
    section: "Components",
  },

  "/docs/components/navbar": {
    title: "Navbar Component - Aki UI",
    description:
      "Responsive navigation bar component with logo, menu items, and mobile support. Perfect for website headers and app navigation.",
    keywords: [
      "navbar",
      "navigation",
      "header",
      "menu",
      "responsive",
      "mobile",
      "brand",
      "logo",
    ],
    section: "Components",
  },

  "/docs/components/drawer": {
    title: "Drawer Component - Aki UI",
    description:
      "Slide-out drawer component with backdrop, positioning options, and focus management. Perfect for mobile navigation and side panels.",
    keywords: [
      "drawer",
      "sidebar",
      "slide",
      "navigation",
      "mobile",
      "panel",
      "overlay",
      "focus management",
    ],
    section: "Components",
  },

  "/docs/components/vertical-navbar": {
    title: "VerticalNavbar Component - Aki UI",
    description:
      "A flexible vertical navigation sidebar component perfect for dashboards and admin panels with customizable styling and behavior.",
    keywords: [
      "vertical navbar",
      "sidebar",
      "navigation",
      "dashboard",
      "admin panel",
      "menu",
      "collapsible",
      "responsive",
    ],
    section: "Components",
  },

  "/docs/components/tooltip": {
    title: "Tooltip Component - Aki UI",
    description:
      "Tooltip component for displaying helpful information on hover or focus. Includes positioning options and accessibility features.",
    keywords: [
      "tooltip",
      "hover",
      "help",
      "information",
      "accessibility",
      "positioning",
      "popover",
    ],
    section: "Components",
  },

  "/docs/components/toast": {
    title: "Toast Component - Aki UI",
    description:
      "Toast notification component for displaying temporary messages with different types and actions. Includes positioning and dismissal options.",
    keywords: [
      "toast",
      "notification",
      "message",
      "alert",
      "snackbar",
      "temporary",
      "dismissible",
    ],
    section: "Components",
  },

  "/docs/components/spinner": {
    title: "Spinner Component - Aki UI",
    description:
      "Loading spinner component with various styles and sizes. Perfect for indicating loading states and async operations.",
    keywords: [
      "spinner",
      "loading",
      "loader",
      "progress",
      "async",
      "waiting",
      "indicator",
    ],
    section: "Components",
  },

  "/docs/components/datatable": {
    title: "DataTable Component - Aki UI",
    description:
      "Advanced data table component with sorting, filtering, pagination, and selection. Perfect for displaying large datasets with rich interactions.",
    keywords: [
      "data table",
      "table",
      "grid",
      "sorting",
      "filtering",
      "pagination",
      "selection",
      "data display",
    ],
    section: "Components",
  },

  "/docs/components/pagination": {
    title: "Pagination Component - Aki UI",
    description:
      "Pagination component for navigating through large datasets. Includes page numbers, navigation arrows, and customizable options.",
    keywords: [
      "pagination",
      "navigation",
      "pages",
      "data",
      "paging",
      "page numbers",
      "navigation arrows",
    ],
    section: "Components",
  },

  "/docs/components/breadcrumb": {
    title: "Breadcrumb Component - Aki UI",
    description:
      "Breadcrumb navigation component for showing page hierarchy and location. Perfect for complex navigation structures and SEO.",
    keywords: [
      "breadcrumb",
      "navigation",
      "hierarchy",
      "path",
      "location",
      "trail",
      "SEO",
    ],
    section: "Components",
  },

  "/docs/components/accordion": {
    title: "Accordion Component - Aki UI",
    description:
      "Collapsible accordion component for organizing content sections. Perfect for FAQs, content organization, and space-saving layouts.",
    keywords: [
      "accordion",
      "collapse",
      "expand",
      "sections",
      "content organization",
      "FAQ",
      "collapsible",
    ],
    section: "Components",
  },

  "/docs/components/progress": {
    title: "Progress Component - Aki UI",
    description:
      "Progress bar component for showing completion status and loading progress. Includes linear and circular variants with animations.",
    keywords: [
      "progress",
      "progress bar",
      "loading",
      "completion",
      "status",
      "linear",
      "circular",
      "animation",
    ],
    section: "Components",
  },

  "/docs/components/skeleton": {
    title: "Skeleton Component - Aki UI",
    description:
      "Skeleton loading component for placeholder content while data loads. Improves perceived performance and user experience.",
    keywords: [
      "skeleton",
      "loading",
      "placeholder",
      "shimmer",
      "loading state",
      "UX",
      "performance",
    ],
    section: "Components",
  },

  "/docs/components/chip": {
    title: "Chip Component - Aki UI",
    description:
      "Chip component for displaying tags, filters, and removable items. Perfect for tag inputs, filter lists, and selection interfaces.",
    keywords: [
      "chip",
      "tag",
      "filter",
      "removable",
      "selection",
      "input",
      "pills",
    ],
    section: "Components",
  },

  "/docs/components/label": {
    title: "Label Component - Aki UI",
    description:
      "Form label component with accessibility features and styling options. Essential for form inputs and user interface elements.",
    keywords: [
      "label",
      "form",
      "accessibility",
      "input",
      "description",
      "form controls",
    ],
    section: "Components",
  },

  "/docs/components/separator": {
    title: "Separator Component - Aki UI",
    description:
      "Visual separator component for dividing content sections. Available in horizontal and vertical orientations with customizable styling.",
    keywords: [
      "separator",
      "divider",
      "line",
      "section",
      "horizontal",
      "vertical",
      "content division",
    ],
    section: "Components",
  },

  "/docs/components/table": {
    title: "Table Component - Aki UI",
    description:
      "Basic table component for displaying structured data. Includes headers, rows, and styling options for simple data presentation.",
    keywords: [
      "table",
      "data",
      "rows",
      "columns",
      "headers",
      "structured data",
      "grid",
    ],
    section: "Components",
  },

  "/docs/components/calendar": {
    title: "Calendar Component - Aki UI",
    description:
      "Interactive calendar component for date selection and scheduling. Includes navigation, date highlighting, and accessibility features.",
    keywords: [
      "calendar",
      "date picker",
      "date selection",
      "scheduling",
      "dates",
      "month view",
      "navigation",
    ],
    section: "Components",
  },

  "/docs/components/slider": {
    title: "Slider Component - Aki UI",
    description:
      "Range slider component for selecting numeric values. Includes single and range selection with customizable steps and formatting.",
    keywords: [
      "slider",
      "range",
      "numeric input",
      "selection",
      "steps",
      "value",
      "range selection",
    ],
    section: "Components",
  },

  "/docs/components/toggle": {
    title: "Toggle Component - Aki UI",
    description:
      "Toggle button component for switching between states. Perfect for settings, preferences, and binary choices with visual feedback.",
    keywords: [
      "toggle",
      "switch",
      "binary",
      "settings",
      "preferences",
      "state",
      "button",
    ],
    section: "Components",
  },

  "/docs/components/command": {
    title: "Command Component - Aki UI",
    description:
      "Command palette component for quick actions and navigation. Perfect for keyboard shortcuts, search interfaces, and power user features.",
    keywords: [
      "command",
      "palette",
      "search",
      "shortcuts",
      "navigation",
      "quick actions",
      "keyboard",
    ],
    section: "Components",
  },

  "/docs/components/dialog": {
    title: "Dialog Component - Aki UI",
    description:
      "Dialog component for user interactions and confirmations. Includes focus management, backdrop, and accessibility features.",
    keywords: [
      "dialog",
      "modal",
      "confirmation",
      "interaction",
      "focus management",
      "accessibility",
      "overlay",
    ],
    section: "Components",
  },

  "/docs/components/popover": {
    title: "Popover Component - Aki UI",
    description:
      "Popover component for displaying contextual information and actions. Perfect for tooltips, menus, and additional content overlay.",
    keywords: [
      "popover",
      "overlay",
      "contextual",
      "tooltip",
      "menu",
      "positioning",
      "information",
    ],
    section: "Components",
  },

  "/docs/components/asyncselect": {
    title: "AsyncSelect Component - Aki UI",
    description:
      "Asynchronous select component for loading options dynamically. Perfect for large datasets, search APIs, and remote data sources.",
    keywords: [
      "async select",
      "dynamic loading",
      "search API",
      "remote data",
      "large datasets",
      "autocomplete",
      "debounce",
    ],
    section: "Components",
  },

  "/docs/components/buttongroup": {
    title: "ButtonGroup Component - Aki UI",
    description:
      "Button group component for related actions and toggle selections. Perfect for toolbar buttons, radio-like selections, and action groups.",
    keywords: [
      "button group",
      "toolbar",
      "actions",
      "toggle",
      "selection",
      "radio buttons",
      "grouped actions",
    ],
    section: "Components",
  },

  "/docs/components/inputgroup": {
    title: "InputGroup Component - Aki UI",
    description:
      "Input group component for combining inputs with buttons, icons, and addons. Perfect for search boxes, forms with actions, and enhanced inputs.",
    keywords: [
      "input group",
      "addon",
      "button",
      "icon",
      "search box",
      "enhanced input",
      "form controls",
    ],
    section: "Components",
  },

  "/docs/components/floatinglabel": {
    title: "FloatingLabel Component - Aki UI",
    description:
      "Floating label input component with smooth animations. Provides modern form design with space-efficient labeling and enhanced UX.",
    keywords: [
      "floating label",
      "animated label",
      "modern form",
      "space efficient",
      "animation",
      "UX",
      "form design",
    ],
    section: "Components",
  },

  "/docs/components/permissionpanel": {
    title: "PermissionPanel Component - Aki UI",
    description:
      "Permission panel component for managing user access and roles. Perfect for admin interfaces, user management, and access control.",
    keywords: [
      "permission",
      "access control",
      "roles",
      "user management",
      "admin",
      "security",
      "authorization",
    ],
    section: "Components",
  },

  "/docs/components/chatbot": {
    title: "Chatbot Component - Aki UI",
    description:
      "Interactive chatbot component for conversational interfaces. Perfect for customer support, AI assistants, and messaging applications.",
    keywords: [
      "chatbot",
      "conversation",
      "AI assistant",
      "messaging",
      "customer support",
      "interactive",
      "chat interface",
    ],
    section: "Components",
  },

  "/docs/components/divider": {
    title: "Divider Component - Aki UI",
    description:
      "Visual divider component for separating content sections. Available with text labels, icons, and customizable styling options.",
    keywords: [
      "divider",
      "separator",
      "section",
      "text label",
      "icon",
      "content separation",
      "visual break",
    ],
    section: "Components",
  },

  "/docs/components/typography": {
    title: "Typography Component - Aki UI",
    description:
      "Typography components for consistent text styling. Includes headings, paragraphs, and text utilities with responsive design support.",
    keywords: [
      "typography",
      "text",
      "headings",
      "paragraphs",
      "font",
      "responsive",
      "text styling",
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
