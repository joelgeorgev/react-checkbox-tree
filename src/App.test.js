import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'

it('smoke test', () => {
  const container = document.createElement('div')
  ReactDOM.render(<App />, container)
})
