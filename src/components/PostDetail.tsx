'use client'
import { useState } from "react";

const  PostDetail=()=>{
  const [title, setTitle] = useState('testTitle')
  const [content, setContent] = useState('testContent')
  const [postedtime, setPostedtime] = useState('更新日時') 

  return (
    <>
      <div className="bg-[#FFE249] mx-40 my-10">
        <div className="px-8 py-4">
          <h1 className="10% text-4xl">{title}</h1>
          <p className="text-sm line h-80 text-2xl">{content}</p>
        </div>
      </div>
    </>
    )
}
export default PostDetail;