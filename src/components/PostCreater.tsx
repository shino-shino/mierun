'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { Icon } from 'semantic-ui-react';
import { postToMierun } from './IOToDB';
import PlusButton from './PlusButton';
import PostInput from './PostFormInput';
import PostTextarea from './PostTextarea';

// type PostCreaerProps = {

// }
export type PostValues = {
  parentId: number;
  childId: number;
  isRoot: boolean;
  title: string;
  content: string;
  isChildminder: boolean;
};

const PostCreater = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { register, handleSubmit, formState } = useForm<PostValues>();

  const onSubmit = async (data: PostValues) => {
    await postToMierun(data);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-12 right-12"
      >
        <PlusButton />
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Crop Modal"
        className="flex h-full w-full flex-auto flex-col items-center justify-center gap-6 bg-white/0 py-12"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ariaHideApp={false}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex h-[30rem] w-[30rem] flex-col items-center gap-2 rounded-lg bg-white">
            <div className="flex w-full items-center justify-between px-4 ">
              <header className="mt-2 w-screen text-xl font-semibold">
                新規投稿
              </header>
              <button
                onClick={() => setIsOpen(false)}
                className="h-5 w-5 pr-7 pt-2"
              >
                <Icon
                  name="remove"
                  color="grey"
                  inverted
                  className="outline-none"
                />
              </button>
            </div>
            <div className="flex flex-col items-start sm:w-full">
              <PostInput
                label="名前"
                type="text"
                helpText="必須"
                name="title"
                register={register}
                errors={formState.errors}
                options={{ required: '入力してください' }}
              />
              <PostTextarea
                label="内容"
                name="content"
                helpText="必須"
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

              <div className="flex w-full flex-row space-x-4">
                <input
                  type="checkbox"
                  id="isChildminder"
                  className="ml-12 flex w-4 accent-yuzu"
                  {...register('isChildminder')}
                />
                <label htmlFor="isChildminder" className="text-sm">
                  保育士ですか?
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-24 justify-center rounded-lg bg-yuzu"
            >
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
        </form>
      </Modal>
    </div>
  );
};

export default PostCreater;
