import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextPage } from 'next';
import { Post } from "~/components/ClassPost";
import { GetPost } from '~/components/GetPost';
import PostDetail from '~/components/PostDetail';
import ReplyBox from '~/components/ReplyBox';
const supabase = createClientComponentClient();
interface PostProps {
  params: {
    postId: string;
  };
}
async function  getReply(parent_id:number){
  try{
    const {data,error} =await supabase.from("post")
    .select()
    .eq('parent_id',parent_id);
    const post_st = JSON.stringify(data);
    console.log(post_st)  
    const post_js = JSON.parse(post_st);

      return new Post(5,post_js[0].title,post_js[0].content,post_js[0].created_at,post_js[0].is_root,post_js[0].is_childminder);
  }catch(error){
    console.log(error)
  }
}

const any: NextPage<PostProps> = async ({ params }) => {
  const post_id = parseInt(params.postId)
  const post_js= await GetPost(post_id);
  const post = new Post(5,post_js[0].title,post_js[0].content,post_js[0].created_at,post_js[0].is_root,post_js[0].is_childminder);
  const reply:Post | undefined = await getReply(post_id);
  
  return (
    <div className='my-0'>
    <div className="bg-white mx-10 my-10 ">
      <h1 className="text-4xl font-bold">Topic</h1>
        <PostDetail post = {post}/>
     
        <div className='bg-[#FFE249] mx-40 px-8 py-4'>
          <h1>記入例：あーすればいいよ</h1>
          <ReplyBox></ReplyBox>
        </div>
        
        <div className="py-4 md:py-8" >{(() => {
          if (!reply) {
            return <></>
          }

          if(post.is_childminder) {
            return (
              <div className="bg-[#FFE249] flex flex-col gap-3 py-4 md:py-1 mx-40" key={reply.id}>
                <div className="rounded-md mt-10 py-1 mx-3">
                  <span className="block text-sm font-bold mx-3">
                    {reply.content}
                  </span>
                  <span className="block text-sm text-gray-500 mx-3">
                    {reply.created_at}
                  <span>☆</span>
                  </span>
                </div>
               </div>
                  );
        } else {
          return (
            <div className="bg-[#FFE249] flex flex-col gap-3 py-0 md:py-1 mx-40" key={reply.id}>
               <div className="bg-white rounded-md mt-10  py-1 mx-3">
                <span className="block text-sm font-bold mx-3">
                  {reply.content}
                  </span>
                <span className="block text-sm text-gray-500 mx-3">
                  {reply.created_at}
                </span>
                </div>
            </div>
          );
        }
        })()}
        </div>
      </div>
    </div>
  );
};

export default any
