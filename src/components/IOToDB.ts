import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { PostValues } from './PostCreater';

const supabase = createClientComponentClient()

export async function postToMierun(post: PostValues) {
  try {
    const { error } = await supabase.from("post")
      .insert({
        // id: 0,
        content: post.content, 
        isRoot: true, 
        isChildminder: post.isChildminder,
        parent_id: post.parentId,
        child_id: post.childId,
        create_at: new Date().toISOString()
      });

    if (error) throw Error;
  } catch (error) {
    alert(error)
  }
};
