import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { PostValues } from './PostCreater';

const supabase = createClientComponentClient()

export async function postToMierun(post: PostValues) {
  try {
    // console.log(post)
    const { error } = await supabase.from("post")
      .insert({
        // id: 0,
        content: post.content, 
        is_root: true, 
        is_childminder: post.isChildminder,
        // parent_id: 0,
        // child_id: 0,
        created_at: new Date().toISOString()
      });

    if (error) throw Error;
  } catch (error) {
    console.error(error)
  }
};

export async function downloadDatabase(topicID: string) {
  try {
    const { data: topic, error: topicError } = await supabase
      .from('topic')
      .select('list_of_post')
      .eq('id', topicID)
      .single();


    if (topicError) throw Error
    if (!topic) throw Error 
    const { data: post, error: postError } = await supabase
      .from('post')
      .select()
      .in('id', topic.list_of_post);

    if (postError) throw Error
    
    if (post) return new Promise((resolve) => resolve(post))
  }
  catch (error){
    console.error(error)
  }

}
