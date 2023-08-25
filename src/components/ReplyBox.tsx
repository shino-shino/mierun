'use client'
import { useForm } from 'react-hook-form';
import { reply } from './IOToDB';
import { PostValues } from './PostCreater';
import PostTextarea from './PostTextarea';

const ReplyBox = () => { 
  const {
    register,
    handleSubmit,
    reset, 
    formState:{errors},
  } = useForm<PostValues>();

  const changeValue = (postv:PostValues) => {
    postv.isRoot=false
    reply(36,postv)
    reset();
  };

  return (
    <form onSubmit={handleSubmit(changeValue)}>
      {<PostTextarea
                  label='内容'
                  name='content'
                  helpText='必須'
                  register={register}
                  errors={errors}
                  options={{
                    required: '入力してください',
                    maxLength: {
                      value: 3000,
                      message: '文字数が多すぎます',
                    },
                  }}
                />}
      <button
        type='submit'
        className='py-1 px-1 outline-2 bg-white rounded-md bg-btn-background hover:bg-btn-background-hover hover:bg-white hover:opacity-50'
        // className='py-2 px-4 rounded-md outline-2 no-underline bg-btn-background hover:bg-btn-background-hover'
      >
        返信する
      </button>
      <div className='flex w-full flex-row space-x-1'>
                  <input type='checkbox' id='isChildminder' className='ml-12 flex w-4 accent-yuzu' 
                  {...register('isChildminder')} />
                  <label htmlFor="isChildminder" className='text-sm'>保育士ですか?</label>
                </div>
    </form>
  )
}

export default ReplyBox
