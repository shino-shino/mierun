'use client'
import { useForm } from 'react-hook-form'
import { postToMierun } from './IOToDB'
import PostTextarea from './PostTextarea'
// type PostCreaerProps = {

// }
export type PostValues = {
  isRoot: boolean
  content: string
}

const PostCreater = () => {
  const { register, handleSubmit, formState, setValue } =
    useForm<PostValues>()

  return (
      <form onSubmit={handleSubmit(postToMierun)}>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center gap-24 sm:w-full sm:flex-row'>
            <div className='flex w-96 flex-col'>
              {/* <PostInput
                label='名前'
                type='text'
                helpText='必須'
                name='title'
                register={register}
                errors={formState.errors}
                options={{ required: '入力してください' }}
              /> */}
              <PostTextarea
                label='内容'
                name='content'
                helpText='必須'
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
              <button type='submit' className='flex w-24 flex-center bg-yuzu'>
                更新
              </button>
              {/* <AccountButton
                label='更新'
                type='submit'
                active={loading}
                disabled={loading}
                loading={loading}
                isCompleted={completed}
                isError={isError}
                className='flex w-1/2 self-end'
              /> */}
            </div>
          </div>
        </div>
      </form>
  )
}

export default PostCreater
