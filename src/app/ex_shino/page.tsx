import { NextPage } from 'next';
import PostDetail from '~/components/PostDetail';
import ReplyBox from '~/components/ReplyBox';
import { postData } from '~/constants/postData';
interface PostProps {
  params: {
    topicId: string;
  };
}

const Post: NextPage<PostProps> = async ({ params }) => {
  return (
    <>
      <PostDetail></PostDetail>
      <br></br>
      <h1>仮：あーすればいいよ</h1>
      <ReplyBox></ReplyBox>
      
      <div>{postData.map((post) => {
        if(post.isRoot) {
          return (
            <li className="post" key={post.id}>
                <span className="post_text">
                  {post.content}
                <span className="posted_time">
                  {post.create_at}
                </span>
                <span>★</span>
                </span>
            </li>
          );
        } else {
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
        }
        })}
      </div>
    </>
  );
};

export default Post;
