import { normalize } from '.'

describe('normalize tests', () => {
  const buildObject = ({ childIds = [], parentId, ...rest }) => ({
    childIds,
    parentId,
    ...rest
  })

  describe(`When given an object with a recursive structure, 
  it should return a normalized object with indices as keys`, () => {
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
    test.each(cases)('Input: %j', (actual, expected) => {
      expect(normalize({ data: actual })).toEqual(expected)
    })
  })
})
