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
        // placeholder="test test"
        // helpText='必須'
        register={register}
        errors={formState.errors}
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
        className='py-1 px-1 outline-2 bg-white rounded-md bg-btn-background hover:bg-btn-background-hover hover:bg-white hover:opacity-50'
        // className='py-2 px-4 rounded-md outline-2 no-underline bg-btn-background hover:bg-btn-background-hover'
      >
        返信する
      </button>
    </form>
  )
}

export default ReplyBox