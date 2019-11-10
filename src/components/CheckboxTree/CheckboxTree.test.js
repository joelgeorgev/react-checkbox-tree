import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { CheckboxTree } from '.'

const createProps = (data) => ({ data })

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
  describe('When given a non-recursive object', () => {
    test('renders text', () => {
      const { getByLabelText } = render(
        <CheckboxTree {...createProps(createNonRecursiveObject())} />
      )

      expect(getByLabelText(text)).toBeDefined()
    })

    test('renders checkbox', () => {
      const { getByLabelText } = render(
        <CheckboxTree {...createProps(createNonRecursiveObject())} />
      )

      expect(getByLabelText(text).checked).toEqual(false)
    })

    test('toggles checkbox when clicked', () => {
      const { getByLabelText } = render(
        <CheckboxTree {...createProps(createNonRecursiveObject())} />
      )

      fireEvent.click(getByLabelText(text))

      expect(getByLabelText(text).checked).toEqual(true)
    })
  })

  describe('When given a recursive object', () => {
    test('renders all texts', () => {
      const { getByLabelText } = render(
        <CheckboxTree {...createProps(createRecursiveObject())} />
      )

      expect(getByLabelText(parent)).toBeDefined()
      expect(getByLabelText(child)).toBeDefined()
      expect(getByLabelText(grandchild)).toBeDefined()
    })

    test('toggles all checkboxes down recursively', () => {
      const { getByLabelText } = render(
        <CheckboxTree {...createProps(createRecursiveObject())} />
      )

      fireEvent.click(getByLabelText(parent))

      expect(getByLabelText(parent).checked).toEqual(true)
      expect(getByLabelText(child).checked).toEqual(true)
      expect(getByLabelText(grandchild).checked).toEqual(true)
    })

    test('toggles all checkboxes up recursively', () => {
      const { getByLabelText } = render(
        <CheckboxTree {...createProps(createRecursiveObject())} />
      )

      fireEvent.click(getByLabelText(grandchild))

      expect(getByLabelText(parent).checked).toEqual(true)
      expect(getByLabelText(child).checked).toEqual(true)
      expect(getByLabelText(grandchild).checked).toEqual(true)
    })
  })
})
