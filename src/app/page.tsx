'use client'
import { NextPage } from 'next';
import AccountForm from './components/AccountForm';

const Home: NextPage = async () => {
  // const supabase = createServerComponentClient({ cookies });
  // const { data: post } = await supabase.from('post').select();
  // console.log(post);

  return <div className="bg-lime-300">
    <AccountForm />
  </div>;
};

export default Home;
