import { NextPage } from 'next';
import { Post } from "~/components/ClassPost";
import { GetPost } from '~/components/GetPost';
import PostDetail from '~/components/PostDetail';
import ReplyBox from '~/components/ReplyBox';
import { postData } from '~/constants/postData';
interface PostProps {
  params: {
    topicId: string;
  };
}

const any: NextPage<PostProps> = async ({ params }) => {
  const post_js= await GetPost(36);
  const post = new Post(5,post_js[0].title,post_js[0].content,post_js[0].created_at,post_js[0].is_root,post_js[0].is_childminder);
  console.log(post)
  return (
     <div className='bg-[#FFFD93]  my-0'>
      <div className="bg-white mx-10 my-10">
        <h1>Topic</h1>
        <PostDetail post = {post}/>
     
        <div className='bg-[#FFE249] mx-40 px-8 py-4'>
          <h1>記入例：あーすればいいよ</h1>
          <ReplyBox></ReplyBox>
          
        </div>
      
        <div className="py-4 md:py-8" >{postData.map((post) => {
          if(post.isRoot) {
            return (
              <div className="bg-[#FFE249] flex flex-col gap-3 py-4 md:py-1 mx-40" key={post.id}>
                <div className="bg-white rounded-md mt-10 py-1 mx-3">
                  <span className="block text-sm font-bold mx-3">
                    {post.content}
                  </span>
                  <span className="block text-sm text-gray-500 mx-3">
                    {post.create_at}
                  <span>☆</span>
                  </span>
                </div>
               </div>
                  );
        } else {
          return (
            <div className="bg-[#FFE249] flex flex-col gap-3 py-0 md:py-1 mx-40" key={post.id}>
               <div className="bg-white rounded-md mt-10  py-1 mx-3">
                <span className="block text-sm font-bold mx-3">
                  {post.content}
                  </span>
                <span className="block text-sm text-gray-500 mx-3">
                  {post.create_at}
                </span>
                </div>
            </div>
          );
        }
        })}
        </div>
      </div>
    </div>
  );
};
export default any
