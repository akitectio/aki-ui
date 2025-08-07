import { BreadcrumbItem } from "@/components/Breadcrumb";

interface BreadcrumbConfig {
  [key: string]: {
    name: string;
    href: string;
  };
}

const breadcrumbConfig: BreadcrumbConfig = {
  "/docs": { name: "Documentation", href: "/docs" },
  "/docs/introduction": { name: "Introduction", href: "/docs/introduction" },
  "/docs/installation": { name: "Installation", href: "/docs/installation" },
  "/docs/theming": { name: "Theming", href: "/docs/theming" },
  "/docs/color-modes": { name: "Color Modes", href: "/docs/color-modes" },

  // Components
  "/docs/components": { name: "Components", href: "/docs/components" },
  "/docs/components/button": {
    name: "Button",
    href: "/docs/components/button",
  },
  "/docs/components/card": { name: "Card", href: "/docs/components/card" },
  "/docs/components/input": { name: "Input", href: "/docs/components/input" },
  "/docs/components/modal": { name: "Modal", href: "/docs/components/modal" },
  "/docs/components/badge": { name: "Badge", href: "/docs/components/badge" },
  "/docs/components/avatar": {
    name: "Avatar",
    href: "/docs/components/avatar",
  },
  "/docs/components/alert": { name: "Alert", href: "/docs/components/alert" },
  "/docs/components/accordion": {
    name: "Accordion",
    href: "/docs/components/accordion",
  },
  "/docs/components/breadcrumb": {
    name: "Breadcrumb",
    href: "/docs/components/breadcrumb",
  },
  "/docs/components/checkbox": {
    name: "Checkbox",
    href: "/docs/components/checkbox",
  },
  "/docs/components/chip": { name: "Chip", href: "/docs/components/chip" },
  "/docs/components/datatable": {
    name: "DataTable",
    href: "/docs/components/datatable",
  },
  "/docs/components/imagecropper": {
    name: "ImageCropper",
    href: "/docs/components/imagecropper",
  },
  "/docs/components/divider": {
    name: "Divider",
    href: "/docs/components/divider",
  },
  "/docs/components/drawer": {
    name: "Drawer",
    href: "/docs/components/drawer",
  },
  "/docs/components/dropdown": {
    name: "Dropdown",
    href: "/docs/components/dropdown",
  },
  "/docs/components/floatinglabel": {
    name: "FloatingLabel",
    href: "/docs/components/floatinglabel",
  },
  "/docs/components/inputgroup": {
    name: "InputGroup",
    href: "/docs/components/inputgroup",
  },
  "/docs/components/navbar": {
    name: "Navbar",
    href: "/docs/components/navbar",
  },
  "/docs/components/pagination": {
    name: "Pagination",
    href: "/docs/components/pagination",
  },
  "/docs/components/popover": {
    name: "Popover",
    href: "/docs/components/popover",
  },
  "/docs/components/radio": { name: "Radio", href: "/docs/components/radio" },
  "/docs/components/select": {
    name: "Select",
    href: "/docs/components/select",
  },
  "/docs/components/asyncselect": {
    name: "AsyncSelect",
    href: "/docs/components/asyncselect",
  },
  "/docs/components/skeleton": {
    name: "Skeleton",
    href: "/docs/components/skeleton",
  },
  "/docs/components/slider": {
    name: "Slider",
    href: "/docs/components/slider",
  },
  "/docs/components/spinner": {
    name: "Spinner",
    href: "/docs/components/spinner",
  },
  "/docs/components/switch": {
    name: "Switch",
    href: "/docs/components/switch",
  },
  "/docs/components/tabs": { name: "Tabs", href: "/docs/components/tabs" },
  "/docs/components/toast": { name: "Toast", href: "/docs/components/toast" },
  "/docs/components/tooltip": {
    name: "Tooltip",
    href: "/docs/components/tooltip",
  },
  "/docs/components/typography": {
    name: "Typography",
    href: "/docs/components/typography",
  },
  "/docs/components/buttongroup": {
    name: "ButtonGroup",
    href: "/docs/components/buttongroup",
  },
  "/docs/components/chatbot": {
    name: "Chatbot",
    href: "/docs/components/chatbot",
  },

  // Forms
  "/docs/forms": { name: "Forms", href: "/docs/forms" },
  "/docs/forms/form-control": {
    name: "Form Control",
    href: "/docs/forms/form-control",
  },
  "/docs/forms/validation": {
    name: "Validation",
    href: "/docs/forms/validation",
  },

  // Layout
  "/docs/layout": { name: "Layout", href: "/docs/layout" },
  "/docs/layout/grid": { name: "Grid", href: "/docs/layout/grid" },
  "/docs/layout/stack": { name: "Stack", href: "/docs/layout/stack" },
  "/docs/layout/breakpoints": {
    name: "Breakpoints",
    href: "/docs/layout/breakpoints",
  },

  // LLM
  "/docs/llm": { name: "LLM Integration", href: "/docs/llm" },
  "/docs/llm/setup": { name: "Setup", href: "/docs/llm/setup" },
  "/docs/llm/ai-tools": { name: "AI Tools", href: "/docs/llm/ai-tools" },
  "/docs/llm/examples": { name: "Examples", href: "/docs/llm/examples" },

  // MCP
  "/docs/mcp": { name: "MCP Integration", href: "/docs/mcp" },
  "/docs/mcp/installation": {
    name: "Installation",
    href: "/docs/mcp/installation",
  },
  "/docs/mcp/usage": { name: "Usage", href: "/docs/mcp/usage" },
  "/docs/mcp/api": { name: "API Reference", href: "/docs/mcp/api" },
};

export function generateBreadcrumbs(currentPath: string): BreadcrumbItem[] {
  const pathSegments = currentPath.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  // Build breadcrumb path progressively
  let currentFullPath = "";

  for (let i = 0; i < pathSegments.length; i++) {
    currentFullPath += "/" + pathSegments[i];
    const config = breadcrumbConfig[currentFullPath];

    if (config) {
      breadcrumbs.push({
        name: config.name,
        href: config.href,
        current: i === pathSegments.length - 1,
      });
    }
  }

  return breadcrumbs;
}

export function getBreadcrumbsForPath(pathname: string): BreadcrumbItem[] {
  return generateBreadcrumbs(pathname);
}
