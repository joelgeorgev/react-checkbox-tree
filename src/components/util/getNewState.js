export const getNewState = ({ id, prevState }) => {

  const clone = (prevState) => {
    let newState = {}

    Object.keys(prevState).forEach((value) => {
      newState[value] = { ...prevState[value] }
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

      return childIds.length ?
        (childIds.reduce((checkedAcc, childId) => {
          return checkedAcc && isNodeChecked({ id: childId, nodes })
        }, true))
        :
        node.checked
    }

    const parentId = nodes[id].parentId
    const parentNode = nodes[parentId]
    const areChildrenChecked = isNodeChecked({ id: parentId, nodes })

    toggleNode({ node: parentNode, checked: areChildrenChecked })
    if (parentNode.parentId >= 0) {
      toggleParent({ id: parentId, nodes })
    }
  }

  const nodes = clone(prevState)
  toggleSelfandChildren({ id, nodes, checked: !nodes[id].checked })
  toggleParent({ id, nodes })
  return nodes
}