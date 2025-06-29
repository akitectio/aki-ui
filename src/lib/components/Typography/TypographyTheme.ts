/**
 * Typography theme utilities and constants
 */

export const typographyTheme = {
  fontFamilies: {
    sans: [
      "Inter",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "sans-serif",
    ],
    serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
    mono: [
      "Fira Code",
      "Monaco",
      "Consolas",
      "Liberation Mono",
      "Courier New",
      "monospace",
    ],
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },
  fontWeights: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  lineHeights: {
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

/**
 * Typography scale following a modular scale approach
 */
export const typographyScale = {
  // Display sizes (large screens only)
  display: {
    1: { fontSize: "6rem", lineHeight: "1", fontWeight: "700" }, // 96px
    2: { fontSize: "5.5rem", lineHeight: "1", fontWeight: "700" }, // 88px
    3: { fontSize: "5rem", lineHeight: "1", fontWeight: "700" }, // 80px
    4: { fontSize: "4.5rem", lineHeight: "1.1", fontWeight: "700" }, // 72px
  },
  // Heading sizes
  heading: {
    1: { fontSize: "3rem", lineHeight: "1.2", fontWeight: "700" }, // 48px
    2: { fontSize: "2.5rem", lineHeight: "1.2", fontWeight: "600" }, // 40px
    3: { fontSize: "2rem", lineHeight: "1.3", fontWeight: "600" }, // 32px
    4: { fontSize: "1.5rem", lineHeight: "1.4", fontWeight: "600" }, // 24px
    5: { fontSize: "1.25rem", lineHeight: "1.4", fontWeight: "500" }, // 20px
    6: { fontSize: "1.125rem", lineHeight: "1.4", fontWeight: "500" }, // 18px
  },
  // Body sizes
  body: {
    lg: { fontSize: "1.125rem", lineHeight: "1.6", fontWeight: "400" }, // 18px
    md: { fontSize: "1rem", lineHeight: "1.6", fontWeight: "400" }, // 16px
    sm: { fontSize: "0.875rem", lineHeight: "1.5", fontWeight: "400" }, // 14px
    xs: { fontSize: "0.75rem", lineHeight: "1.5", fontWeight: "400" }, // 12px
  },
} as const;

/**
 * Semantic typography roles
 */
export const semanticTypography = {
  display: "display text for hero sections and major announcements",
  headline: "large headlines for page titles and major sections",
  title: "medium titles for subsections and cards",
  label: "labels for buttons, tabs, and form elements",
  body: "main body text for content and descriptions",
  caption: "captions for images, metadata, and auxiliary text",
  overline: "overline text for categories and eyebrows",
} as const;

/**
 * Accessibility considerations for typography
 */
export const a11yTypography = {
  minimumFontSize: "14px",
  recommendedLineHeight: 1.5,
  minimumContrast: {
    normal: 4.5,
    large: 3,
  },
  readingWidth: {
    optimal: "45-75ch",
    maximum: "95ch",
  },
} as const;

/**
 * Responsive typography breakpoints
 */
export const responsiveTypography = {
  mobile: {
    scale: 0.875, // 87.5% of base size
    maxWidth: "40ch",
  },
  tablet: {
    scale: 0.9375, // 93.75% of base size
    maxWidth: "60ch",
  },
  desktop: {
    scale: 1, // 100% base size
    maxWidth: "75ch",
  },
  wide: {
    scale: 1.125, // 112.5% of base size
    maxWidth: "85ch",
  },
} as const;
