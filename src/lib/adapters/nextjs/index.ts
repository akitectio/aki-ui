// Next.js adapter for Aki UI
// This module provides client-side components that are safe to use in Next.js App Router

export { Badge, Button, Card } from "./client-components";

// Re-export types for convenience
export type { BadgeProps } from "../../components/Badge";
export type { ButtonProps } from "../../components/Button";
export type { CardProps } from "../../components/Card";

// Instructions for usage
export const NEXTJS_USAGE_INSTRUCTIONS = `
To use Aki UI with Next.js App Router:

1. Import from the Next.js adapter:
   import { Badge, Button, Card } from '@akitectio/aki-ui/nextjs';

2. Use in your client components:
   'use client';
   
   import { Button } from '@akitectio/aki-ui/nextjs';
   
   export function MyComponent() {
     return <Button>Click me</Button>;
   }

3. These components are automatically wrapped with 'use client' directive.

Note: This adapter ensures compatibility with Next.js App Router's SSR and hydration.
`;
