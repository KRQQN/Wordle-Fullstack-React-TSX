import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/wordOption": "http://localhost:5080/",
      "/api/highscores": "http://localhost:5080/",
    },
  },
  plugins: [react()],
    build: {
      outDir: '../server/dist'
    }
  
})
