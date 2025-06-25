import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/stories/docs/**/*.mdx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: [
          { find: "@", replacement: path.resolve(__dirname, "../src") },
          { find: "@lib", replacement: path.resolve(__dirname, "../src/lib") },
          {
            find: "@components",
            replacement: path.resolve(__dirname, "../src/lib/components"),
          },
          {
            find: "@stories",
            replacement: path.resolve(__dirname, "../src/stories"),
          },
          {
            find: "@utils",
            replacement: path.resolve(__dirname, "../src/lib/utils"),
          },
          {
            find: "@types",
            replacement: path.resolve(__dirname, "../src/lib/types"),
          },
          {
            find: "@assets",
            replacement: path.resolve(__dirname, "../src/assets"),
          },
        ],
      },
    });
  },
};

export default config;
