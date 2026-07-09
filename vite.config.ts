import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// domínio próprio -> base na raiz
export default defineConfig({
  base: '/',
  plugins: [react()],
})
