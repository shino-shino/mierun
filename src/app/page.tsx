import { NextPage } from 'next';
// import { getListOfPostFromMierun } from '~/components/IOToDB';
import { PostView } from '~/components/PostView';
import { PostData, downloadAllPosts } from '~/components/downloadDatabase';

const Home: NextPage = async () => {
  const posts: PostData[] | undefined = await downloadAllPosts();
  // const supabase = createServerComponentClient({ cookies });
  // const { data: post } = await supabase.from('post').select();
  // const data = getListOfPostFromMierun()
  // const topics = await downloadTopics();
  // console.log('data', topics)
  return (
    <div className="flex flex-row">
      <PostView posts={posts} />
    </div>
  );
};

export default Home;
