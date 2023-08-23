import { NextPage } from 'next';
import ReplyBox from '~/components/ReplyBox';
import PostDetail from '~/components/PostDetail';

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
    <>
      <PostDetail></PostDetail>
      <br></br>
      <h1>仮：あーすればいいよ</h1>
      <ReplyBox></ReplyBox>
    </>
  );
};

export default Post;
