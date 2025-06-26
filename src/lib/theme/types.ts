/**
 * Theme type definitions for @akitectio/aki-ui
 */

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface ThemeRadius {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  full: string;
}

export interface ThemeShadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  none: string;
}

export interface ThemeFontSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
}

export interface ThemeTransitions {
  fast: string;
  normal: string;
  slow: string;
}

export interface Theme {
  colors: ThemeColors;
  radius: ThemeRadius;
  shadows: ThemeShadows;
  fontSizes: ThemeFontSizes;
  spacing: ThemeSpacing;
  transitions: ThemeTransitions;
  fontFamily: {
    base: string;
    heading: string;
    mono: string;
  };
}
