import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Checkbox } from '.'

const createNode = (params) => ({
  childIds: [],
  parentId: undefined,
  checked: false,
  ...params
})

const createDefaultProps = () => ({ id: 0, onToggle: jest.fn() })

const createProps = (normalizedObject) => ({
  ...createDefaultProps(),
  nodes: normalizedObject
})

const text = 'Hello World'
const createSingleLevelNormalizedObject = () => ({
  0: createNode({ text })
})

const parent = 'Parent'
const child = 'Child'
const grandchild = 'Grandchild'
const createMultiLevelNormalizedObject = () => ({
  0: createNode({ text: parent, childIds: [1] }),
  1: createNode({ text: child, childIds: [2], parentId: 0 }),
  2: createNode({ text: grandchild, parentId: 1 })
})

describe('Checkbox', () => {
  describe('When given a single level normalized object', () => {
    test('renders text', () => {
      const { getByLabelText } = render(
        <Checkbox {...createProps(createSingleLevelNormalizedObject())} />
      )

      expect(getByLabelText(text)).toBeDefined()
    })

    test('renders checkbox', () => {
      const { getByLabelText } = render(
        <Checkbox {...createProps(createSingleLevelNormalizedObject())} />
      )

      expect(getByLabelText(text).checked).toEqual(false)
    })

    test('invokes callback function when clicked', () => {
      const props = createProps(createSingleLevelNormalizedObject())
      const { onToggle } = props
      const { getByLabelText } = render(<Checkbox {...props} />)

      fireEvent.click(getByLabelText(text))

      expect(onToggle).toHaveBeenCalledTimes(1)
      expect(onToggle).toHaveBeenCalledWith(0)
    })
  })

  describe('When given a multi level normalized object', () => {
    test('renders all texts', () => {
      const { getByLabelText } = render(
        <Checkbox {...createProps(createMultiLevelNormalizedObject())} />
      )

      expect(getByLabelText(parent)).toBeDefined()
      expect(getByLabelText(child)).toBeDefined()
      expect(getByLabelText(grandchild)).toBeDefined()
    })

    describe('When clicked', () => {
      const cases = [
        [grandchild, 2],
        [child, 1],
        [parent, 0]
      ]
      test.each(cases)(
        'on "%s", invokes callback function with %i',
        (text, id) => {
          const props = createProps(createMultiLevelNormalizedObject())
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
