// Henter konfigurasjonsfunksjonen fra Vite
import { defineConfig } from 'vite'

// Gjør at Vite støtter React
import react from '@vitejs/plugin-react'

// Gjør at Vite støtter Tailwind CSS
import tailwindcss from '@tailwindcss/vite'

// Konfigurerer Vite
export default defineConfig({
  plugins: [
    react(),       // React-støtte
    tailwindcss(), // Tailwind CSS-støtte
  ],
})