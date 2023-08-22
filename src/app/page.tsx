import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { NextPage } from 'next';
import { cookies } from 'next/headers';

const Home: NextPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data: post } = await supabase.from('post').select();
  console.log(post);

  return <div className="bg-lime-300"></div>;
};

export default Home;
