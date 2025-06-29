import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",

  // UI
  colorPrimary: "#6366F1", // Indigo 500
  colorSecondary: "#8B5CF6", // Violet 500

  // Typography
  fontBase: '"Inter", system-ui, -apple-system, sans-serif',
  fontCode: '"Fira Code", "JetBrains Mono", monospace',

  // Text colors
  textColor: "#111827", // Gray 900
  textInverseColor: "#FFFFFF",

  // Toolbar default and active colors
  barTextColor: "#4B5563", // Gray 600
  barSelectedColor: "#6366F1", // Indigo 500
  barBg: "#F9FAFB", // Gray 50

  // Form colors
  inputBg: "#F3F4F6", // Gray 100
  inputBorder: "#D1D5DB", // Gray 300
  inputTextColor: "#111827", // Gray 900
  inputBorderRadius: 8,

  // App background colors
  appBg: "#FFFFFF",
  appContentBg: "#FFFFFF",
  appBorderColor: "#E5E7EB", // Gray 200
  appBorderRadius: 12,

  // Brand
  brandTitle: "Aki UI Component Library",
  brandUrl: "https://github.com/akitectio/aki-ui",
  brandImage: "/aki-ui-logo-safe.svg", // Using our safe SVG version
  brandTarget: "_blank",
});

addons.setConfig({
  theme,
});
