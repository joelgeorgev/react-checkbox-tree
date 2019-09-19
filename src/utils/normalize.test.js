import { normalize } from '.'

describe('normalize tests', () => {
  const buildObject = (params) => ({
    childIds: [],
    parentId: undefined,
    ...params
  })

  describe('When given an object with a recursive structure like', () => {
    const cases = [
      [
        { text: 'Parent' },
        {
          0: buildObject({ text: 'Parent' })
        }
      ],
      [
        {
          text: 'Parent',
          children: [{ text: 'Child' }]
        },
        {
          0: buildObject({ text: 'Parent', childIds: [1] }),
          1: buildObject({ text: 'Child', parentId: 0 })
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
          0: buildObject({ text: 'Parent', childIds: [1] }),
          1: buildObject({ text: 'Child', childIds: [2], parentId: 0 }),
          2: buildObject({ text: 'Grandchild', parentId: 1 })
        }
      ]
    ]
    test.each(cases)('%o, it should return %o', (actual, expected) => {
      expect(normalize({ data: actual })).toEqual(expected)
    })
  })
})
