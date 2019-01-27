export const normalize = (list = [], recursionKey = 'children') => {

  let normalizedData = {}
  let counter = -1

  const transform = (node, parentId) => {
    counter += 1
    const id = counter
    const { [recursionKey]: unused, ...rest } = node
    normalizedData[id] = {
      ...rest,
      childIds: []
    }
    if (parentId >= 0) {
      normalizedData[parentId].childIds.push(id)
    }
    if (node[recursionKey] && node[recursionKey].length) {
      node[recursionKey].forEach((childNode) => {
        transform(childNode, id)
      })
    }
  }

  transform({ [recursionKey]: list })
  return normalizedData
}