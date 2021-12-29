import { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Checkbox } from '..'
import { loadTree } from '../../data'
import { normalize, getNewState } from '../../utils'

type Nodes = ReturnType<typeof normalize>

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

export const CheckboxTree = () => {
  const [nodes, setNodes] = useState<Nodes | null>(null)

  useEffect(() => {
    const tree = loadTree()
    setNodes(normalize(tree))
  }, [])

  const toggleCheckbox = (id: string): void => {
    setNodes((prevNodes) => getNewState(prevNodes as Nodes, id))
  }

  return (
    nodes && (
      <List>
        <Checkbox id={'0'} nodes={nodes} onToggle={toggleCheckbox} />
      </List>
    )
  )
}
