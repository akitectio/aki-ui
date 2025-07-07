import { useState, useEffect } from "react";

interface Prompt {
  id: number;
  category: string;
  title: string;
  description: string;
  prompt: string;
  tags: string[];
  mcpOptimized: boolean;
}

interface Category {
  id: string;
  name: string;
  description: string;
}

interface PromptsData {
  categories: Category[];
  prompts: Prompt[];
}

export function usePromptsData(): PromptsData | null {
  const [data, setData] = useState<PromptsData | null>(null);

  useEffect(() => {
    // Hardcoded data to avoid import issues with Next.js build
    const promptsData: PromptsData = {
      categories: [
        {
          id: "all",
          name: "All Prompts",
          description: "All available prompts for Aki UI development",
        },
        {
          id: "component",
          name: "Component Creation",
          description: "Prompts for creating and customizing components",
        },
        {
          id: "form",
          name: "Form Generation",
          description: "Prompts for building forms with validation and UX",
        },
        {
          id: "layout",
          name: "Layout & Design",
          description: "Prompts for creating layouts and design systems",
        },
        {
          id: "theme",
          name: "Theming",
          description: "Prompts for theme creation and customization",
        },
        {
          id: "optimization",
          name: "Optimization",
          description: "Prompts for performance and bundle optimization",
        },
        {
          id: "testing",
          name: "Testing & QA",
          description: "Prompts for testing and quality assurance",
        },
        {
          id: "mcp",
          name: "MCP Integration",
          description:
            "Prompts specifically designed for MCP-powered AI assistants",
        },
      ],
      prompts: [
        {
          id: 1,
          category: "component",
          title: "Component Architecture",
          description:
            "Create well-structured components with TypeScript and accessibility",
          prompt:
            "I'm building a React application with Aki UI. Help me create a [COMPONENT_TYPE] that includes [FEATURES]. Use Aki UI components and follow React best practices. Make it TypeScript-ready, accessible, and responsive.\n\nRequirements:\n- Use Aki UI components and follow React best practices\n- Make it TypeScript-ready with proper types\n- Ensure accessibility (ARIA labels, keyboard navigation)\n- Make it responsive for mobile, tablet, and desktop\n- Include proper error handling and loading states\n- Follow the component composition pattern\n\nPlease provide:\n1. The complete component code\n2. TypeScript interfaces/types\n3. Usage examples\n4. Accessibility considerations\n5. Responsive design notes",
          tags: ["React", "TypeScript", "Accessibility", "Responsive"],
          mcpOptimized: false,
        },
        {
          id: 2,
          category: "mcp",
          title: "MCP Component Discovery",
          description: "Search and discover components using MCP tools",
          prompt:
            "Search Aki UI components for [FUNCTIONALITY] using MCP. Show me details about the most relevant components and provide usage examples.",
          tags: ["MCP", "Component Discovery", "Search"],
          mcpOptimized: true,
        },
        {
          id: 3,
          category: "mcp",
          title: "MCP Project Initialization",
          description: "Initialize projects with MCP assistance",
          prompt:
            "Initialize a [PROJECT_TYPE] project with Aki UI using MCP. Include [FEATURES] and set up the optimal configuration for [USE_CASE].",
          tags: ["MCP", "Project Setup", "Initialization"],
          mcpOptimized: true,
        },
        {
          id: 4,
          category: "mcp",
          title: "MCP Theme Creation",
          description: "Generate themes using MCP tools",
          prompt:
            "Create a [STYLE] theme for my Aki UI project using MCP with [PRIMARY_COLOR] as the main color. Generate CSS variables and show how to apply it.",
          tags: ["MCP", "Theme Generation", "CSS Variables"],
          mcpOptimized: true,
        },
        {
          id: 5,
          category: "mcp",
          title: "MCP Form Generation",
          description: "Generate complex forms with MCP",
          prompt:
            "Generate a comprehensive form for [PURPOSE] using MCP with [FIELD_TYPES]. Include validation, error handling, and accessibility features.",
          tags: ["MCP", "Form Generation", "Validation"],
          mcpOptimized: true,
        },
        {
          id: 6,
          category: "mcp",
          title: "MCP Code Validation",
          description: "Validate code using MCP tools",
          prompt:
            "Validate my Aki UI component implementation using MCP and generate comprehensive tests. Include accessibility checks and performance analysis.",
          tags: ["MCP", "Code Validation", "Testing"],
          mcpOptimized: true,
        },
        {
          id: 7,
          category: "mcp",
          title: "MCP Component Optimization",
          description: "Optimize components with MCP assistance",
          prompt:
            "Optimize my [COMPONENT_TYPE] component using MCP for better performance. Suggest Aki UI alternatives and best practices for [SPECIFIC_REQUIREMENT].",
          tags: ["MCP", "Optimization", "Performance"],
          mcpOptimized: true,
        },
        {
          id: 8,
          category: "mcp",
          title: "MCP Layout Generation",
          description: "Generate layouts using MCP tools",
          prompt:
            "Generate a [LAYOUT_TYPE] layout using MCP with Aki UI components. Include [LAYOUT_FEATURES] and ensure responsive design.",
          tags: ["MCP", "Layout Generation", "Responsive"],
          mcpOptimized: true,
        },
        {
          id: 9,
          category: "mcp",
          title: "MCP Best Practices",
          description: "Get best practices recommendations via MCP",
          prompt:
            "Using MCP, provide best practices for [DEVELOPMENT_ASPECT] with Aki UI. Include code examples and common pitfalls to avoid.",
          tags: ["MCP", "Best Practices", "Examples"],
          mcpOptimized: true,
        },
        {
          id: 10,
          category: "form",
          title: "Advanced Form Generation",
          description:
            "Generate comprehensive forms with validation and user experience",
          prompt:
            "Create a comprehensive form for [PURPOSE] using Aki UI components.\n\nForm Requirements:\n- Fields: [FIELD_TYPES]\n- Validation: Real-time validation with helpful error messages\n- UX: Progressive disclosure, clear field labels, helpful hints\n- Accessibility: ARIA labels, error announcements, keyboard navigation\n- Responsive: Mobile-first design with touch-friendly inputs\n- States: Loading, success, error states with appropriate feedback\n\nInclude:\n1. Form schema with validation rules\n2. Complete React component with hooks\n3. Error handling and success messages\n4. Accessibility features (ARIA, focus management)\n5. Responsive styling for all devices\n6. Unit tests for form validation",
          tags: ["Forms", "Validation", "UX", "Accessibility"],
          mcpOptimized: false,
        },
        {
          id: 11,
          category: "layout",
          title: "Design System Integration",
          description:
            "Create consistent layouts following design system principles",
          prompt:
            "Using Aki UI's design system, help me create a consistent [PAGE_TYPE] page.\n\nDesign Requirements:\n- Follow Aki UI design tokens and spacing system\n- Use consistent typography scale and color palette\n- Implement proper visual hierarchy\n- Ensure it works with both light and dark themes\n- Include proper loading and empty states\n- Make it responsive with appropriate breakpoints\n\nPlease provide:\n1. Complete page layout with proper component composition\n2. CSS/styling following design system principles\n3. Theme integration (light/dark mode support)\n4. Responsive design implementation\n5. Loading and empty state components\n6. Accessibility checklist",
          tags: ["Design System", "Layout", "Theming", "Responsive"],
          mcpOptimized: false,
        },
        {
          id: 12,
          category: "component",
          title: "Component Customization",
          description:
            "Extend and customize existing components while maintaining consistency",
          prompt:
            "I need to customize the [COMPONENT_NAME] component from Aki UI. Help me extend it with [CUSTOM_FEATURES] while maintaining the original design consistency and accessibility features.\n\nCustomization Requirements:\n- Extend the base component without breaking existing functionality\n- Add new features: [CUSTOM_FEATURES]\n- Maintain Aki UI's design consistency\n- Preserve all accessibility features\n- Keep TypeScript type safety\n- Follow composition over inheritance pattern\n\nPlease provide:\n1. Extended component with new features\n2. TypeScript interfaces for new props\n3. Styling that matches Aki UI design language\n4. Usage examples showing before/after\n5. Migration guide from base component\n6. Testing considerations for new features",
          tags: [
            "Customization",
            "Extension",
            "TypeScript",
            "Design Consistency",
          ],
          mcpOptimized: false,
        },
        {
          id: 13,
          category: "optimization",
          title: "Performance Optimization",
          description:
            "Optimize components for better performance and user experience",
          prompt:
            "Review my Aki UI implementation for [FEATURE_DESCRIPTION]. Optimize for performance, bundle size, and runtime efficiency.\n\nPerformance Goals:\n- Reduce bundle size through tree-shaking\n- Optimize render performance and minimize re-renders\n- Implement lazy loading where appropriate\n- Optimize images and assets\n- Improve Core Web Vitals (LCP, FID, CLS)\n- Reduce Time to Interactive (TTI)\n\nPlease analyze and provide:\n1. Performance audit of current implementation\n2. Optimized component code with explanations\n3. Bundle size analysis and reduction strategies\n4. Runtime performance improvements\n5. Lazy loading implementation\n6. Monitoring and measurement recommendations",
          tags: [
            "Performance",
            "Optimization",
            "Bundle Size",
            "Core Web Vitals",
          ],
          mcpOptimized: false,
        },
        {
          id: 14,
          category: "testing",
          title: "Comprehensive Testing",
          description:
            "Generate thorough tests for components and user interactions",
          prompt:
            "Help me write comprehensive tests for my Aki UI components. Include unit tests, integration tests, and accessibility tests.\n\nTesting Requirements:\n- Unit tests for component logic and rendering\n- Integration tests for user interactions\n- Accessibility tests (ARIA, keyboard navigation, screen readers)\n- Visual regression tests\n- Performance tests\n- Cross-browser compatibility tests\n\nTesting Framework: [Jest/Vitest/Cypress/Playwright]\n\nPlease provide:\n1. Complete test suite with all test types\n2. Test utilities and helper functions\n3. Mock data and fixtures\n4. Accessibility testing with @testing-library/jest-dom\n5. Performance benchmarking tests\n6. CI/CD integration examples",
          tags: [
            "Testing",
            "Unit Tests",
            "Integration Tests",
            "Accessibility Testing",
          ],
          mcpOptimized: false,
        },
        {
          id: 15,
          category: "layout",
          title: "Responsive Design",
          description: "Create responsive layouts that work across all devices",
          prompt:
            "Create a responsive [LAYOUT_TYPE] using Aki UI components. Ensure it works perfectly on mobile, tablet, and desktop.\n\nResponsive Requirements:\n- Mobile-first design approach\n- Appropriate breakpoints (mobile: 320px+, tablet: 768px+, desktop: 1024px+)\n- Touch-friendly interactions for mobile\n- Optimized navigation for small screens\n- Flexible grid systems and spacing\n- Readable typography across all devices\n\nPlease provide:\n1. Complete responsive layout implementation\n2. CSS Grid/Flexbox strategies\n3. Breakpoint management\n4. Touch interaction optimizations\n5. Performance considerations for mobile\n6. Testing checklist for different devices",
          tags: ["Responsive", "Mobile-First", "Touch", "Breakpoints"],
          mcpOptimized: false,
        },
        {
          id: 16,
          category: "component",
          title: "Accessibility Focus",
          description: "Ensure components meet WCAG 2.1 AA standards",
          prompt:
            "Ensure my Aki UI implementation is fully accessible. Review ARIA labels, keyboard navigation, color contrast, and screen reader compatibility.\n\nAccessibility Requirements:\n- WCAG 2.1 AA compliance\n- Proper semantic HTML structure\n- ARIA labels and roles\n- Keyboard navigation support\n- Color contrast ratios (4.5:1 for normal text, 3:1 for large text)\n- Screen reader compatibility\n- Focus management and visual indicators\n\nPlease provide:\n1. Accessibility audit of current implementation\n2. WCAG 2.1 AA compliant component code\n3. ARIA implementation examples\n4. Keyboard navigation patterns\n5. Color contrast analysis and fixes\n6. Screen reader testing guide",
          tags: ["Accessibility", "WCAG", "ARIA", "Keyboard Navigation"],
          mcpOptimized: false,
        },
        {
          id: 17,
          category: "theme",
          title: "Theme System",
          description:
            "Create and manage consistent themes across your application",
          prompt:
            "Help me create a comprehensive theme system for my Aki UI project with [BRAND_COLORS] and [STYLE_PREFERENCES].\n\nTheme Requirements:\n- Light and dark mode support\n- Brand color integration: [BRAND_COLORS]\n- Typography scale and font families\n- Spacing and sizing systems\n- Component-specific styling\n- CSS custom properties for easy customization\n\nPlease provide:\n1. Complete theme configuration\n2. CSS custom properties structure\n3. Dark/light mode toggle implementation\n4. Component theme integration\n5. Theme testing and validation\n6. Migration guide for existing components",
          tags: ["Theming", "Dark Mode", "Brand Colors", "CSS Variables"],
          mcpOptimized: false,
        },
        {
          id: 18,
          category: "optimization",
          title: "Bundle Optimization",
          description: "Minimize bundle size and improve loading performance",
          prompt:
            "Optimize my Aki UI project for minimal bundle size and fast loading.\n\nOptimization Goals:\n- Tree-shaking unused components\n- Code splitting and lazy loading\n- Asset optimization (images, fonts)\n- Minimize runtime overhead\n- Reduce dependency size\n- Improve First Contentful Paint (FCP)\n\nPlease analyze and provide:\n1. Bundle analysis report\n2. Tree-shaking configuration\n3. Code splitting strategies\n4. Asset optimization techniques\n5. Performance metrics and monitoring\n6. Best practices for ongoing optimization",
          tags: [
            "Bundle Size",
            "Tree Shaking",
            "Code Splitting",
            "Performance",
          ],
          mcpOptimized: false,
        },
        {
          id: 19,
          category: "form",
          title: "Multi-Step Form",
          description:
            "Create complex multi-step forms with validation and progress tracking",
          prompt:
            "Create a multi-step form for [PROCESS_TYPE] with progress tracking and validation.\n\nForm Features:\n- Step-by-step navigation with progress indicator\n- Form validation at each step\n- Data persistence between steps\n- Conditional fields based on previous answers\n- Save and resume functionality\n- Mobile-optimized navigation\n\nPlease provide:\n1. Multi-step form component architecture\n2. State management solution\n3. Validation schema for each step\n4. Progress tracking implementation\n5. Mobile-responsive design\n6. Error handling and recovery",
          tags: [
            "Multi-Step Forms",
            "Progress Tracking",
            "Validation",
            "State Management",
          ],
          mcpOptimized: false,
        },
        {
          id: 20,
          category: "component",
          title: "Data Visualization",
          description:
            "Create interactive charts and data visualization components",
          prompt:
            "Help me create interactive data visualization components using Aki UI for [DATA_TYPE].\n\nVisualization Requirements:\n- Interactive charts and graphs\n- Responsive design for all devices\n- Accessibility for screen readers\n- Data filtering and sorting\n- Export functionality\n- Real-time data updates\n\nPlease provide:\n1. Chart component implementation\n2. Data transformation utilities\n3. Accessibility features for charts\n4. Responsive design patterns\n5. Export functionality\n6. Performance optimization for large datasets",
          tags: [
            "Data Visualization",
            "Charts",
            "Interactive",
            "Accessibility",
          ],
          mcpOptimized: false,
        },
        {
          id: 21,
          category: "layout",
          title: "Dashboard Layout",
          description:
            "Create comprehensive dashboard layouts with widgets and data displays",
          prompt:
            "Create a comprehensive dashboard layout for [DASHBOARD_TYPE] with customizable widgets and data displays.\n\nDashboard Features:\n- Draggable and resizable widgets\n- Grid-based layout system\n- Real-time data updates\n- Customizable themes\n- Responsive design\n- Export and sharing capabilities\n\nPlease provide:\n1. Dashboard layout architecture\n2. Widget system implementation\n3. Drag-and-drop functionality\n4. Real-time data integration\n5. Customization options\n6. Performance optimization strategies",
          tags: ["Dashboard", "Widgets", "Drag & Drop", "Real-time Data"],
          mcpOptimized: false,
        },
        {
          id: 22,
          category: "optimization",
          title: "SEO Optimization",
          description: "Optimize components and pages for search engines",
          prompt:
            "Optimize my Aki UI implementation for SEO and search engine visibility.\n\nSEO Requirements:\n- Semantic HTML structure\n- Meta tags and Open Graph\n- Schema markup\n- Performance optimization\n- Mobile-first indexing\n- Accessibility for search crawlers\n\nPlease provide:\n1. SEO audit of current implementation\n2. Semantic HTML improvements\n3. Meta tag optimization\n4. Schema markup implementation\n5. Performance optimizations for SEO\n6. Testing and monitoring tools",
          tags: ["SEO", "Semantic HTML", "Meta Tags", "Performance"],
          mcpOptimized: false,
        },
        {
          id: 23,
          category: "testing",
          title: "E2E Testing",
          description: "Create end-to-end tests for complete user workflows",
          prompt:
            "Create comprehensive end-to-end tests for [USER_WORKFLOW] using Aki UI components.\n\nE2E Testing Requirements:\n- Complete user journey testing\n- Cross-browser compatibility\n- Mobile device testing\n- Performance testing\n- Accessibility testing\n- Visual regression testing\n\nPlease provide:\n1. E2E test suite implementation\n2. Page object model structure\n3. Cross-browser test configuration\n4. Mobile testing strategies\n5. Performance testing integration\n6. CI/CD pipeline configuration",
          tags: [
            "E2E Testing",
            "User Workflows",
            "Cross-Browser",
            "Mobile Testing",
          ],
          mcpOptimized: false,
        },
        {
          id: 24,
          category: "component",
          title: "Animation & Transitions",
          description:
            "Add smooth animations and transitions to enhance user experience",
          prompt:
            "Add smooth animations and transitions to my Aki UI components for better user experience.\n\nAnimation Requirements:\n- Smooth page transitions\n- Component state animations\n- Loading and progress animations\n- Hover and focus effects\n- Performance-optimized animations\n- Accessibility considerations for reduced motion\n\nPlease provide:\n1. Animation system implementation\n2. Transition component library\n3. Performance optimization techniques\n4. Accessibility features (prefers-reduced-motion)\n5. Mobile-specific considerations\n6. Testing animations across devices",
          tags: ["Animations", "Transitions", "Performance", "Accessibility"],
          mcpOptimized: false,
        },
        {
          id: 25,
          category: "theme",
          title: "Brand Integration",
          description: "Integrate brand guidelines and design systems",
          prompt:
            "Help me integrate my brand guidelines with Aki UI to create a consistent design system.\n\nBrand Integration Requirements:\n- Brand colors and palette\n- Typography and font families\n- Logo and iconography\n- Spacing and layout principles\n- Component customization\n- Style guide documentation\n\nPlease provide:\n1. Brand theme configuration\n2. Custom component variations\n3. Style guide implementation\n4. Brand asset optimization\n5. Design token management\n6. Documentation and usage guidelines",
          tags: [
            "Brand Integration",
            "Design System",
            "Style Guide",
            "Design Tokens",
          ],
          mcpOptimized: false,
        },
      ],
    };
    setData(promptsData);
  }, []);

  return data;
}
