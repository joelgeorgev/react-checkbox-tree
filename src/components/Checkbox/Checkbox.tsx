import { Fragment } from 'react'

import type { Nodes } from '../../types'

import './Checkbox.css'

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
          <label className='checkbox'>
            <input
              type='checkbox'
              checked={checked}
              className='input'
              onChange={() => onToggle(id)}
            />
            {text}
          </label>
        </li>
      )}
      {childIds.length > 0 && (
        <li>
          <ul>
            {childIds.map((childId) => (
              <Checkbox
                key={childId}
                id={childId}
                nodes={nodes}
                onToggle={onToggle}
              />
            ))}
          </ul>
        </li>
      )}
    </Fragment>
  )
}
