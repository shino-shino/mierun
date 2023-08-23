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
