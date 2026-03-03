import { useState } from 'react'

import { Checkbox } from '../Checkbox/Checkbox.tsx'
import { normalize } from '../../utils/normalize.ts'
import { getNewState } from '../../utils/getNewState.ts'

import tree from '../../data/tree.json'

import './CheckboxTree.css'

export const CheckboxTree = () => {
  const [nodes, setNodes] = useState(normalize(tree))

  const toggleCheckbox = (id: string): void => {
    setNodes((prevNodes) => getNewState(prevNodes, id))
  }

  return (
    <ul className='checkbox-tree'>
      <Checkbox id={'0'} nodes={nodes} onToggle={toggleCheckbox} />
    </ul>
  )
}
