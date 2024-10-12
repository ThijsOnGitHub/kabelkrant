import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "thijs-r2",
    project: "kabelkrant"
  })],

  css: {
    modules:{
        localsConvention: 'camelCaseOnly',
        scopeBehaviour: 'local'
    },
  },
  build: {
    sourcemap: true
  }
})