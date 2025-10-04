import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Simula el DOM del navegador
    globals: true, // Permite usar "test", "expect", etc. sin importar
    setupFiles: './src/setupTests.js' // Archivo para importar jest-dom
  }
})