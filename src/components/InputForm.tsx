'use client'

import { useState } from "react";

interface InputFormProps {
  onSubmit: (title: string, content: string) => void
}

export const InputForm = ({ onSubmit}: InputFormProps): JSX.Element => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(title, content)

    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          タイトル:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          内容:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </label>
      </div>
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  );
};

