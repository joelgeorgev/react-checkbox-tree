export interface RecursiveData {
  text: string
  checked: boolean
  children: RecursiveData[]
}

export interface Node {
  text: RecursiveData['text']
  checked: RecursiveData['checked']
  childIds: string[]
  parentId?: string
}

export interface Nodes {
  [id: string]: Node
}
