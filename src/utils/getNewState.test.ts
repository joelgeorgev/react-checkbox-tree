import { getNewState } from './getNewState'

type Nodes = ReturnType<typeof getNewState>
type Node = Nodes[string]

const createNode = (overrides?: Partial<Node>): Node => ({
  text: '',
  checked: false,
  childIds: [],
  parentId: undefined,
  ...overrides
})

const createParent = (overrides?: Partial<Node>): Node =>
  createNode({ childIds: ['1', '2'], ...overrides })

const createFirstChild = (overrides?: Partial<Node>): Node =>
  createNode({ childIds: ['3'], parentId: '0', ...overrides })

const createSecondChild = (overrides?: Partial<Node>): Node =>
  createNode({ parentId: '0', ...overrides })

const createGrandChild = (overrides?: Partial<Node>): Node =>
  createNode({ parentId: '1', ...overrides })

describe('getNewState', () => {
  describe.each([
    [
      {
        prevState: {
          0: createNode()
        },
        id: '0',
        newState: {
          0: createNode({ checked: true })
        }
      }
    ],
    [
      {
        prevState: {
          0: createNode({ checked: true })
        },
        id: '0',
        newState: {
          0: createNode()
        }
      }
    ],
    [
      {
        prevState: {
          0: createParent(),
          1: createFirstChild(),
          2: createGrandChild(),
          3: createSecondChild()
        },
        id: '3',
        newState: {
          0: createParent(),
          1: createFirstChild(),
          2: createGrandChild(),
          3: createSecondChild({ checked: true })
        }
      }
    ],
    [
      {
        prevState: {
          0: createParent(),
          1: createFirstChild(),
          2: createGrandChild(),
          3: createSecondChild()
        },
        id: '0',
        newState: {
          0: createParent({ checked: true }),
          1: createFirstChild({ checked: true }),
          2: createGrandChild({ checked: true }),
          3: createSecondChild({ checked: true })
        }
      }
    ],
    [
      {
        prevState: {
          0: createParent(),
          1: createFirstChild(),
          2: createGrandChild(),
          3: createSecondChild({ checked: true })
        },
        id: '2',
        newState: {
          0: createParent({ checked: true }),
          1: createFirstChild({ checked: true }),
          2: createGrandChild({ checked: true }),
          3: createSecondChild({ checked: true })
        }
      }
    ]
  ])('Given a state AND an id', ({ prevState, id, newState }) => {
    test('returns a new state', () => {
      expect(getNewState(prevState, id)).toEqual(newState)
    })
  })
})
