import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        tekneo: resolve(__dirname, 'public/index.html'),
        colmotica: resolve(__dirname, 'public/colmotica.html'),
      },
    },
  },
});
