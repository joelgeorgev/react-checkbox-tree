import { normalize } from '.'

const createNode = (overrides) => ({
  childIds: [],
  parentId: undefined,
  ...overrides
})

describe('normalize', () => {
  ;[
    {
      recursiveObject: { text: 'Parent' },
      normalizedObject: {
        0: createNode({ text: 'Parent' })
      }
    },
    {
      recursiveObject: {
        text: 'Parent',
        children: [{ text: 'Child' }]
      },
      normalizedObject: {
        0: createNode({ text: 'Parent', childIds: [1] }),
        1: createNode({ text: 'Child', parentId: 0 })
      }
    },
    {
      recursiveObject: {
        text: 'Parent',
        children: [
          {
            text: 'Child',
            children: [{ text: 'Grandchild' }]
          }
        ]
      },
      normalizedObject: {
        0: createNode({ text: 'Parent', childIds: [1] }),
        1: createNode({ text: 'Child', childIds: [2], parentId: 0 }),
        2: createNode({ text: 'Grandchild', parentId: 1 })
      }
    }
  ].forEach(({ recursiveObject, normalizedObject: expected }) => {
    describe('Given an object with a recursive structure', () => {
      let normalizedObject

      beforeEach(() => {
        normalizedObject = normalize(recursiveObject)
      })

      test('returns a normalized object', () => {
        expect(normalizedObject).toEqual(expected)
      })
    })
  })
})
