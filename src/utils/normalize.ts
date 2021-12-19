import type { Tree, Nodes } from '../types'

const RECURSION_KEY = 'children'

export const normalize = (tree: Tree): Nodes => {
  let normalizedTree: Nodes = {}
  let counter = -1

  const transform = (node: Tree, parentId?: string): void => {
    counter += 1

    const id = `${counter}`
    const { text, checked } = node

    normalizedTree[id] = {
      text,
      checked,
      parentId,
      childIds: []
    }

    if (parentId) {
      normalizedTree[parentId].childIds.push(id)
    }

    if (node[RECURSION_KEY] && node[RECURSION_KEY].length) {
      node[RECURSION_KEY].forEach((childNode) => {
        transform(childNode, id)
      })
    }
  }

  transform(tree)

  return normalizedTree
}
