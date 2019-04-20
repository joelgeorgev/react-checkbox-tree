import { getNewState } from '.'

describe('getNewState test', () => {
  let input

  beforeEach(() => {
    input = {
      0: {
        childIds: [1],
        parentId: undefined
      },
      1: {
        text: 'Parent',
        checked: false,
        parentId: 0,
        childIds: [2, 3]
      },
      2: {
        text: 'Child 1',
        checked: false,
        parentId: 1,
        childIds: []
      },
      3: {
        text: 'Child 2',
        checked: false,
        parentId: 1,
        childIds: [4]
      },
      4: {
        text: 'Grandchild',
        checked: false,
        parentId: 3,
        childIds: []
      }
    }
  })

  it(`should return new state with toggled checked
   property for provided id`, () => {
    const output = {
      0: {
        childIds: [1],
        checked: false,
        parentId: undefined
      },
      1: {
        text: 'Parent',
        checked: false,
        parentId: 0,
        childIds: [2, 3]
      },
      2: {
        text: 'Child 1',
        checked: true,
        parentId: 1,
        childIds: []
      },
      3: {
        text: 'Child 2',
        checked: false,
        parentId: 1,
        childIds: [4]
      },
      4: {
        text: 'Grandchild',
        checked: false,
        parentId: 3,
        childIds: []
      }
    }
    expect(getNewState({ id: 2, prevState: input })).toEqual(output)
  })

  it(`should return new state with toggled checked
   property for provided id and it's parents`, () => {
    const output = {
      0: {
        childIds: [1],
        checked: false,
        parentId: undefined
      },
      1: {
        text: 'Parent',
        checked: false,
        parentId: 0,
        childIds: [2, 3]
      },
      2: {
        text: 'Child 1',
        checked: false,
        parentId: 1,
        childIds: []
      },
      3: {
        text: 'Child 2',
        checked: true,
        parentId: 1,
        childIds: [4]
      },
      4: {
        text: 'Grandchild',
        checked: true,
        parentId: 3,
        childIds: []
      }
    }
    expect(getNewState({ id: 4, prevState: input })).toEqual(output)
  })

  it(`should return new state with toggled checked
   property for provided id and it's children`, () => {
    const output = {
      0: {
        childIds: [1],
        checked: true,
        parentId: undefined
      },
      1: {
        text: 'Parent',
        checked: true,
        parentId: 0,
        childIds: [2, 3]
      },
      2: {
        text: 'Child 1',
        checked: true,
        parentId: 1,
        childIds: []
      },
      3: {
        text: 'Child 2',
        checked: true,
        parentId: 1,
        childIds: [4]
      },
      4: {
        text: 'Grandchild',
        checked: true,
        parentId: 3,
        childIds: []
      }
    }
    expect(getNewState({ id: 1, prevState: input })).toEqual(output)
  })
})
