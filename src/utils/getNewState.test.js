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
    const getFirstChild = () => buildObject({ parentId: 0 })
    const getSecondChild = () => buildObject({ parentId: 0 })

    const cases = [
      [
        {
          0: getNode()
        },
        0,
        {
          0: { ...getNode(), checked: true }
        }
      ],
      [
        {
          0: getParent(),
          1: getFirstChild(),
          2: getSecondChild()
        },
        0,
        {
          0: { ...getParent(), checked: true },
          1: { ...getFirstChild(), checked: true },
          2: { ...getSecondChild(), checked: true }
        }
      ],
      [
        {
          0: getParent(),
          1: { ...getFirstChild(), checked: true },
          2: getSecondChild()
        },
        2,
        {
          0: { ...getParent(), checked: true },
          1: { ...getFirstChild(), checked: true },
          2: { ...getSecondChild(), checked: true }
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
