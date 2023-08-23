'use client'
import { useState } from "react";



const  postDetail=()=>{
  const [title, setTitle] = useState('testTitle')
  const [content, setContent] = useState('testContent')
  const [postedtime, setPostedtime] = useState('更新日時') 

  return (
    <>
        <h1 className="10% ">{title}</h1>
        <p className="text-sm">{content}</p>
    </>
    )
}
export default postDetail;