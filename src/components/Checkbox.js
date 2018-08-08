import React from 'react'

export class Checkbox extends React.PureComponent {

  handleChange = () => {
    const { node, onToggle } = this.props
    onToggle(node)
  }

  render() {
    const { node, onToggle } = this.props
    if (node.childKeys && node.childKeys.length) {
      let nodeList = node.childKeys.map(childNode => {
        return <Checkbox key={childNode.key} node={childNode} onToggle={onToggle} />
      })
      return (
        <li>
          <input type='checkbox' checked={node.checked} className='pointer'
            onChange={this.handleChange} />
          <label className='ml2'>{node.key}</label>
          <ul className='list'>
            {nodeList}
          </ul>
        </li>
      )
    } else {
      return (
        <li>
          <input type='checkbox' checked={node.checked} className='pointer'
            onChange={this.handleChange} />
          <label className='ml2'>{node.key}</label>
        </li>
      )
    }
  }
}