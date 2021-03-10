const toggleNode = (node, checked) => ({ ...node, checked })

const toggleNodeAndChildren = (nodes, id, checked) => {
  let newNodes = { ...nodes }
  const currentNode = newNodes[id]
  const { childIds } = currentNode

  newNodes[id] = toggleNode(currentNode, checked)

  if (childIds.length) {
    childIds.forEach((childId) => {
      newNodes = toggleNodeAndChildren(newNodes, childId, checked)
    })
  }

  return newNodes
}

const areChildrenChecked = (nodes, id) => {
  const currentNode = nodes[id]
  const { checked, childIds } = currentNode

  return childIds.length
    ? childIds.reduce(
        (acc, childId) => acc && areChildrenChecked(nodes, childId),
        true
      )
    : checked
}

const toggleParent = (nodes, id) => {
  const parentId = nodes[id].parentId

  if (parentId === undefined) {
    return nodes
  }

  let newNodes = { ...nodes }
  const parentNode = newNodes[parentId]
  const shouldToggleParent = areChildrenChecked(newNodes, parentId)

  if (parentNode.checked !== shouldToggleParent) {
    newNodes[parentId] = toggleNode(parentNode, shouldToggleParent)
  }

  return toggleParent(newNodes, parentId)
}

export const getNewState = (nodes, id) => {
  let newNodes

  newNodes = toggleNodeAndChildren(nodes, id, !nodes[id].checked)
  newNodes = toggleParent(newNodes, id)

  return newNodes
}
