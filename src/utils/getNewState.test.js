import { getNewState } from '.'

describe('getNewState', () => {
  describe('When given a state and an id', () => {
    const createNode = (params) => ({
      childIds: [],
      parentId: undefined,
      checked: false,
      ...params
    })
    const getNode = () => createNode()
    const getParent = () => createNode({ childIds: [1, 2] })
    const getFirstChild = () => createNode({ childIds: [3], parentId: 0 })
    const getSecondChild = () => createNode({ parentId: 0 })
    const getGrandChild = () => createNode({ parentId: 1 })

    const cases = [
      [
        // Check node
        {
          0: getNode()
        },
        0,
        {
          0: { ...getNode(), checked: true }
        }
      ],
      [
        // Uncheck node
        {
          0: { ...getNode(), checked: true }
        },
        0,
        {
          0: getNode()
        }
      ],
      [
        // Check child node
        {
          0: getParent(),
          1: getFirstChild(),
          2: getGrandChild(),
          3: getSecondChild()
        },
        3,
        {
          0: getParent(),
          1: getFirstChild(),
          2: getGrandChild(),
          3: { ...getSecondChild(), checked: true }
        }
      ],
      [
        // Check all child nodes recursively
        {
          0: getParent(),
          1: getFirstChild(),
          2: getGrandChild(),
          3: getSecondChild()
        },
        0,
        {
          0: { ...getParent(), checked: true },
          1: { ...getFirstChild(), checked: true },
          2: { ...getGrandChild(), checked: true },
          3: { ...getSecondChild(), checked: true }
        }
      ],
      [
        // Check all parent nodes recursively
        {
          0: getParent(),
          1: getFirstChild(),
          2: getGrandChild(),
          3: { ...getSecondChild(), checked: true }
        },
        2,
        {
          0: { ...getParent(), checked: true },
          1: { ...getFirstChild(), checked: true },
          2: { ...getGrandChild(), checked: true },
          3: { ...getSecondChild(), checked: true }
        }
      ]
    ]
    test.each(cases)('returns a new state', (state, id, newState) => {
      expect(getNewState({ state, id })).toEqual(newState)
    })
  })
})
