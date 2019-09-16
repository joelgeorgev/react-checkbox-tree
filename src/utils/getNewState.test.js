import { getNewState } from '.'

describe('getNewState tests', () => {
  describe('When provided with an id and a normalized object', () => {
    test('it should return a new object with toggled checked property for object at provided id', () => {
      const obj = {
        0: {
          checked: false,
          parentId: undefined,
          childIds: []
        }
      }
      const expected = {
        0: {
          checked: true,
          parentId: undefined,
          childIds: []
        }
      }
      expect(getNewState({ id: 0, state: obj })).toEqual(expected)
    })
  })
})
