import { Fragment } from 'react'
import styled from 'styled-components'

import type { Nodes } from '../../types'

const List = styled.ul`
  list-style-type: none;
`

const StyledCheckbox = styled.input`
  margin-right: 0.5rem;
  cursor: pointer;
`

interface Props {
  id: string
  nodes: Nodes
  onToggle: (id: string) => void
}

export const Checkbox = ({ id, nodes, onToggle }: Props) => {
  const node = nodes[id]
  const { text, childIds, checked } = node

  return (
    <Fragment key={id}>
      {text && (
        <li>
          <label>
            <StyledCheckbox
              type='checkbox'
              checked={checked}
              onChange={() => onToggle(id)}
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
    </Fragment>
  )
}
