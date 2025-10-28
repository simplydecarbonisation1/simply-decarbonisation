import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/simply-decarbonisation/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs'
  }
})
