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
      <div className='bg-[#FFE249] mx-40 px-8 py-4'>
        <h1>記入例：あーすればいいよ</h1>
        <ReplyBox></ReplyBox>
      </div>
      
      <div>{postData.map((post) => {
        if(post.isRoot) {
          return (
            <div className="bg-[#FFE249] flex flex-col gap-3 py-1 md:py-2.5" key={post.id}>
              <div className="bg-white rounded-md mt-10 p-4">
                <span className="block text-sm font-bold">
                  {post.content}
                  </span>
                <span className="block text-sm text-gray-500">
                  {post.create_at}
                  <span>☆</span>
                </span>
                </div>

            </div>
          );
        } else {
          return (
            <div className="bg-[#FFE249] flex flex-col gap-3 py-1 md:py-2.5" key={post.id}>
               <div className="bg-white rounded-md mt-10  p-4">
                <span className="block text-sm font-bold">
                  {post.content}
                  </span>
                <span className="block text-sm text-gray-500">
                  {post.create_at}
                </span>
                </div>
            </div>
          );
        }
        })}
      </div>
    </>
  );
};

export default Post;
