import { render, act } from '@testing-library/react'

import { CheckboxTree } from '.'
import { Checkbox } from '..'
import { loadTree } from '../../data'
import { normalize, getNewState } from '../../utils'

jest.mock('..')
jest.mock('../../data')
jest.mock('../../utils')

const mockCheckbox = Checkbox as jest.MockedFunction<typeof Checkbox>
const mockLoadTree = loadTree as jest.MockedFunction<typeof loadTree>
const mockNormalize = normalize as jest.MockedFunction<typeof normalize>
const mockGetNewState = getNewState as jest.MockedFunction<typeof getNewState>

type Tree = ReturnType<typeof loadTree>
type Nodes = ReturnType<typeof normalize>
type Node = Nodes[string]

const createTree = (): Tree => ({
  text: '',
  checked: false,
  children: []
})

const createNodes = (overrides?: Partial<Node>): Nodes => ({
  '0': {
    text: '',
    checked: false,
    childIds: [],
    ...overrides
  }
})

const renderCheckboxTree = () => render(<CheckboxTree />)

describe('CheckboxTree', () => {
  describe('Given there is NO tree', () => {
    test('does NOT render Checkbox', () => {
      renderCheckboxTree()

      expect(mockLoadTree).toHaveBeenCalledTimes(1)
      expect(mockLoadTree).toHaveBeenCalledWith()

      expect(mockNormalize).toHaveBeenCalledTimes(1)
      expect(mockNormalize).toHaveBeenCalledWith(undefined)

      expect(mockGetNewState).toHaveBeenCalledTimes(0)

      expect(mockCheckbox).toHaveBeenCalledTimes(0)
    })
  })

  describe('Given a tree', () => {
    test('renders Checkbox', () => {
      const tree = createTree()
      mockLoadTree.mockReturnValue(tree)
      const nodes = createNodes()
      mockNormalize.mockReturnValue(nodes)

      renderCheckboxTree()

      expect(mockLoadTree).toHaveBeenCalledTimes(1)
      expect(mockLoadTree).toHaveBeenCalledWith()

      expect(mockNormalize).toHaveBeenCalledTimes(1)
      expect(mockNormalize).toHaveBeenCalledWith(tree)

      expect(mockGetNewState).toHaveBeenCalledTimes(0)

      expect(mockCheckbox).toHaveBeenCalledTimes(1)

      const checkboxProps = mockCheckbox.mock.calls[0][0]

      expect(checkboxProps).toEqual({
        id: '0',
        nodes,
        onToggle: expect.any(Function)
      })

      const newNodes = createNodes({ text: 'New' })
      mockGetNewState.mockReturnValue(newNodes)
      const nodeId = '1'

      act(() => {
        checkboxProps.onToggle(nodeId)
      })

      expect(mockGetNewState).toHaveBeenCalledTimes(1)
      expect(mockGetNewState).toHaveBeenCalledWith(nodes, nodeId)

      expect(mockCheckbox).toHaveBeenCalledTimes(2)

      const newCheckboxProps = mockCheckbox.mock.calls[1][0]

      expect(newCheckboxProps).toEqual({
        id: '0',
        nodes: newNodes,
        onToggle: expect.any(Function)
      })
    })
  })
})
