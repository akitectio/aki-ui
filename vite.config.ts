import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
});
