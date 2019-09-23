import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Checkbox } from '.'

describe('Checkbox tests', () => {
  const createNode = (params) => ({
    childIds: [],
    parentId: undefined,
    checked: false,
    ...params
  })
  const getDefaultProps = () => ({ id: 0, onToggle: jest.fn() })
  const createProps = (props) => ({ ...getDefaultProps(), ...props })

  describe('When given a normalized object with a single node', () => {
    const text = 'Hello World'
    const getNormalizedObject = () => ({
      0: createNode({ text })
    })

    test('It should render text as provided', () => {
      const { getByLabelText } = render(
        <Checkbox {...createProps({ nodes: getNormalizedObject() })} />
      )

      expect(getByLabelText(text)).toBeDefined()
    })

    test('It should render checkbox as provided', () => {
      const { getByLabelText } = render(
        <Checkbox {...createProps({ nodes: getNormalizedObject() })} />
      )

      expect(getByLabelText(text).checked).toEqual(false)
    })

    test('It should invoke callback function when clicked', () => {
      const props = createProps({ nodes: getNormalizedObject() })
      const { onToggle } = props
      const { getByLabelText } = render(<Checkbox {...props} />)

      fireEvent.click(getByLabelText(text))

      expect(onToggle).toHaveBeenCalledTimes(1)
      expect(onToggle).toHaveBeenCalledWith(0)
    })
  })

  describe('When given a normalized object with nodes at multiple levels', () => {
    const parent = 'Parent'
    const child = 'Child'
    const grandchild = 'Grandchild'
    const getNormalizedObject = () => ({
      0: createNode({ text: parent, childIds: [1] }),
      1: createNode({ text: child, childIds: [2], parentId: 0 }),
      2: createNode({ text: grandchild, parentId: 1 })
    })

    test('It should render all texts as provided', () => {
      const { getByLabelText } = render(
        <Checkbox {...createProps({ nodes: getNormalizedObject() })} />
      )

      expect(getByLabelText(parent)).toBeDefined()
      expect(getByLabelText(child)).toBeDefined()
      expect(getByLabelText(grandchild)).toBeDefined()
    })

    describe('When clicked', () => {
      const cases = [[grandchild, 2], [child, 1], [parent, 0]]
      test.each(cases)(
        'on "%s", it should invoke callback function with %i',
        (text, id) => {
          const props = createProps({ nodes: getNormalizedObject() })
          const { onToggle } = props
          const { getByLabelText } = render(<Checkbox {...props} />)

          fireEvent.click(getByLabelText(text))

          expect(onToggle).toHaveBeenCalledTimes(1)
          expect(onToggle).toHaveBeenCalledWith(id)
        }
      )
    })
  })
})
