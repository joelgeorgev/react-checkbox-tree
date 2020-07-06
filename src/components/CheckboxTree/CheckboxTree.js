import React, { useState } from 'react'
import styled from 'styled-components'

import { Checkbox } from '..'
import { normalize, getNewState } from '../../utils'

const List = styled.ul`
  list-style-type: none;
`

export const CheckboxTree = ({ data }) => {
  const [nodes, setNodes] = useState(normalize(data))

  const toggleCheckbox = (id) => {
    setNodes((prevNodes) => getNewState(prevNodes, id))
  }

  return (
    <List>
      <Checkbox id={0} nodes={nodes} onToggle={toggleCheckbox} />
    </List>
  )
}
