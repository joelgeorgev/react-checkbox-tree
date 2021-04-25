import type { ComponentProps } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { CheckboxTree } from '.'

type Props = ComponentProps<typeof CheckboxTree>
type RecursiveData = Props['data']

const text = 'Hello World'
const defaultChecked = false

const createDataObject = (
  overrides?: Partial<RecursiveData>
): RecursiveData => ({
  text,
  checked: defaultChecked,
  children: [],
  ...overrides
})

const createNonRecursiveObject = (): RecursiveData => createDataObject()

const parent = 'Parent'
const child = 'Child'
const grandchild = 'Grandchild'

const createRecursiveObject = (): RecursiveData =>
  createDataObject({
    text: parent,
    children: [
      createDataObject({
        text: child,
        children: [createDataObject({ text: grandchild })]
      })
    ]
  })

const renderCheckboxTree = (props: Props) => render(<CheckboxTree {...props} />)

const findCheckbox = (text: string): HTMLInputElement =>
  screen.getByRole('checkbox', { name: text }) as HTMLInputElement

const toggleCheckbox = (text: string) => fireEvent.click(findCheckbox(text))

const assertCheckbox = (text: string, checked = defaultChecked): void => {
  const checkbox = findCheckbox(text) as HTMLInputElement

  expect(checkbox).toBeDefined()
  expect(checkbox.checked).toEqual(checked)
}

const assertCheckboxChecked = (text: string): void => assertCheckbox(text, true)

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
