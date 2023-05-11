import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pugPlugin from 'vite-plugin-pug'

export default defineConfig({
  plugins: [vue(), pugPlugin()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss";`
      }
    }
  }
})
