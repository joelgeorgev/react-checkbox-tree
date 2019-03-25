import React, { useState } from 'react'

import { Checkbox } from '.'
import { normalize, getNewState } from '../utils'
import data from '../data/data.json'

export const CheckboxTree = () => {
  const [nodes, setNodes] = useState(normalize({ list: data, recursionKey: 'childKeys' }))

  const toggleCheckbox = (id) => {
    setNodes((prevNodes) => getNewState({ id, prevState: prevNodes }))
  }

  return (
    <Checkbox id={0} nodes={nodes} onToggle={toggleCheckbox} />
  )
}