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

const assertCheckboxChecked = (text: string): void => {
  const checkbox = findCheckbox(text)

  expect(checkbox).toBeInTheDocument()
  expect(checkbox).toBeChecked()
}

const assertCheckboxUnchecked = (text: string): void => {
  const checkbox = findCheckbox(text)

  expect(checkbox).toBeInTheDocument()
  expect(checkbox).not.toBeChecked()
}

describe('CheckboxTree', () => {
  test('toggles Checkboxes', async () => {
    renderCheckboxTree()

    assertCheckboxUnchecked('Select all')
    assertCheckboxUnchecked('Name')

    await toggleCheckbox('Select all')

    assertCheckboxChecked('Select all')
    assertCheckboxChecked('Name')
  })
})
