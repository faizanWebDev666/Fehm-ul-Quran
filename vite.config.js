import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pdfCacheHeaders = () => ({
  name: 'pdf-cache-headers',
  configureServer(server) {
    server.middlewares.use((request, response, next) => {
      if (request.url?.split('?')[0].endsWith('.pdf')) {
        response.setHeader('Accept-Ranges', 'bytes')
        response.setHeader('Cache-Control', 'public, max-age=2592000')
      }
      next()
    })
  },
  configurePreviewServer(server) {
    server.middlewares.use((request, response, next) => {
      if (request.url?.split('?')[0].endsWith('.pdf')) {
        response.setHeader('Accept-Ranges', 'bytes')
        response.setHeader('Cache-Control', 'public, max-age=2592000')
      }
      next()
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pdfCacheHeaders()],
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
})
