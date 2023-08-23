import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Post } from './ClassPost';

const supabase = createServerComponentClient({ cookies });

export function postAPostToMierun(aPost: Post) {
  supabase.from("post").insert({is_root: aPost.isRoot, content: aPost.content, create_at: aPost.createAt});
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
