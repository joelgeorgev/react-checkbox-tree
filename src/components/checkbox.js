import React from 'react'

export const Checkbox = ({ id, nodes, onToggle }) => {
  const node = nodes[id]
  const { key, childIds, checked } = node

  const handleChange = () => onToggle(id)

  return (
    <React.Fragment key={id}>
      {key &&
        <li>
          <label>
            <input type='checkbox' checked={checked} className='mr2 pointer'
              onChange={handleChange} />{key}
          </label>
        </li>}
      {childIds.length ?
        (<li>
          <ul className='list'>
            {childIds.map((childId) => {
              return (<Checkbox key={childId} id={childId}
                nodes={nodes} onToggle={onToggle} />)
            })}
          </ul>
        </li>
        )
        :
        null}
    </React.Fragment>
  )
}