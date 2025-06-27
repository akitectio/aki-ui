import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",

  // UI
  colorPrimary: "#4F46E5",
  colorSecondary: "#7C3AED",

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: '"Fira Code", monospace',

  // Text colors
  textColor: "#1F2937",
  textInverseColor: "#FFFFFF",

  // Toolbar default and active colors
  barTextColor: "#6B7280",
  barSelectedColor: "#4F46E5",
  barBg: "#FFFFFF",

  // Form colors
  inputBg: "#F9FAFB",
  inputBorder: "#D1D5DB",
  inputTextColor: "#1F2937",
  inputBorderRadius: 6,

  // Brand
  brandTitle: "Aki UI",
  brandUrl: "https://github.com/akitectio/aki-ui",
  brandImage: "./aki_ui_logo.svg",
  brandTarget: "_blank",
});

addons.setConfig({
  theme,
});
