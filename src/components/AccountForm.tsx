// 'use client'
import { useForm } from 'react-hook-form'
import AccountInput from './AccountInput'
import AccountTextarea from './AccountTextarea'
// type Accounts = Database['public']['Tables']['accounts']['Row']

export type ProfileFormValues = {
  // email: string | null
  username: string | null
  profile: string | null
}

const AccountForm = () => {
  const { register, handleSubmit, formState, setValue } =
    useForm<ProfileFormValues>()

  return (
    <form onSubmit={handleSubmit(() => console.log(formState))}>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-start gap-24 sm:w-full sm:flex-row'>
          <div className='flex w-96 flex-col'>
            <header>プロフィール</header>
            <AccountInput
              label='名前'
              type='text'
              helpText='必須'
              name='username'
              register={register}
              errors={formState.errors}
              options={{ required: '入力してください' }}
            />
            <AccountTextarea
              label='プロフィール'
              name='profile'
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

export default AccountForm