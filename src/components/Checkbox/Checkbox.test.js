import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Checkbox } from '.'

const createDefaultProps = () => ({
  id: 0,
  onToggle: () => {}
})

const renderCheckbox = (props) =>
  render(<Checkbox {...createDefaultProps()} {...props} />)

const createNode = (overrides) => ({
  childIds: [],
  parentId: undefined,
  checked: false,
  ...overrides
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
  describe('Given a single level normalized object', () => {
    test('renders a text', () => {
      const { getByLabelText } = renderCheckbox({
        nodes: createSingleLevelNormalizedObject()
      })

      expect(getByLabelText(text)).toBeDefined()
    })

    test('renders a checkbox', () => {
      const { getByLabelText } = renderCheckbox({
        nodes: createSingleLevelNormalizedObject()
      })

      expect(getByLabelText(text).checked).toEqual(false)
    })

    test('invokes the callback function on click', () => {
      const onToggle = jest.fn()
      const { getByLabelText } = renderCheckbox({
        nodes: createSingleLevelNormalizedObject(),
        onToggle
      })

      fireEvent.click(getByLabelText(text))

      expect(onToggle).toHaveBeenCalledTimes(1)
      expect(onToggle).toHaveBeenCalledWith(0)
    })
  })

  describe('Given a multi level normalized object', () => {
    test('renders all texts', () => {
      const { getByLabelText } = renderCheckbox({
        nodes: createMultiLevelNormalizedObject()
      })

      expect(getByLabelText(parent)).toBeDefined()
      expect(getByLabelText(child)).toBeDefined()
      expect(getByLabelText(grandchild)).toBeDefined()
    })
    ;[
      {
        text: grandchild,
        id: 2
      },
      {
        text: child,
        id: 1
      },
      {
        text: parent,
        id: 0
      }
    ].forEach(({ text, id }) => {
      describe(`When clicked on ${text}`, () => {
        let onToggle = jest.fn()

        beforeEach(() => {
          const { getByLabelText } = renderCheckbox({
            nodes: createMultiLevelNormalizedObject(),
            onToggle
          })

          fireEvent.click(getByLabelText(text))
        })

        test(`invokes the callback function with ${id}`, () => {
          expect(onToggle).toHaveBeenCalledTimes(1)
          expect(onToggle).toHaveBeenCalledWith(id)
        })
      })
    })
  })
})
