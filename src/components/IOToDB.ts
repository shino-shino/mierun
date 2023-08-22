import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { PostValues } from './PostCreater';

const supabase = createClientComponentClient()

export async function postToMierun(post: PostValues) {
  try {
    const { error } = await supabase.from("post")
      .insert({
        // id: 0,
        isRoot: true, 
        content: post.content, 
        create_at: new Date().toISOString()
      });

    if (error) throw Error;
  } catch (error) {
    alert(error)
  }
};

export async function getListOfPostFromMierun() {
  try {
    const { error } = await supabase.rpc("get_list");

    if (error) throw Error;
  } catch (error) {
    alert(error)
  }
}

export async function getListOfPostWithRangeFromMierun(range: number) {
  try {
    const { error } = await supabase.rpc("get_list", {range_num: range});

    if (error) throw Error;
  } catch (error) {
    alert(error)
  }
}

export async function getLatestPostFromMierun() {
  try {
    const { error } = await supabase.rpc("get_latest");

    if (error) throw Error;
  } catch (error) {
    alert(error)
  }
}

export async function getThePostFromMierun(targetId: number) {
  try {
    const { error } = await supabase.rpc("get_latest", {arg_id: targetId});

    if (error) throw Error;
  } catch (error) {
    alert(error)
  }
}
