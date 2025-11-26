import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // 👇 AGREGAR ESTO
  server: {
    host: "0.0.0.0", // permite acceder con IP desde la red
    port: 5173, // puedes dejar este mismo puerto
  },

  build: {
    rollupOptions: {
      input: {
        tekneo: resolve(__dirname, "index.html"),
      },
    },
  },
});
