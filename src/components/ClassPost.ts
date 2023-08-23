class Post {
  id: number
  isRoot: boolean
  content: string
  createAt: number
  constructor(id: number, isRoot: boolean, content: string, createAt: number ) {
    this.id = id
    this.isRoot = isRoot
    this.content = content
    this.createAt = createAt
  }
}
