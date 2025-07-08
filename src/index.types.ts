// This file handles CSS imports for the library
// It's separate from the main index.ts to avoid issues with TypeScript declarations

// Export everything from the main index without CSS imports
export * from "./lib/components";
export * from "./lib/theme";

// CSS is handled separately and should be imported by consumers:
// import '@akitectio/aki-ui/css';
