import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: "dist",
  },
  // 👇 This ensures React Router works on direct refresh
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
