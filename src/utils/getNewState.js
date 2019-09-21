export const getNewState = ({ id, state }) => {
  const clone = (state) => {
    let newState = {}

    Object.keys(state).forEach((value) => {
      newState[value] = { ...state[value] }
    })
    return newState
  }

  const toggleNode = ({ node, checked }) => {
    node.checked = checked
  }

  const toggleSelfandChildren = ({ id, nodes, checked }) => {
    const node = nodes[id]
    const { childIds } = node

    toggleNode({ node, checked })
    if (childIds.length) {
      childIds.forEach((childId) => {
        toggleSelfandChildren({ id: childId, nodes, checked })
      })
    }
  }

  const toggleParent = ({ id, nodes }) => {
    const isNodeChecked = ({ id, nodes }) => {
      const node = nodes[id]
      const { childIds } = node

      return childIds.length
        ? childIds.reduce(
            (checkedAcc, childId) =>
              checkedAcc && isNodeChecked({ id: childId, nodes }),
            true
          )
        : node.checked
    }

    const parentId = nodes[id].parentId
    if (!(parentId >= 0)) {
      return
    }
    const parentNode = nodes[parentId]
    const areChildrenChecked = isNodeChecked({ id: parentId, nodes })

    toggleNode({ node: parentNode, checked: areChildrenChecked })
    if (parentNode.parentId >= 0) {
      toggleParent({ id: parentId, nodes })
    }
  }

  if (!state[id]) {
    return state
  }
  const nodes = clone(state)
  toggleSelfandChildren({ id, nodes, checked: !nodes[id].checked })
  toggleParent({ id, nodes })
  return nodes
}
