import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@lib", replacement: "/src/lib" },
      { find: "@components", replacement: "/src/lib/components" },
      { find: "@stories", replacement: "/src/stories" },
      { find: "@utils", replacement: "/src/lib/utils" },
      { find: "@types", replacement: "/src/lib/types" },
      { find: "@assets", replacement: "/src/assets" },
    ],
  },
});
