import { normalize, RecursiveData, Node } from '.'

const createRecursiveObject = (overrides?: Partial<RecursiveData>): RecursiveData => ({
  text: '',
  checked: false,
  children: [],
  ...overrides
})

const createNode = (overrides?: Partial<Node>): Node => ({
  text: '',
  checked: false,
  childIds: [],
  parentId: undefined,
  ...overrides
})

describe('normalize', () => {
  describe.each([
    [
      {
        recursiveObject: createRecursiveObject({ text: 'Parent' }),
        normalizedObject: {
          0: createNode({ text: 'Parent' })
        }
      }
    ],
    [
      {
        recursiveObject: createRecursiveObject({
          text: 'Parent',
          children: [createRecursiveObject({ text: 'Child' })]
        }),
        normalizedObject: {
          0: createNode({ text: 'Parent', childIds: ['1'] }),
          1: createNode({ text: 'Child', parentId: '0' })
        }
      }
    ],
    [
      {
        recursiveObject: createRecursiveObject({
          text: 'Parent',
          children: [
            createRecursiveObject({
              text: 'Child',
              children: [createRecursiveObject({ text: 'Grandchild' })]
            })
          ]
        }),
        normalizedObject: {
          0: createNode({ text: 'Parent', childIds: ['1'] }),
          1: createNode({ text: 'Child', childIds: ['2'], parentId: '0' }),
          2: createNode({ text: 'Grandchild', parentId: '1' })
        }
      }
    ]
  ])(
    'Given an object with a recursive structure',
    ({ recursiveObject, normalizedObject }) => {
      test('returns a normalized object', () => {
        expect(normalize(recursiveObject)).toEqual(normalizedObject)
      })
    }
  )
})
