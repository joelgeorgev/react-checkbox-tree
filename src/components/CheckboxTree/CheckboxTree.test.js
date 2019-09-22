import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { CheckboxTree } from '.'

describe('CheckboxTree tests', () => {
  const text = 'Hello World'
  const getDefaultProps = () => ({ text, checked: false })
  const parent = 'Parent'
  const child = 'Child'
  const grandchild = 'Grandchild'
  const getRecursiveObject = () => ({
    text: parent,
    checked: false,
    children: [
      {
        text: child,
        checked: false,
        children: [
          {
            text: grandchild,
            checked: false
          }
        ]
      }
    ]
  })
  const createProps = (props) => ({ ...getDefaultProps(), ...props })

  test('It should render text as provided through props', () => {
    const { getByLabelText } = render(<CheckboxTree data={createProps()} />)

    expect(getByLabelText(text)).toBeDefined()
  })

  test('It should render checkbox as provided through props', () => {
    const { getByLabelText } = render(<CheckboxTree data={createProps()} />)

    expect(getByLabelText(text).checked).toEqual(false)
  })

  test('It should toggle checkbox when clicked', () => {
    const { getByLabelText } = render(<CheckboxTree data={createProps()} />)

    fireEvent.click(getByLabelText(text))

    expect(getByLabelText(text).checked).toEqual(true)
  })

  test('It should render all texts as provided through props', () => {
    const { getByLabelText } = render(
      <CheckboxTree data={createProps(getRecursiveObject())} />
    )

    expect(getByLabelText(parent)).toBeDefined()
    expect(getByLabelText(child)).toBeDefined()
    expect(getByLabelText(grandchild)).toBeDefined()
  })

  test('It should toggle all checkboxes down recursively', () => {
    const { getByLabelText } = render(
      <CheckboxTree data={createProps(getRecursiveObject())} />
    )

    fireEvent.click(getByLabelText(parent))

    expect(getByLabelText(parent).checked).toEqual(true)
    expect(getByLabelText(child).checked).toEqual(true)
    expect(getByLabelText(grandchild).checked).toEqual(true)
  })

  test('It should toggle all checkboxes up recursively', () => {
    const { getByLabelText } = render(
      <CheckboxTree data={createProps(getRecursiveObject())} />
    )

    fireEvent.click(getByLabelText(grandchild))

    expect(getByLabelText(parent).checked).toEqual(true)
    expect(getByLabelText(child).checked).toEqual(true)
    expect(getByLabelText(grandchild).checked).toEqual(true)
  })
})
