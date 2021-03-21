import { RecursiveData, Nodes } from '.'

const RECURSION_KEY = 'children'

export const normalize = (data: RecursiveData): Nodes => {
  let normalizedData: Nodes = {}
  let counter = -1

  const transform = (node: RecursiveData, parentId?: string) => {
    counter += 1

    const id = `${counter}`
    const { text = '', checked = false } = node

    normalizedData[id] = {
      text,
      checked,
      parentId,
      childIds: []
    }

    if (parentId) {
      normalizedData[parentId].childIds.push(id)
    }

    if (node[RECURSION_KEY] && node[RECURSION_KEY].length) {
      node[RECURSION_KEY].forEach((childNode) => {
        transform(childNode, id)
      })
    }
  }

  transform(data)

  return normalizedData
}
