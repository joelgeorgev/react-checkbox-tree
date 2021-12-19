export interface Tree {
  text: string
  checked: boolean
  children: Tree[]
}

export interface Node {
  text: Tree['text']
  checked: Tree['checked']
  childIds: string[]
  parentId?: string
}

export interface Nodes {
  [id: string]: Node
}
