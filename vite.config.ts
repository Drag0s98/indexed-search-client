import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    css: { postcss: { plugins: [tailwindcss()] } },
    resolve: {
      alias: {
        "@views": path.resolve(__dirname, "./src/views"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@src": path.resolve(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./assets"),
        "@misc": path.resolve(__dirname, "./misc"),
        "@variables": path.resolve(__dirname, "./src/styles/utils/variables"),
      },
    },
    server: {
      port: 3000,
      cors: { origin: "*" },
      proxy: {
        "/api": {
          target: "http://localhost:8000",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\//, ""),
        },
      },
    },
  };
});
