import React from 'react'

export const Checkbox = ({ id, nodes, onToggle }) => {
  const node = nodes[id]
  const { key, childIds, checked } = node

  const handleChange = () => onToggle(id)

  return (
    <React.Fragment key={id}>
      {key &&
        <li>
          <input type='checkbox' checked={checked} className='pointer'
            onChange={handleChange} />
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