import React from 'react'

export class Checkbox extends React.PureComponent {

  handleChange = () => {
    const { id, onToggle } = this.props
    onToggle(id)
  }

  render() {
    const { id, nodes, onToggle } = this.props
    const node = nodes[id]
    const { key, childIds, checked } = node

    return (
      <React.Fragment key={id}>
        {key &&
          <li>
            <input type='checkbox' checked={checked} className='pointer'
              onChange={this.handleChange} />
            <label className='ml2'>{key}</label>
          </li>}
        {childIds.length ?
          (<ul className='list'>
            {childIds.map((childId) => {
              return (<Checkbox key={childId} id={childId}
                nodes={nodes} onToggle={onToggle} />)
            })}
          </ul>)
          :
          null}
      </React.Fragment>
    )
  }
}