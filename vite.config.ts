import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: false,
  },
  build: {
    sourcemap: false,
    minify: 'terser',
    cssCodeSplit: true,
    outDir: 'dist',
  },
  preview: {
    port: 3000,
  },
})
