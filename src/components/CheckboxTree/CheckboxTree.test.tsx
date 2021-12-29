import { render, screen, fireEvent } from '@testing-library/react'

import { CheckboxTree } from '.'
import { loadTree } from '../../data'

jest.mock('../../data')

type Tree = ReturnType<typeof loadTree>

const mockLoadTree = loadTree as jest.MockedFunction<typeof loadTree>

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

const renderCheckboxTree = () => render(<CheckboxTree />)

const findCheckbox = (text: string): HTMLInputElement =>
  screen.getByRole('checkbox', { name: text })

const toggleCheckbox = (text: string) => fireEvent.click(findCheckbox(text))

const assertCheckbox = (text: string, checked = defaultChecked): void => {
  const checkbox = findCheckbox(text)

  expect(checkbox).toBeDefined()
  expect(checkbox.checked).toEqual(checked)
}

const assertCheckboxChecked = (text: string): void => assertCheckbox(text, true)

const assertLoadTree = (): void => {
  expect(mockLoadTree).toHaveBeenCalledTimes(1)
  expect(mockLoadTree).toHaveBeenCalledWith()
}

describe('CheckboxTree', () => {
  describe('Given a single level tree', () => {
    test('renders a checkbox', () => {
      mockLoadTree.mockReturnValue(createSingleLevelTree())

      renderCheckboxTree()

      assertCheckbox(text)

      assertLoadTree()
    })

    test('toggles the checkbox', () => {
      mockLoadTree.mockReturnValue(createSingleLevelTree())

      renderCheckboxTree()

      toggleCheckbox(text)

      assertCheckboxChecked(text)

      assertLoadTree()
    })
  })

  describe('Given a multilevel tree', () => {
    test('renders all checkboxes', () => {
      mockLoadTree.mockReturnValue(createMultilevelTree())

      renderCheckboxTree()

      assertCheckbox(parent)
      assertCheckbox(child)
      assertCheckbox(grandchild)

      assertLoadTree()
    })

    test('toggles all checkboxes down', () => {
      mockLoadTree.mockReturnValue(createMultilevelTree())

      renderCheckboxTree()

      toggleCheckbox(parent)

      assertCheckboxChecked(parent)
      assertCheckboxChecked(child)
      assertCheckboxChecked(grandchild)

      assertLoadTree()
    })

    test('toggles all checkboxes up', () => {
      mockLoadTree.mockReturnValue(createMultilevelTree())

      renderCheckboxTree()

      toggleCheckbox(grandchild)

      assertCheckboxChecked(parent)
      assertCheckboxChecked(child)
      assertCheckboxChecked(grandchild)

      assertLoadTree()
    })
  })
})
