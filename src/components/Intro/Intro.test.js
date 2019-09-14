import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { Intro } from '.'

describe('Intro tests', () => {
  afterEach(cleanup)

  test('It should render a title', () => {
    const { getByText } = render(<Intro />)
    expect(getByText('React Checkbox Tree')).toBeDefined()
  })
})
