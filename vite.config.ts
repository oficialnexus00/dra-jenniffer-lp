import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = nome do repo pra funcionar no GitHub Pages (project page)
// https://vite.dev/config/
export default defineConfig({
  base: '/dra-jenniffer-lp/',
  plugins: [react()],
})
