import type { Preview } from "@storybook/react";
import "../src/styles.css";
import { ToastProvider } from "../src/lib/components/Toast";
import React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "gray", value: "#f9fafb" },
        { name: "dark", value: "#111827" },
      ],
    },
    docs: {
      story: {
        inline: true,
      },
      canvas: {
        sourceState: "shown",
      },
    },
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "1.5rem", borderRadius: "0.5rem" }}>
        <ToastProvider>
          <Story />
        </ToastProvider>
      </div>
    ),
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
