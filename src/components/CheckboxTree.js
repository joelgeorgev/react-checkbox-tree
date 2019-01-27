import React from 'react'

import { Checkbox } from '.'
import { normalize, getNewState } from './util'
import data from '../data/data.json'

export class CheckboxTree extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      nodes: normalize({ list: data, recursionKey: 'childKeys' })
    }
  }

  toggleCheckbox = (id) => {
    this.setState((prevState) => {
      return {
        nodes: getNewState({ id, prevState: prevState.nodes })
      }
    })
  }

  render() {
    const { nodes } = this.state
    return (
      <Checkbox id={0} nodes={nodes} onToggle={this.toggleCheckbox} />
    )
  }
}