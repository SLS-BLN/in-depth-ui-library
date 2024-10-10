import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  css: {
    transformer: "lightningcss",
  },
  build: {
    cssMinify: "lightningcss",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    coverage: {
      provider: "v8", // default
    },
  },
  server: {
    // to match project server expectation
    port: 3000,
    // exit if port 3000 is in use (to avoid CORS errors)
    strictPort: true,
  },
});
