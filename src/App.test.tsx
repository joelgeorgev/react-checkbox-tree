import { createRoot } from 'react-dom/client'

import { App } from './App'

describe('App', () => {
  test('renders', () => {
    const container = document.createElement('div')
    const root = createRoot(container)

    root.render(<App />)

    root.unmount()
    container.remove()
  })
})
