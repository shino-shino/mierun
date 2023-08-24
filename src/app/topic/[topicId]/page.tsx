'use client'

import { NextPage } from 'next';
import { PostView } from '~/components/PostView';

interface PostProps {
  params: {
    topicId: string;
  };
}

const Post: NextPage<PostProps> = async ({ params }) => {
  // const [posts, setPosts] = useState()
  // const supabase = createServerComponentClient<Database>({ cookies });
  // try{
  //   const { data: topic, error: topicError} = await supabase
  //     .from('topic')
  //     .select('list_of_post')
  //     .eq('id', params.topicId)
  //     .single();

      
  //   if (topicError) throw Error
  //   if (!topic.list_of_post) throw Error 
    
  //   const listOfPost = Object.entries(topic.list_of_post)

  //   const { data: post } = await supabase
  //     .from('post')
  //     .select()
  //     .in('id', listOfPost);
  // }
  // catch (error){
  //   console.error(error)
  // } 

  return (
    <div>
      <PostView />
    </div>
  );
};

export default Post;
