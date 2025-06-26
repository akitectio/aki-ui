/**
 * Utility file for common path functions
 */

export const getAssetPath = (assetPath: string): string => {
  return `@assets/${assetPath}`;
};

export const getComponentPath = (componentPath: string): string => {
  return `@components/${componentPath}`;
};

export const getThemePath = (themePath: string): string => {
  return `@theme/${themePath}`;
};

export const getStylePath = (stylePath: string): string => {
  return `@styles/${stylePath}`;
};
