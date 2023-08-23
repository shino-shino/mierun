import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { PostValues } from './PostCreater';

const supabase = createClientComponentClient()

export async function postToMierun(post: PostValues) {
  try {
    // console.log('post', post)
    const { error } = await supabase.from("post")
      .insert({
        // id: 0,
        isRoot: true, 
        content: post.content, 
        create_at: new Date().toISOString()
      });

    if (error) throw Error
  }
  catch (error) {
    alert(error)
  }
};

// export function postAReplyToMierun(aPost: Post, targetId: number) {
//   supabase.from("post").insert({is_root: aPost.isRoot, content: aPost.content, create_at: aPost.createAt});

//   let list = getListOfPostFromMierun();

//   supabase.from("post_and_post").insert({parent_post_id: targetId, child_post_id:});
// };

// export function getAPostFromMierun(targetId: number) {
// }
// export function getListOfPostFromMierun() {
//   const list = supabase.from("post").select();

//   return list;
// }
