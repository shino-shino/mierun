export class Post {
  id: number;
  title:string;
  isRoot: boolean;
  content: string;
  created_at: string;
  is_childminder: string;
  constructor(id:number,title:string,isRoot: boolean, content:string,created_at:string,is_childminder:string) {
    this.id = id;
    this.title=title
    this.isRoot = isRoot;
    this.content = content;
    this.created_at = new Date().toISOString() 
    this.is_childminder=is_childminder
  }
}
