import { useState } from 'react'
import styled from 'styled-components'

import { Checkbox } from '..'
import { normalize, getNewState } from '../../utils'
import type { Nodes, Tree } from '../../types'

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

interface Props {
  tree: Tree
}

export const CheckboxTree = ({ tree }: Props) => {
  const [nodes, setNodes] = useState<Nodes>(normalize(tree))

  const toggleCheckbox = (id: string): void => {
    setNodes((prevNodes) => getNewState(prevNodes, id))
  }

  return (
    <List>
      <Checkbox id={'0'} nodes={nodes} onToggle={toggleCheckbox} />
    </List>
  )
}
