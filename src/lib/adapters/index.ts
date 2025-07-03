// Framework adapters for Aki UI
// Provides optimized components for different React frameworks

export * as NextJS from "./nextjs";

// Future adapters can be added here:
// export * as Remix from './remix';
// export * as Gatsby from './gatsby';
// export * as Vite from './vite';

export const FRAMEWORK_SUPPORT = {
  nextjs: {
    version: "13.0.0+",
    appRouter: true,
    pagesRouter: true,
    description: "Full support for Next.js App Router and Pages Router",
  },
  react: {
    version: "16.8.0+",
    description: "Standard React support with hooks",
  },
  // Future framework support
  remix: {
    version: "Coming soon",
    description: "Remix support planned",
  },
  gatsby: {
    version: "Coming soon",
    description: "Gatsby support planned",
  },
} as const;
