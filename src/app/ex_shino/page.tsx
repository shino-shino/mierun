import { NextPage } from 'next';
import ReplyBox from '~/components/ReplyBox';
import PostDetail from '~/components/PostDetail';

interface PostProps {
  params: {
    topicId: string;
  };
}

const isChildminder = true;

const Post: NextPage<PostProps> = async ({ params }) => {
  // const supabase = createServerComponentClient({ cookies });
  // const { data: post } = await supabase.from('post').select();
  // console.log(post);

  if (isChildminder) {
    return (
      <>
        <PostDetail></PostDetail>
        <br></br>
        <h1>仮：あーすればいいよ____保育士です!!!!!!!!</h1>
        <ReplyBox></ReplyBox>
      </>
    );
  } else {
    return (
      <>
        <PostDetail></PostDetail>
        <br></br>
        <h1>仮：あーすればいいよ</h1>
        <ReplyBox></ReplyBox>
      </>
    );
  }
};

export default Post;
