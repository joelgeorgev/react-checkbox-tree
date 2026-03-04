import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  return {
    base: '/react-checkbox-tree/',
    build: {
      outDir: 'build'
    },
    test: {
      exclude: [...configDefaults.exclude, 'e2e'],
      setupFiles: ['./vitest-setup.ts'],
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
