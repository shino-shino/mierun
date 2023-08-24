import { NextPage } from 'next';
// import { getListOfPostFromMierun } from '~/components/IOToDB';
import { downloadTopics } from '~/components/downloadDatabase';

const Home: NextPage = async () => {
  // const supabase = createServerComponentClient({ cookies });
  // const { data: post } = await supabase.from('post').select();
  // const data = getListOfPostFromMierun()
  const topics = await downloadTopics()
  // console.log('data', topics)
  return (
    <div className="flex flex-row">
      {/* <PostView /> */}aaaaa
    </div>
  );
};

export default Home;
