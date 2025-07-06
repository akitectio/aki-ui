import {
  generateBlockMetadata,
  generateBlockJsonLd,
  BlockMetadata,
} from "@/lib/blockSeo";

// Block definitions with SEO data
export const blockDefinitions: Record<string, BlockMetadata> = {
  "authentication-form": {
    title: "Authentication Form",
    description:
      "Modern login and registration forms with validation, social auth, and security features.",
    category: "Authentication",
    blockId: "authentication-form",
  },
  "calendar-widget": {
    title: "Calendar Widget",
    description:
      "Interactive calendar component with event management, date selection, and customizable views.",
    category: "Data Display",
    blockId: "calendar-widget",
  },
  "chat-interface": {
    title: "Chat Interface",
    description:
      "Real-time chat interface with message history, typing indicators, and emoji support.",
    category: "Communication",
    blockId: "chat-interface",
  },
  "checkout-form": {
    title: "Checkout Form",
    description:
      "Complete checkout process with payment integration, order summary, and validation.",
    category: "E-commerce",
    blockId: "checkout-form",
  },
  "contact-form": {
    title: "Contact Form",
    description:
      "Professional contact form with validation, file upload, and anti-spam protection.",
    category: "Forms",
    blockId: "contact-form",
  },
  "dashboard-01": {
    title: "Admin Dashboard",
    description:
      "Complete admin dashboard with collapsible sidebar, stats cards, and data tables.",
    category: "Dashboard",
    blockId: "dashboard-01",
  },
  "dashboard-analytics": {
    title: "Analytics Dashboard",
    description:
      "Analytics-focused dashboard with charts, metrics, and data visualization components.",
    category: "Dashboard",
    blockId: "dashboard-analytics",
  },
  "data-table-advanced": {
    title: "Advanced Data Table",
    description:
      "Feature-rich data table with sorting, filtering, pagination, and bulk actions.",
    category: "Data Display",
    blockId: "data-table-advanced",
  },
  "hero-section": {
    title: "Hero Section",
    description:
      "Compelling hero sections for landing pages with call-to-action buttons and engaging visuals.",
    category: "Marketing",
    blockId: "hero-section",
  },
  "login-simple": {
    title: "Simple Login",
    description:
      "Clean and minimal login form with email/password authentication and remember me option.",
    category: "Authentication",
    blockId: "login-simple",
  },
  "login-with-image": {
    title: "Login with Image",
    description:
      "Split-layout login form with background image, perfect for branded authentication pages.",
    category: "Authentication",
    blockId: "login-with-image",
  },
  "navbar-with-search": {
    title: "Navbar with Search",
    description:
      "Navigation bar with integrated search functionality, responsive design, and dropdown menus.",
    category: "Navigation",
    blockId: "navbar-with-search",
  },
  "pricing-table": {
    title: "Pricing Table",
    description:
      "Professional pricing plans with feature comparison, toggle billing, and call-to-action buttons.",
    category: "Marketing",
    blockId: "pricing-table",
  },
  "product-card": {
    title: "Product Card",
    description:
      "E-commerce product showcase cards with images, pricing, ratings, and add-to-cart functionality.",
    category: "E-commerce",
    blockId: "product-card",
  },
  "reviews-testimonials": {
    title: "Reviews & Testimonials",
    description:
      "Customer review sections with ratings, testimonials, and social proof elements.",
    category: "Marketing",
    blockId: "reviews-testimonials",
  },
  "settings-form": {
    title: "Settings Form",
    description:
      "User preferences and account settings form with tabs, toggles, and profile management.",
    category: "Forms",
    blockId: "settings-form",
  },
  "sidebar-collapsible": {
    title: "Collapsible Sidebar",
    description:
      "Responsive sidebar navigation that collapses to icons with smooth animations and hover effects.",
    category: "Navigation",
    blockId: "sidebar-collapsible",
  },
  "signup-form": {
    title: "Registration Form",
    description:
      "Multi-step registration form with validation, progress indicators, and email verification.",
    category: "Authentication",
    blockId: "signup-form",
  },
};

// Generate metadata for a specific block
export function getBlockData(blockId: string): BlockMetadata | null {
  return blockDefinitions[blockId] || null;
}

// Generate layout component for a block
export function generateBlockLayout(blockId: string) {
  const blockData = getBlockData(blockId);
  if (!blockData) return null;

  return {
    metadata: generateBlockMetadata(blockData),
    jsonLd: generateBlockJsonLd(blockData),
  };
}
