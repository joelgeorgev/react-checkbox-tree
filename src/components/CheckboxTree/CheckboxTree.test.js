import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { CheckboxTree } from '.'

const renderCheckboxTree = (props) => render(<CheckboxTree {...props} />)

const text = 'Hello World'
const createNonRecursiveObject = () => ({ text, checked: false })

const parent = 'Parent'
const child = 'Child'
const grandchild = 'Grandchild'
const createRecursiveObject = () => ({
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

describe('CheckboxTree', () => {
  describe('Given a non-recursive object', () => {
    test('renders a text', () => {
      const { getByLabelText } = renderCheckboxTree({
        data: createNonRecursiveObject()
      })

      expect(getByLabelText(text)).toBeDefined()
    })

    test('renders a checkbox', () => {
      const { getByLabelText } = renderCheckboxTree({
        data: createNonRecursiveObject()
      })

      expect(getByLabelText(text).checked).toEqual(false)
    })

    test('toggles the checkbox', () => {
      const { getByLabelText } = renderCheckboxTree({
        data: createNonRecursiveObject()
      })

      fireEvent.click(getByLabelText(text))

      expect(getByLabelText(text).checked).toEqual(true)
    })
  })

  describe('Given a recursive object', () => {
    test('renders all texts', () => {
      const { getByLabelText } = renderCheckboxTree({
        data: createRecursiveObject()
      })

      expect(getByLabelText(parent)).toBeDefined()
      expect(getByLabelText(child)).toBeDefined()
      expect(getByLabelText(grandchild)).toBeDefined()
    })

    test('toggles all checkboxes down recursively', () => {
      const { getByLabelText } = renderCheckboxTree({
        data: createRecursiveObject()
      })

      fireEvent.click(getByLabelText(parent))

      expect(getByLabelText(parent).checked).toEqual(true)
      expect(getByLabelText(child).checked).toEqual(true)
      expect(getByLabelText(grandchild).checked).toEqual(true)
    })

    test('toggles all checkboxes up recursively', () => {
      const { getByLabelText } = renderCheckboxTree({
        data: createRecursiveObject()
      })

      fireEvent.click(getByLabelText(grandchild))

      expect(getByLabelText(parent).checked).toEqual(true)
      expect(getByLabelText(child).checked).toEqual(true)
      expect(getByLabelText(grandchild).checked).toEqual(true)
    })
  })
})
