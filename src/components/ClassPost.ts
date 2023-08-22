class Post {
  isRoot: boolean;
  content: string;
  createAt: string;

  constructor(isRoot: boolean, content: string) {
    this.isRoot = isRoot;
    this.content = content;
    this.createAt = new Date().toISOString() 
  }
}
