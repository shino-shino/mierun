import { NextPage } from 'next';
// import { getListOfPostFromMierun } from '~/components/IOToDB';
import PostCreater from '~/components/PostCreater';

const Home: NextPage = async () => {
  // const supabase = createServerComponentClient({ cookies });
  // const { data: post } = await supabase.from('post').select();
  // console.log(post);
  // const data = getListOfPostFromMierun()
  // console.log('data', data)
  return (
    <div className="flex flex-col flex-wrap gap-8 bg-slate-200">
      <PostCreater />
      {/* <PostView /> */}
    </div>
  );
};

export default Home;
