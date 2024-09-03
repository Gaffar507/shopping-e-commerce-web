// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Your main entry point (e.g., home page)
        products: resolve(__dirname, "products.html"), // Additional HTML pages
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        addToCart: resolve(__dirname, "addToCart.html"),
        // Add more entry points for other HTML files as needed
      },
    },
  },
});