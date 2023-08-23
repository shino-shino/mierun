'use client'

import { useForm } from 'react-hook-form'
import AccountTextarea from './AccountTextarea'
export type ProfileFormValues = {
  reply_content: string | null
}

const ReplyBox = () => { 
  const { register, handleSubmit, formState, setValue, getFieldState, getValues } =
    useForm<ProfileFormValues>()

  return (
    <form onSubmit={handleSubmit(() => console.log(getValues() ))}>
      <AccountTextarea
        label='返信欄'
        name='profile'
        // helpText='必須'
        register={register}
        errors={formState.errors}
        // placeholder="test test"
        options={{
          required: '入力してください',
          maxLength: {
            value: 3000,
            message: '文字数が多すぎます',
          },
        }}
      />
      <button
        type='submit'
      >
        返信する
      </button>
    </form>
  )
}

export default ReplyBox