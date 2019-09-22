import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Checkbox } from '.'

describe('Checkbox tests', () => {
  const buildObject = (params) => ({
    childIds: [],
    parentId: undefined,
    checked: false,
    ...params
  })
  const text = 'Hello World'
  const getDefaultProps = () => ({
    id: 0,
    nodes: { 0: buildObject({ text }) },
    onToggle: jest.fn()
  })
  const parent = 'Parent'
  const child = 'Child'
  const grandchild = 'Grandchild'
  const getNormalizedObject = () => ({
    0: buildObject({ text: parent, childIds: [1] }),
    1: buildObject({ text: child, childIds: [2], parentId: 0 }),
    2: buildObject({ text: grandchild, parentId: 1 })
  })
  const createProps = (props) => ({ ...getDefaultProps(), ...props })

  test('It should render text as provided through props', () => {
    const { getByLabelText } = render(<Checkbox {...createProps()} />)

    expect(getByLabelText(text)).toBeDefined()
  })

  test('It should render checkbox as provided through props', () => {
    const { getByLabelText } = render(<Checkbox {...createProps()} />)

    expect(getByLabelText(text).checked).toEqual(false)
  })

  test('It should invoke callback function when clicked', () => {
    const props = createProps()
    const { onToggle } = props
    const { getByLabelText } = render(<Checkbox {...props} />)

    fireEvent.click(getByLabelText(text))

    expect(onToggle).toHaveBeenCalledTimes(1)
    expect(onToggle).toHaveBeenCalledWith(0)
  })

  test('It should render all texts as provided through props', () => {
    const { getByLabelText } = render(
      <Checkbox {...createProps({ nodes: getNormalizedObject() })} />
    )

    expect(getByLabelText(parent)).toBeDefined()
    expect(getByLabelText(child)).toBeDefined()
    expect(getByLabelText(grandchild)).toBeDefined()
  })
})
