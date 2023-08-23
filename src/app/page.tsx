import { NextPage } from 'next';
import PostCard from './components/PostCard';

const Home: NextPage = async () => {
  // const supabase = createServerComponentClient({ cookies });
  // const { data: post } = await supabase.from('post').select();
  // console.log(post);

  return <div className="bg-lime-300">
    <PostCard title={'タイトル'} content={'コンテンツあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'} color={'bg-slate-500'}/>
  </div>;
};

export default Home;
