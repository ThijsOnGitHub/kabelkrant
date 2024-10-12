import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    sentryVitePlugin({
      org: "thijs-europe",
      project: "kabelkrant-player"
    })],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      scopeBehaviour: 'local'
    },
  },
  build: {
    sourcemap: true
  }
})