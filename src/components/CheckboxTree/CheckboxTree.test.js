import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { CheckboxTree } from '.'

describe('CheckboxTree', () => {
  const createProps = (props) => ({ ...props })

  describe('When given a non-recursive object', () => {
    const text = 'Hello World'
    const getNonRecursiveObject = () => ({ text, checked: false })

    test('should render text as provided', () => {
      const { getByLabelText } = render(
        <CheckboxTree data={createProps(getNonRecursiveObject())} />
      )

      expect(getByLabelText(text)).toBeDefined()
    })

    test('should render checkbox as provided', () => {
      const { getByLabelText } = render(
        <CheckboxTree data={createProps(getNonRecursiveObject())} />
      )

      expect(getByLabelText(text).checked).toEqual(false)
    })

    test('should toggle checkbox when clicked', () => {
      const { getByLabelText } = render(
        <CheckboxTree data={createProps(getNonRecursiveObject())} />
      )

      fireEvent.click(getByLabelText(text))

      expect(getByLabelText(text).checked).toEqual(true)
    })
  })

  describe('When given a recursive object', () => {
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

    test('should render all texts as provided', () => {
      const { getByLabelText } = render(
        <CheckboxTree data={createProps(getRecursiveObject())} />
      )

      expect(getByLabelText(parent)).toBeDefined()
      expect(getByLabelText(child)).toBeDefined()
      expect(getByLabelText(grandchild)).toBeDefined()
    })

    test('should toggle all checkboxes down recursively', () => {
      const { getByLabelText } = render(
        <CheckboxTree data={createProps(getRecursiveObject())} />
      )

      fireEvent.click(getByLabelText(parent))

      expect(getByLabelText(parent).checked).toEqual(true)
      expect(getByLabelText(child).checked).toEqual(true)
      expect(getByLabelText(grandchild).checked).toEqual(true)
    })

    test('should toggle all checkboxes up recursively', () => {
      const { getByLabelText } = render(
        <CheckboxTree data={createProps(getRecursiveObject())} />
      )

      fireEvent.click(getByLabelText(grandchild))

      expect(getByLabelText(parent).checked).toEqual(true)
      expect(getByLabelText(child).checked).toEqual(true)
      expect(getByLabelText(grandchild).checked).toEqual(true)
    })
  })
})
