import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { Checkbox } from '.'

const defaultChecked = false

const createDefaultProps = () => ({
  id: 0,
  onToggle: () => {}
})

const createNode = (overrides) => ({
  childIds: [],
  parentId: undefined,
  checked: defaultChecked,
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

const renderCheckbox = (props) =>
  render(<Checkbox {...createDefaultProps()} {...props} />)

const findCheckbox = (text) => screen.getByRole('checkbox', { name: text })

const toggleCheckbox = (text) => fireEvent.click(findCheckbox(text))

const assertCheckbox = (text) => {
  const checkbox = findCheckbox(text)
  expect(checkbox).toBeDefined()
  expect(checkbox.checked).toEqual(defaultChecked)
}

describe('Checkbox', () => {
  describe('Given a single level normalized object', () => {
    test('renders a checkbox', () => {
      renderCheckbox({ nodes: createSingleLevelNormalizedObject() })

      assertCheckbox(text)
    })

    describe('When clicked on', () => {
      test('invokes the callback function', () => {
        const onToggle = jest.fn()
        renderCheckbox({
          nodes: createSingleLevelNormalizedObject(),
          onToggle
        })

        toggleCheckbox(text)

        expect(onToggle).toHaveBeenCalledTimes(1)
        expect(onToggle).toHaveBeenCalledWith(0)
      })
    })
  })

  describe('Given a multi level normalized object', () => {
    test('renders all checkboxes', () => {
      renderCheckbox({ nodes: createMultiLevelNormalizedObject() })

      assertCheckbox(parent)
      assertCheckbox(child)
      assertCheckbox(grandchild)
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
          renderCheckbox({
            nodes: createMultiLevelNormalizedObject(),
            onToggle
          })

          toggleCheckbox(text)
        })

        test(`invokes the callback function with ${id}`, () => {
          expect(onToggle).toHaveBeenCalledTimes(1)
          expect(onToggle).toHaveBeenCalledWith(id)
        })
      })
    })
  })
})
