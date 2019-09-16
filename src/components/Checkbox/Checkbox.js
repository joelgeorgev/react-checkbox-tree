import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  list-style-type: none;
`

const StyledCheckbox = styled.input`
  margin-right: 0.5rem;
  cursor: pointer;
`

export const Checkbox = ({ id, nodes, onToggle }) => {
  const node = nodes[id]
  const { text, childIds, checked } = node

  const handleChange = () => onToggle(id)

  return (
    <React.Fragment key={id}>
      {text && (
        <li>
          <label>
            <StyledCheckbox
              type='checkbox'
              checked={checked}
              onChange={handleChange}
            />
            {text}
          </label>
        </li>
      )}
      {childIds.length ? (
        <li>
          <List>
            {childIds.map((childId) => (
              <Checkbox
                key={childId}
                id={childId}
                nodes={nodes}
                onToggle={onToggle}
              />
            ))}
          </List>
        </li>
      ) : null}
    </React.Fragment>
  )
}
