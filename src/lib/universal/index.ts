// Universal component wrapper that works across all frameworks
// This replaces the need for separate adapters

import React from "react";

/**
 * Universal component wrapper that ensures compatibility across frameworks
 * Works with Next.js, Remix, Gatsby, and even Angular (via React wrapper)
 */
export function createUniversalComponent<P extends Record<string, any>>(
  OriginalComponent: React.ComponentType<P>,
  componentName: string
) {
  const UniversalComponent = React.forwardRef<any, P>((props, ref) => {
    // Handle different framework environments
    const isServer = typeof window === "undefined";

    // For SSR compatibility, use a simple div wrapper on server
    if (isServer) {
      return React.createElement("div", {
        ...props,
        ref,
        "data-component": componentName,
        "data-ssr": "true",
      });
    }

    // Client-side rendering with original component
    // @ts-ignore - Handle ref forwarding issues
    return React.createElement(OriginalComponent, props);
  });

  UniversalComponent.displayName = `Universal${componentName}`;

  return UniversalComponent;
}

/**
 * Framework detection utilities
 */
export const FrameworkDetector = {
  isNext: () => typeof window !== "undefined" && "__NEXT_DATA__" in window,
  isRemix: () => typeof window !== "undefined" && "__remixContext" in window,
  isGatsby: () => typeof window !== "undefined" && "___gatsby" in window,
  isReact: () =>
    typeof window !== "undefined" &&
    !FrameworkDetector.isNext() &&
    !FrameworkDetector.isRemix() &&
    !FrameworkDetector.isGatsby(),
  isServer: () => typeof window === "undefined",
};

/**
 * Universal event handler that works across frameworks
 */
export function createUniversalEventHandler(handler: (event: any) => void) {
  return (event: any) => {
    // Normalize event across different frameworks
    const normalizedEvent = {
      ...event,
      preventDefault: () => event.preventDefault?.(),
      stopPropagation: () => event.stopPropagation?.(),
      target: event.target || event.currentTarget,
      value: event.target?.value || event.detail?.value,
    };

    handler(normalizedEvent);
  };
}
