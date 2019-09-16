import { normalize } from '.'

describe('normalize test', () => {
  it('should handle list containing recursive keys', () => {
    const input = {
      text: 'Root',
      children: [
        {
          text: 'Parent',
          children: [
            {
              text: 'Child 1'
            },
            {
              text: 'Child 2',
              children: [
                {
                  text: 'Grandchild'
                }
              ]
            }
          ]
        }
      ]
    }
    const output = {
      0: {
        text: 'Root',
        childIds: [1],
        parentId: undefined
      },
      1: {
        text: 'Parent',
        parentId: 0,
        childIds: [2, 3]
      },
      2: {
        text: 'Child 1',
        parentId: 1,
        childIds: []
      },
      3: {
        text: 'Child 2',
        parentId: 1,
        childIds: [4]
      },
      4: {
        text: 'Grandchild',
        parentId: 3,
        childIds: []
      }
    }
    expect(normalize({ data: input })).toEqual(output)
  })
})
