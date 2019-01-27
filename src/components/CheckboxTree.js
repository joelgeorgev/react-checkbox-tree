import React from 'react'

import { Checkbox } from '.'
import { normalize } from './util'
import treeData from '../data/tree.json'

export class CheckboxTree extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      tree: normalize(treeData, 'childKeys')
    }
  }

  toggleCheckbox = (id) => {

    const toggleNode = (id, checked) => {
      this.setState((prevState) => {
        return {
          tree: {
            ...prevState.tree,
            [id]: {
              ...prevState.tree[id],
              checked
            }
          }
        }
      })
    }

    const toggleSelfandChildren = (id, checked) => {
      const { tree } = this.state
      const node = tree[id]
      toggleNode(id, checked)
      if (node.childIds && node.childIds.length) {
        node.childIds.forEach((childId) => toggleSelfandChildren(childId, checked))
      }
    }

    const { tree } = this.state
    toggleSelfandChildren(id, !tree[id].checked)
  }

  render() {
    const { tree } = this.state
    return (
      <Checkbox id={0} tree={tree} onToggle={this.toggleCheckbox} />
    )
  }
}