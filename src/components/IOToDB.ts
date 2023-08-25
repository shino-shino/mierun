import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '~/types/Database';
import { PostValues } from './PostCreater';
type TopicData = Database['public']['Tables']['topic']['Row'];
type PostData = Database['public']['Tables']['post']['Row'];

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

export async function downloadDatabase(topicID: string): Promise<PostData[] | undefined> {
  try {
    const { data: topic, error: topicError } = await supabase
      .from('topic')
      .select('list_of_post')
      .eq('id', topicID)
      .single();

    if (topicError) throw Error
    if (!topic.list_of_post) throw Error 

    const listOfPost = Object.entries(topic.list_of_post)
    
    const { data: post, error: postError } = await supabase
      .from('post')
      .select()
      .in('id', listOfPost);

    if (postError) throw Error
    
    if (post) return post
  }
  catch (error){
    console.error(error)
  }
}

export async function insertReplyWithParentId(targetId:number, post: PostValues) {
  try {
    // console.log(post)
    const { error } = await supabase.from("post")
      .insert({
        // id: 0,
        content: post.content, 
        is_root: true, 
        is_childminder: post.isChildminder,
        parent_id: targetId,
        // child_id: 0,
        created_at: new Date().toISOString()
      });
    if (error) throw Error;
  } catch (error) {
    console.error(error)
  }
};

// なんで皆関数の戻り値の型をガシガシ省略するんですかねぇ
async function getReplysId(targetId: number) {
  // parent_idに親のIDが入っている要素を探す
  // search elements | targetId == parent_id
  try {
    // console.log(post)
    const { data, error } = await supabase.from("post").select().eq('child_id', targetId);
    const stdata = JSON.stringify(data)
    if (error) throw Error;
    if(typeof stdata === "string"){
     const post_js= JSON.parse(stdata);
         return post_js[0].parent_id;
      }
  } catch (error) {
    console.error(error)
  }
}

async function insertChildIdToParentPost(targetId: number) {
  // targetのchild IDに返信ポストのIDを挿入
  const replyId = await getReplysId(targetId);
  console.log(replyId)
  try{
  const{error} =await supabase
  .from('post')
  .update({child_id:replyId})
  .match({parentid:targetId})
  }catch(error){
    console.log(error)
  }
}

export async function reply(targetId: number, post: PostValues) {
  insertReplyWithParentId(targetId, post);
  insertChildIdToParentPost(targetId);
}
