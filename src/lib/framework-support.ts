// Simplified approach - Auto-detecting framework compatibility
// This replaces all the complex adapters with a single, smart export

import React from "react";

/**
 * Framework-agnostic wrapper that handles SSR and hydration automatically
 */
export function withFrameworkSupport<T>(Component: React.ComponentType<T>) {
  const WrappedComponent = React.forwardRef<any, T>((props, ref) => {
    const [isHydrated, setIsHydrated] = React.useState(false);

    React.useEffect(() => {
      setIsHydrated(true);
    }, []);

    // During SSR or before hydration, render a placeholder
    if (!isHydrated && typeof window === "undefined") {
      // @ts-ignore
      return React.createElement(Component, props);
    }

    // After hydration, render the full component
    // @ts-ignore
    return React.createElement(Component, { ...props, ref });
  });

  WrappedComponent.displayName = `WithFrameworkSupport(${
    Component.displayName || Component.name
  })`;

  return WrappedComponent;
}

/**
 * Simple framework detection for optional optimizations
 */
export const getFrameworkInfo = () => {
  if (typeof window === "undefined")
    return { framework: "server", isSSR: true };

  if ("__NEXT_DATA__" in window) return { framework: "nextjs", isSSR: false };
  if ("__remixContext" in window) return { framework: "remix", isSSR: false };
  if ("___gatsby" in window) return { framework: "gatsby", isSSR: false };

  return { framework: "react", isSSR: false };
};

/**
 * Universal event handler
 */
export const createEventHandler = (handler: (...args: any[]) => void) => {
  return (...args: any[]) => {
    try {
      handler(...args);
    } catch (error) {
      console.warn("Event handler error:", error);
    }
  };
};
