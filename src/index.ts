// Import CSS styles only at runtime (not in type declarations)
import "./styles.css";

// Export all components - they now work universally across all frameworks
export * from "./lib/components";
export * from "./lib/theme";

// Export framework utilities for advanced users
export { getFrameworkInfo, createEventHandler } from "./lib/framework-support";

// Instructions for different frameworks
export const USAGE_INSTRUCTIONS = {
  react: `
    import { Button, Card } from '@akitectio/aki-ui';
    import '@akitectio/aki-ui/css';
  `,
  nextjs: `
    // Works out of the box with Next.js App Router and Pages Router
    'use client'; // Only needed for interactive components in App Router
    import { Button, Card } from '@akitectio/aki-ui';
    import '@akitectio/aki-ui/css';
  `,
  remix: `
    // Works seamlessly with Remix SSR and hydration
    import { Button, Card } from '@akitectio/aki-ui';
    import '@akitectio/aki-ui/css';
  `,
  gatsby: `
    // Works with Gatsby static generation
    import { Button, Card } from '@akitectio/aki-ui';
    import '@akitectio/aki-ui/css';
  `,
  angular: `
    // For Angular, you'll need a React wrapper or web components
    // Consider using React components in Angular with @angular/elements
    npm install @angular/elements react react-dom
  `,
};
