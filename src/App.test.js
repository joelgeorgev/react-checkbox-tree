import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import renderer from 'react-test-renderer'

import { App } from './App'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('snapshot test', () => {
  const tree = renderer.create(
    <App />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('state change test', () => {
  let app = ReactTestUtils.renderIntoDocument(<App />)

  // Get first node with childKeys
  let inputElement = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'input')[2]
  ReactTestUtils.Simulate.change(inputElement)
  expect(inputElement.checked).toBe(true)
})