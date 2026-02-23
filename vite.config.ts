import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  return {
    build: {
      base: '/react-checkbox-tree/',
      outDir: 'build'
    },
    test: {
      globals: true,
      environment: 'jsdom',
      clearMocks: true,
      mockReset: true,
      restoreMocks: true,
      coverage: {
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['src/index.tsx']
      }
    },
    plugins: [react()]
  }
})
