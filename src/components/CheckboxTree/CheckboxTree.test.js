import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { CheckboxTree } from '.'

describe('CheckboxTree tests', () => {
  const createProps = () => ({ text: 'Hello World', checked: false })

  test('It should render text as provided through props', () => {
    const props = createProps()
    const { text } = props

    const { getByLabelText } = render(<CheckboxTree data={props} />)

    expect(getByLabelText(text)).toBeDefined()
  })

  test('It should render checkbox as provided through props', () => {
    const props = createProps()
    const { text, checked } = props

    const { getByLabelText } = render(<CheckboxTree data={props} />)

    expect(getByLabelText(text).checked).toEqual(checked)
  })

  test('It should toggle checkbox when clicked', () => {
    const props = createProps()
    const { text, checked } = props
    const { getByLabelText } = render(<CheckboxTree data={props} />)

    fireEvent.click(getByLabelText(text))

    expect(getByLabelText(text).checked).toEqual(!checked)
  })
})
