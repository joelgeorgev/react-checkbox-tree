import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { CheckboxTree } from '.'

describe('CheckboxTree tests', () => {
  const createProps = (props) => ({ ...props })

  describe('When given a non-recursive object', () => {
    const text = 'Hello World'
    const getNonRecursiveObject = () => ({ text, checked: false })

    test('It should render text as provided', () => {
      const { getByLabelText } = render(
        <CheckboxTree data={createProps(getNonRecursiveObject())} />
      )

      expect(getByLabelText(text)).toBeDefined()
    })

    test('It should render checkbox as provided', () => {
      const { getByLabelText } = render(
        <CheckboxTree data={createProps(getNonRecursiveObject())} />
      )

      expect(getByLabelText(text).checked).toEqual(false)
    })

    test('It should toggle checkbox when clicked', () => {
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

    test('It should render all texts as provided', () => {
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
})
