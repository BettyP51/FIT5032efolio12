import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 设置基础路径
  base: process.env.NODE_ENV === 'production'
    ? '/<repository-name>/'  // 将 <repository-name> 替换为您的 GitHub 仓库名
    : '/'
})
