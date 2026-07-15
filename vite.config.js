import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so the production build works whether it's served from
  // a domain root (Vercel/Netlify) or a GitHub Pages project subpath
  // (https://<user>.github.io/<repo>/) without any per-deploy edits.
  base: './',
})
