import { normalize } from '.'

describe('normalize test', () => {
  it('should handle list containing recursive keys', () => {
    const input = [
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
    const output = {
      0: {
        childIds: [1]
      },
      1: {
        text: 'Parent',
        childIds: [2, 3]
      },
      2: {
        text: 'Child 1',
        childIds: []
      },
      3: {
        text: 'Child 2',
        childIds: [4]
      },
      4: {
        text: 'Grandchild',
        childIds: []
      }
    }
    expect(normalize(input)).toEqual(output)
  })
})