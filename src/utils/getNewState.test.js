import { getNewState } from '.'

describe('getNewState tests', () => {
  describe('When provided with', () => {
    const buildObject = (params) => ({
      childIds: [],
      parentId: undefined,
      checked: false,
      ...params
    })
    const getNode = () => buildObject()
    const getParent = () => buildObject({ childIds: [1, 2] })
    const getFirstChild = () => buildObject({ childIds: [3], parentId: 0 })
    const getSecondChild = () => buildObject({ parentId: 0 })
    const getGrandChild = () => buildObject({ parentId: 1 })

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
        // Pass invalid Id
        {
          0: getNode()
        },
        5,
        {
          0: getNode()
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
    test.each(cases)(
      'a state %o and an id %i, it should return %o',
      (state, id, newState) => {
        expect(getNewState({ state, id })).toEqual(newState)
      }
    )
  })
})
