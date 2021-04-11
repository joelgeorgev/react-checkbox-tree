export interface RecursiveData {
  text: string
  checked: boolean
  children: RecursiveData[]
}

export interface Node {
  text: string
  checked: boolean
  childIds: string[]
  parentId?: string
}

export interface Nodes {
  [id: string]: Node
}
