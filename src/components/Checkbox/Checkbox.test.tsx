import type { ComponentProps } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { Checkbox } from '.'

type Props = ComponentProps<typeof Checkbox>
type Nodes = Props['nodes']
type Node = Nodes[string]
type OnToggle = Props['onToggle']

const defaultChecked = false

const createNode = (overrides?: Partial<Node>): Node => ({
  text: '',
  checked: defaultChecked,
  childIds: [],
  parentId: undefined,
  ...overrides
})

const text = 'Hello World'

const createSingleLevelNormalizedObject = (): Nodes => ({
  0: createNode({ text })
})

const parent = 'Parent'
const child = 'Child'
const grandchild = 'Grandchild'

const createMultiLevelNormalizedObject = (): Nodes => ({
  0: createNode({ text: parent, childIds: ['1'] }),
  1: createNode({ text: child, childIds: ['2'], parentId: '0' }),
  2: createNode({ text: grandchild, parentId: '1' })
})

const createProps = (overrides?: Partial<Props>): Props => ({
  id: '0',
  nodes: createSingleLevelNormalizedObject(),
  onToggle: () => {},
  ...overrides
})

const renderCheckbox = (props: Props) => render(<Checkbox {...props} />)

const findCheckbox = (text: string): HTMLInputElement =>
  screen.getByRole('checkbox', { name: text }) as HTMLInputElement

const toggleCheckbox = (text: string) => fireEvent.click(findCheckbox(text))

const assertCheckbox = (text: string): void => {
  const checkbox = findCheckbox(text) as HTMLInputElement

  expect(checkbox).toBeDefined()
  expect(checkbox.checked).toEqual(defaultChecked)
}

describe('Checkbox', () => {
  describe('Given a single level normalized object', () => {
    test('renders a checkbox', () => {
      renderCheckbox(
        createProps({ nodes: createSingleLevelNormalizedObject() })
      )

      assertCheckbox(text)
    })

    describe('When clicked on', () => {
      test('invokes the callback function', () => {
        const onToggle: jest.MockedFunction<OnToggle> = jest.fn()
        renderCheckbox(
          createProps({
            nodes: createSingleLevelNormalizedObject(),
            onToggle
          })
        )

        toggleCheckbox(text)

        expect(onToggle).toHaveBeenCalledTimes(1)
        expect(onToggle).toHaveBeenCalledWith('0')
      })
    })
  })

  describe('Given a multi level normalized object', () => {
    test('renders all checkboxes', () => {
      renderCheckbox(createProps({ nodes: createMultiLevelNormalizedObject() }))

      assertCheckbox(parent)
      assertCheckbox(child)
      assertCheckbox(grandchild)
    })

    describe.each([
      [grandchild, '2'],
      [child, '1'],
      [parent, '0']
    ])('When clicked on %s', (text, id) => {
      test(`invokes the callback function with ${id}`, () => {
        const onToggle: jest.MockedFunction<OnToggle> = jest.fn()
        renderCheckbox(
          createProps({
            nodes: createMultiLevelNormalizedObject(),
            onToggle
          })
        )

        toggleCheckbox(text)

        expect(onToggle).toHaveBeenCalledTimes(1)
        expect(onToggle).toHaveBeenCalledWith(id)
      })
    })
  })
})
