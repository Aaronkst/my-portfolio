import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves at /my-portfolio/; local dev and builds stay at /.
  // Switch to "/" everywhere once a custom domain is set up.
  base: process.env.GITHUB_ACTIONS ? "/my-portfolio/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
