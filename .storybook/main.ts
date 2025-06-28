import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/docs/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
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
  staticDirs: [
    {
      from: "../public",
      to: "/",
    },
  ],
  // Configure for GitHub Pages deployment
  env: (config) => ({
    ...config,
    STORYBOOK_BASE_URL: process.env.STORYBOOK_BASE_URL || "",
    GITHUB_PAGES: process.env.GITHUB_PAGES || "false",
  }),
  async viteFinal(config) {
    // Configure esbuild to handle TypeScript and JSX
    config.esbuild = {
      loader: "tsx",
      include: /\.(ts|tsx|js|jsx)$/,
    };

    // Configure optimizeDeps esbuild options
    if (!config.optimizeDeps) {
      config.optimizeDeps = {};
    }

    config.optimizeDeps.esbuildOptions = {
      ...config.optimizeDeps.esbuildOptions,
      loader: {
        ".js": "jsx",
        ".ts": "tsx",
        ".tsx": "tsx",
        ".jsx": "jsx",
      },
    };

    // Ensure TypeScript files are handled
    config.resolve = {
      ...config.resolve,
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    };

    return config;
  },
};

export default config;
