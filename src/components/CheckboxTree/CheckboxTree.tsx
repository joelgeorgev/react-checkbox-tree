import { useState, useEffect } from 'react'

import { Checkbox } from '../Checkbox/Checkbox.tsx'
import { loadTree } from '../../data/loadTree.ts'
import { normalize } from '../../utils/normalize.ts'
import { getNewState } from '../../utils/getNewState.ts'

import './CheckboxTree.css'

type Nodes = ReturnType<typeof normalize>

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
      <ul className='checkbox-tree'>
        <Checkbox id={'0'} nodes={nodes} onToggle={toggleCheckbox} />
      </ul>
    )
  )
}
