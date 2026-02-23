import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import packageJson from './package.json'

export default defineConfig(() => {
  return {
    build: {
      base: `${new URL(packageJson.repository).pathname}/`,
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
