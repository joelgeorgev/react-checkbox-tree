import { getNewState } from '.'

const createNode = (overrides) => ({
  childIds: [],
  parentId: undefined,
  checked: false,
  ...overrides
})

const createParent = (overrides) =>
  createNode({ childIds: [1, 2], ...overrides })

const createFirstChild = (overrides) =>
  createNode({ childIds: [3], parentId: 0, ...overrides })

const createSecondChild = (overrides) =>
  createNode({ parentId: 0, ...overrides })

const createGrandChild = (overrides) =>
  createNode({ parentId: 1, ...overrides })

describe('getNewState', () => {
  describe.each([
    [
      {
        prevState: {
          0: createNode()
        },
        id: 0,
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
        id: 0,
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
        id: 3,
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
        id: 0,
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
        id: 2,
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
