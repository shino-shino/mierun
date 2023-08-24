import { NextPage } from 'next';
// import { getListOfPostFromMierun } from '~/components/IOToDB';
import { PostView } from '~/components/PostView';

const Home: NextPage = async () => {
  // const supabase = createServerComponentClient({ cookies });
  // const { data: post } = await supabase.from('post').select();
  // console.log(post);
  // const data = getListOfPostFromMierun()
  // console.log('data', data)
  return (
    <div className="flex flex-row">
      <PostView />
    </div>
  );
};

export default Home;
