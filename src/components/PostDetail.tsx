'use client'
import { FC, useState } from 'react';
import { Post } from "~/components/ClassPost";
interface postProps {
  post: Post
  }
const  PostDetail:FC<postProps> = ({post}) => {
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [created_at ,setCreated_at] = useState(post.created_at) 

  return (
    <>
      <div className="bg-[#FFE249] mx-40 my-10">
        <div className="px-8 py-4">
          < p className="text-xs">{title}</p>
          <p className="text-sm line text-2xl">{content}</p>
          <p className="text-sm line text-2xl">{created_at}</p>
        </div>
      </div>
    </>
    )
}
export default PostDetail;