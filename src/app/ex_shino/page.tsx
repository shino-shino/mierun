import { NextPage } from 'next';
import PostDetail from '~/components/PostDetail';
import PostToMap from '~/components/PostToMap';
import ReplyBox from '~/components/ReplyBox';
import postData from '~/constants/postData';
interface PostProps {
  params: {
    topicId: string;
  };
}

const Post: NextPage<PostProps> = async ({ params }) => {
  // const supabase = createServerComponentClient({ cookies });
  // const { data: post } = await supabase.from('post').select();
  // console.log(post);
 const map =  PostToMap(postData);
  return (
    <>
      <PostDetail></PostDetail>
      <br></br>
      <h1>仮：あーすればいいよ</h1>
      <ReplyBox></ReplyBox>
      <div>{postData.map((post) => {
      return (
        <li className="post" key={post.id}>
              <span className="post_text">
                {post.content}
              <span className="posted_time">
                {post.create_at}
              </span>
              </span>
            </li>
       );
       })}
      </div>
    </>
  );
};

export default Post;
