import React, { useState } from 'react'
import styled from 'styled-components'

import { Checkbox } from '.'
import { normalize, getNewState } from '../utils'
import data from '../data/data.json'

const List = styled.ul`
  list-style-type: none;
`

export const CheckboxTree = () => {
  const [nodes, setNodes] = useState(
    normalize({ list: data, recursionKey: 'childKeys' })
  )

  const toggleCheckbox = (id) => {
    setNodes((prevNodes) => getNewState({ id, prevState: prevNodes }))
  }

  return (
    <List>
      <Checkbox id={0} nodes={nodes} onToggle={toggleCheckbox} />
    </List>
  )
}
