import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import { App } from './App'

it('smoke test', () => {
  const container = document.createElement('div')
  render(<App />, container)
  unmountComponentAtNode(container)
  container.remove()
})
