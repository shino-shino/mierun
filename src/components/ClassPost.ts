export class Post {
  id: number;
  isRoot: boolean;
  content: string;
  createAt: string;

  constructor(isRoot: boolean, content: string) {
    this.id = 0;
    this.isRoot = isRoot;
    this.content = content;
    this.createAt = new Date().toISOString() 
  }
}
