import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "src/shared"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@core": path.resolve(__dirname, "src/core"),
      "@stores": path.resolve(__dirname, "src/stores"),
      "@services": path.resolve(__dirname, "src/services"),
    }
  }
})
