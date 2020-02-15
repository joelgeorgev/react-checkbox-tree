import { getNewState } from '.'

const createNode = (overrides) => ({
  childIds: [],
  parentId: undefined,
  checked: false,
  ...overrides
})

const createParent = () => createNode({ childIds: [1, 2] })
const createFirstChild = () => createNode({ childIds: [3], parentId: 0 })
const createSecondChild = () => createNode({ parentId: 0 })
const createGrandChild = () => createNode({ parentId: 1 })

describe('getNewState', () => {
  describe('Given a state and an id', () => {
    const cases = [
      [
        // Check node
        {
          0: createNode()
        },
        0,
        {
          0: { ...createNode(), checked: true }
        }
      ],
      [
        // Uncheck node
        {
          0: { ...createNode(), checked: true }
        },
        0,
        {
          0: createNode()
        }
      ],
      [
        // Check child node
        {
          0: createParent(),
          1: createFirstChild(),
          2: createGrandChild(),
          3: createSecondChild()
        },
        3,
        {
          0: createParent(),
          1: createFirstChild(),
          2: createGrandChild(),
          3: { ...createSecondChild(), checked: true }
        }
      ],
      [
        // Check all child nodes recursively
        {
          0: createParent(),
          1: createFirstChild(),
          2: createGrandChild(),
          3: createSecondChild()
        },
        0,
        {
          0: { ...createParent(), checked: true },
          1: { ...createFirstChild(), checked: true },
          2: { ...createGrandChild(), checked: true },
          3: { ...createSecondChild(), checked: true }
        }
      ],
      [
        // Check all parent nodes recursively
        {
          0: createParent(),
          1: createFirstChild(),
          2: createGrandChild(),
          3: { ...createSecondChild(), checked: true }
        },
        2,
        {
          0: { ...createParent(), checked: true },
          1: { ...createFirstChild(), checked: true },
          2: { ...createGrandChild(), checked: true },
          3: { ...createSecondChild(), checked: true }
        }
      ]
    ]
    test.each(cases)('returns a new state', (state, id, newState) => {
      expect(getNewState({ state, id })).toEqual(newState)
    })
  })
})
