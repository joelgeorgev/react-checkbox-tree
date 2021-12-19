import type { ComponentProps } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { CheckboxTree } from '.'

type Props = ComponentProps<typeof CheckboxTree>
type Tree = Props['tree']

const text = 'Hello World'
const defaultChecked = false

const createTree = (overrides?: Partial<Tree>): Tree => ({
  text,
  checked: defaultChecked,
  children: [],
  ...overrides
})

const createSingleLevelTree = (): Tree => createTree()

const parent = 'Parent'
const child = 'Child'
const grandchild = 'Grandchild'

const createMultilevelTree = (): Tree =>
  createTree({
    text: parent,
    children: [
      createTree({
        text: child,
        children: [createTree({ text: grandchild })]
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
  describe('Given a single level tree', () => {
    test('renders a checkbox', () => {
      renderCheckboxTree({ tree: createSingleLevelTree() })

      assertCheckbox(text)
    })

    test('toggles the checkbox', () => {
      renderCheckboxTree({ tree: createSingleLevelTree() })

      toggleCheckbox(text)

      assertCheckboxChecked(text)
    })
  })

  describe('Given a multilevel tree', () => {
    test('renders all checkboxes', () => {
      renderCheckboxTree({ tree: createMultilevelTree() })

      assertCheckbox(parent)
      assertCheckbox(child)
      assertCheckbox(grandchild)
    })

    test('toggles all checkboxes down', () => {
      renderCheckboxTree({ tree: createMultilevelTree() })

      toggleCheckbox(parent)

      assertCheckboxChecked(parent)
      assertCheckboxChecked(child)
      assertCheckboxChecked(grandchild)
    })

    test('toggles all checkboxes up', () => {
      renderCheckboxTree({ tree: createMultilevelTree() })

      toggleCheckbox(grandchild)

      assertCheckboxChecked(parent)
      assertCheckboxChecked(child)
      assertCheckboxChecked(grandchild)
    })
  })
})
