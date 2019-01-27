import React from 'react'

import { Checkbox } from '.'
import { normalize } from './util'
import data from '../data/data.json'

export class CheckboxTree extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      nodes: normalize(data, 'childKeys')
    }
  }

  toggleCheckbox = (id) => {

    const toggleNode = (id, checked) => {
      this.setState((prevState) => {
        return {
          nodes: {
            ...prevState.nodes,
            [id]: {
              ...prevState.nodes[id],
              checked
            }
          }
        }
      })
    }

    const toggleSelfandChildren = (id, checked) => {
      const { nodes } = this.state
      const node = nodes[id]
      const { childIds } = node

      toggleNode(id, checked)
      if (childIds.length) {
        childIds.forEach((childId) => toggleSelfandChildren(childId, checked))
      }
    }

    const { nodes } = this.state
    toggleSelfandChildren(id, !nodes[id].checked)
  }

  render() {
    const { nodes } = this.state
    return (
      <Checkbox id={0} nodes={nodes} onToggle={this.toggleCheckbox} />
    )
  }
}