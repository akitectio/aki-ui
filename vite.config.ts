import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { readFileSync } from "fs";
import { resolve } from "path";

// Read version from package.json
const packageJson = JSON.parse(
  readFileSync(resolve(__dirname, "package.json"), "utf-8")
);
const version = packageJson.version;

const cssBanner = `/*!
 * Aki UI Component Library v${version}
 * https://aki-ui.akitect.io
 * 
 * Copyright (c) 2024-2025 Akitect.io
 * Licensed under the MIT License
 * 
 * Author: Akitect.io <duy@akitect.io>
 * Website: https://akitect.io
 * Repository: https://github.com/akitectio/aki-ui
 * 
 * Built with React, TypeScript, and Tailwind CSS
 */
`;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: "dist/types",
      entryRoot: "src",
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: [
        "src/**/*.test.*",
        "src/**/*.spec.*",
        "src/**/*.stories.*",
        "src/docs/**/*",
        "src/website/**/*",
      ],
    }),
  ],
  server: {
    open: true,
  },
  preview: {
    open: true,
  },
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/lib/components" },
      { find: "@theme", replacement: "/src/lib/theme" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@utils", replacement: "/src/lib/utils" },
      { find: "@hooks", replacement: "/src/lib/hooks" },
      { find: "@types", replacement: "/src/lib/types" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@docs", replacement: "/src/docs" },
      { find: "@stories", replacement: "/src/stories" },
    ],
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "AkiUI",
      fileName: (format) => `aki-ui.${format}.js`,
      formats: ["es", "umd"],
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@heroicons/react",
        "chart.js",
        "react-chartjs-2",
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "index.css";
          }
          return "[name].[ext]";
        },
        banner: cssBanner,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          "@heroicons/react": "HeroIcons",
          "chart.js": "Chart",
          "react-chartjs-2": "ReactChartjs2",
        },
      },
    },
    minify: "esbuild",
    target: "es2015",
    sourcemap: true,
    emptyOutDir: true,
  },
});
