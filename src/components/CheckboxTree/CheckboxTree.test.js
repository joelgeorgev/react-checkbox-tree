import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { CheckboxTree } from '.'

const text = 'Hello World'
const defaultChecked = false

const createNonRecursiveObject = () => ({ text, checked: defaultChecked })

const parent = 'Parent'
const child = 'Child'
const grandchild = 'Grandchild'

const createRecursiveObject = () => ({
  text: parent,
  checked: defaultChecked,
  children: [
    {
      text: child,
      checked: defaultChecked,
      children: [
        {
          text: grandchild,
          checked: defaultChecked
        }
      ]
    }
  ]
})

const renderCheckboxTree = (props) => render(<CheckboxTree {...props} />)

const findCheckbox = (text) => screen.getByRole('checkbox', { name: text })

const toggleCheckbox = (text) => fireEvent.click(findCheckbox(text))

const assertCheckbox = (text, checked = defaultChecked) => {
  const checkbox = findCheckbox(text)
  expect(checkbox).toBeDefined()
  expect(checkbox.checked).toEqual(checked)
}

const assertCheckboxChecked = (text) => assertCheckbox(text, true)

describe('CheckboxTree', () => {
  describe('Given a non-recursive object', () => {
    test('renders a checkbox', () => {
      renderCheckboxTree({ data: createNonRecursiveObject() })

      assertCheckbox(text)
    })

    test('toggles the checkbox', () => {
      renderCheckboxTree({ data: createNonRecursiveObject() })

      toggleCheckbox(text)

      assertCheckboxChecked(text)
    })
  })

  describe('Given a recursive object', () => {
    test('renders all checkboxes', () => {
      renderCheckboxTree({ data: createRecursiveObject() })

      assertCheckbox(parent)
      assertCheckbox(child)
      assertCheckbox(grandchild)
    })

    test('toggles all checkboxes down recursively', () => {
      renderCheckboxTree({ data: createRecursiveObject() })

      toggleCheckbox(parent)

      assertCheckboxChecked(parent)
      assertCheckboxChecked(child)
      assertCheckboxChecked(grandchild)
    })

    test('toggles all checkboxes up recursively', () => {
      renderCheckboxTree({ data: createRecursiveObject() })

      toggleCheckbox(grandchild)

      assertCheckboxChecked(parent)
      assertCheckboxChecked(child)
      assertCheckboxChecked(grandchild)
    })
  })
})
