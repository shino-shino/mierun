import { NextPage } from 'next';
import ReplyBox from '~/components/ReplyBox';

interface PostProps {
  params: {
    topicId: string;
  };
}

const Post: NextPage<PostProps> = async ({ params }) => {
  // const supabase = createServerComponentClient({ cookies });
  // const { data: post } = await supabase.from('post').select();
  // console.log(post);

  return (
    <ReplyBox></ReplyBox>
    // <div className="flex flex-row flex-wrap gap-8 bg-slate-300">
    //   {/* <PostView posts={postData} /> */}
    //   <ReplyBox></ReplyBox>
    // </div>
  );
};

export default Post;
