import { normalize } from '.'

describe('normalize tests', () => {
  const createNode = (params) => ({
    childIds: [],
    parentId: undefined,
    ...params
  })

  describe('When given an object with a recursive structure like', () => {
    const cases = [
      [
        { text: 'Parent' },
        {
          0: createNode({ text: 'Parent' })
        }
      ],
      [
        {
          text: 'Parent',
          children: [{ text: 'Child' }]
        },
        {
          0: createNode({ text: 'Parent', childIds: [1] }),
          1: createNode({ text: 'Child', parentId: 0 })
        }
      ],
      [
        {
          text: 'Parent',
          children: [
            {
              text: 'Child',
              children: [{ text: 'Grandchild' }]
            }
          ]
        },
        {
          0: createNode({ text: 'Parent', childIds: [1] }),
          1: createNode({ text: 'Child', childIds: [2], parentId: 0 }),
          2: createNode({ text: 'Grandchild', parentId: 1 })
        }
      ]
    ]
    test.each(cases)('%o, it should return %o', (actual, expected) => {
      expect(normalize({ data: actual })).toEqual(expected)
    })
  })
})
