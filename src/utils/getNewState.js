export const getNewState = ({ id, state }) => {
  const toggleNode = ({ node, checked }) => ({ ...node, checked })

  const toggleSelfandChildren = ({ id, nodes, checked }) => {
    const node = nodes[id]
    const { childIds } = node

    nodes[id] = toggleNode({ node: nodes[id], checked })
    if (childIds.length) {
      childIds.forEach((childId) => {
        toggleSelfandChildren({ id: childId, nodes, checked })
      })
    }
  }

  const toggleParent = ({ id, nodes }) => {
    const areChildrenChecked = ({ id, nodes }) => {
      const node = nodes[id]
      const { childIds } = node

      return childIds.length
        ? childIds.reduce(
            (checkedAcc, childId) =>
              checkedAcc && areChildrenChecked({ id: childId, nodes }),
            true
          )
        : node.checked
    }

    const parentId = nodes[id].parentId
    if (!(parentId >= 0)) {
      return
    }
    const parentNode = nodes[parentId]
    const shouldToggleParent = areChildrenChecked({ id: parentId, nodes })
    if (parentNode.checked !== shouldToggleParent) {
      nodes[parentId] = toggleNode({
        node: nodes[parentId],
        checked: shouldToggleParent
      })
    }
    toggleParent({ id: parentId, nodes })
  }

  if (!state[id]) {
    return state
  }
  const nodes = { ...state }
  toggleSelfandChildren({ id, nodes, checked: !nodes[id].checked })
  toggleParent({ id, nodes })
  return nodes
}
