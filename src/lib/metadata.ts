// Route-based metadata for better SEO organization
export const ROUTE_METADATA = {
  "/": {
    title: "Aki UI - Modern React Component Library",
    description:
      "Build beautiful, accessible React applications with Aki UI. A comprehensive component library with TypeScript support, responsive design, and modern styling.",
    keywords:
      "react, component library, ui library, typescript, tailwind css, accessibility, responsive design",
    breadcrumbs: [],
  },

  "/components": {
    title: "React Components - Aki UI Component Library",
    description:
      "Browse 16+ production-ready React components. Buttons, forms, cards, data tables and more. Copy-paste examples with TypeScript support.",
    keywords:
      "react components, button component, form components, card component, data table, ui components, react library",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Components", url: "/components" },
    ],
  },

  "/docs": {
    title: "Documentation - Aki UI React Component Library",
    description:
      "Complete documentation for Aki UI React components. Installation guide, examples, API reference, and customization options.",
    keywords:
      "aki ui documentation, react component docs, installation guide, api reference, component examples",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Documentation", url: "/docs" },
    ],
  },

  "/templates": {
    title: "React Templates - Aki UI Ready-to-use Templates",
    description:
      "Pre-built React templates and layouts using Aki UI components. Dashboard, landing page, admin panel templates ready to customize.",
    keywords:
      "react templates, dashboard template, admin template, landing page template, react layouts",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Templates", url: "/templates" },
    ],
  },

  "/playground": {
    title: "Playground - Test Aki UI Components Online",
    description:
      "Interactive playground to test and experiment with Aki UI React components. Live code editor with real-time preview.",
    keywords:
      "react playground, component testing, live editor, code playground, react components demo",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Playground", url: "/playground" },
    ],
  },
} as const;

// Component-specific metadata for deep linking SEO
export const COMPONENT_METADATA = {
  button: {
    title: "Button Component - React UI Library | Aki UI",
    description:
      "Customizable React Button component with multiple variants, sizes, and states. Includes primary, secondary, outline, ghost, and danger styles.",
    keywords:
      "react button component, button variants, ui button, react button library",
  },

  input: {
    title: "Input Component - React Form Controls | Aki UI",
    description:
      "Accessible React Input component with validation, different states, and TypeScript support. Text inputs with labels and error handling.",
    keywords: "react input component, form input, text input, input validation",
  },

  card: {
    title: "Card Component - React Layout Components | Aki UI",
    description:
      "Flexible React Card component with header, body, and footer sections. Perfect for content containers and information display.",
    keywords:
      "react card component, content container, layout component, card ui",
  },

  datatable: {
    title: "DataTable Component - React Data Display | Aki UI",
    description:
      "Interactive React DataTable component with sorting, selection, and pagination. Perfect for displaying structured data.",
    keywords: "react data table, table component, data grid, sortable table",
  },

  alert: {
    title: "Alert Component - React Feedback Components | Aki UI",
    description:
      "React Alert component for user notifications and feedback messages. Supports info, success, warning, and error variants.",
    keywords:
      "react alert component, notification component, alert messages, feedback ui",
  },

  badge: {
    title: "Badge Component - React Status Indicators | Aki UI",
    description:
      "Small React Badge component for status indicators, counts, and labels. Multiple color variants and sizes available.",
    keywords:
      "react badge component, status badge, indicator component, label ui",
  },
} as const;

export type RouteKey = keyof typeof ROUTE_METADATA;
export type ComponentKey = keyof typeof COMPONENT_METADATA;
