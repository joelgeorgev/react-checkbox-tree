import { defineConfig, devices } from '@playwright/test'

const PORT = 3000
const baseURL = `http://localhost:${PORT}`

export default defineConfig({
  testDir: './e2e',
  forbidOnly: !!process.env.CI,
  use: {
    baseURL
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  webServer: {
    command: `npm run dev -- --port ${PORT}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI
  }
})
