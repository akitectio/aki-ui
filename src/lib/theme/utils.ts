import type { Theme } from "./types";

/**
 * Deeply merges a partial theme object with the default theme
 * @param defaultTheme The default theme object
 * @param overrideTheme The partial theme object to merge with the default
 * @returns A new theme object with the overrides applied
 */
export function mergeTheme(
  defaultTheme: Theme,
  overrideTheme: Partial<Theme>
): Theme {
  // Start with a copy of the default theme
  const result = { ...defaultTheme };

  // Handle each top-level key in the override theme
  if (overrideTheme.colors) {
    result.colors = { ...defaultTheme.colors, ...overrideTheme.colors };
  }

  if (overrideTheme.radius) {
    result.radius = { ...defaultTheme.radius, ...overrideTheme.radius };
  }

  if (overrideTheme.shadows) {
    result.shadows = { ...defaultTheme.shadows, ...overrideTheme.shadows };
  }

  if (overrideTheme.fontSizes) {
    result.fontSizes = {
      ...defaultTheme.fontSizes,
      ...overrideTheme.fontSizes,
    };
  }

  if (overrideTheme.spacing) {
    result.spacing = { ...defaultTheme.spacing, ...overrideTheme.spacing };
  }

  if (overrideTheme.transitions) {
    result.transitions = {
      ...defaultTheme.transitions,
      ...overrideTheme.transitions,
    };
  }

  if (overrideTheme.fontFamily) {
    result.fontFamily = {
      ...defaultTheme.fontFamily,
      ...overrideTheme.fontFamily,
    };
  }

  return result;
}
