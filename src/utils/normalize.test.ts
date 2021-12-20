import { normalize } from './normalize'

type Tree = Parameters<typeof normalize>[0]
type Nodes = ReturnType<typeof normalize>
type Node = Nodes[string]

const createTree = (overrides?: Partial<Tree>): Tree => ({
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
        tree: createTree({ text: 'Parent' }),
        normalizedTree: {
          0: createNode({ text: 'Parent' })
        }
      }
    ],
    [
      {
        tree: createTree({
          text: 'Parent',
          children: [createTree({ text: 'Child' })]
        }),
        normalizedTree: {
          0: createNode({ text: 'Parent', childIds: ['1'] }),
          1: createNode({ text: 'Child', parentId: '0' })
        }
      }
    ],
    [
      {
        tree: createTree({
          text: 'Parent',
          children: [
            createTree({
              text: 'Child',
              children: [createTree({ text: 'Grandchild' })]
            })
          ]
        }),
        normalizedTree: {
          0: createNode({ text: 'Parent', childIds: ['1'] }),
          1: createNode({ text: 'Child', childIds: ['2'], parentId: '0' }),
          2: createNode({ text: 'Grandchild', parentId: '1' })
        }
      }
    ]
  ])('Given a tree', ({ tree, normalizedTree }) => {
    test('returns a normalized tree', () => {
      expect(normalize(tree)).toEqual(normalizedTree)
    })
  })
})
