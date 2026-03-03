import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CheckboxTree } from './CheckboxTree.tsx'

const renderCheckboxTree = () => render(<CheckboxTree />)

const findCheckbox = (text: string): HTMLInputElement =>
  screen.getByRole('checkbox', { name: text })

const toggleCheckbox = (text: string) => {
  const user = userEvent.setup()

  return user.click(findCheckbox(text))
}

const assertCheckbox = (text: string, checked: boolean): void => {
  const checkbox = findCheckbox(text)

  expect(checkbox).toBeDefined()
  expect(checkbox.checked).toEqual(checked)
}

describe('CheckboxTree', () => {
  test('toggles Checkboxes', async () => {
    renderCheckboxTree()

    assertCheckbox('Select all', false)
    assertCheckbox('Name', false)

    await toggleCheckbox('Select all')

    assertCheckbox('Select all', true)
    assertCheckbox('Name', true)
  })
})
