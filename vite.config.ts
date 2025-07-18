import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tagger from "@dhiwise/component-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
  },
  plugins: [react(),tagger()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@constants': '/src/constants',
      '@styles': '/src/styles',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://13.200.195.70:8000/graphql/', // Replace with your backend IP and port, e.g., http://192.168.1.100:4000
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
