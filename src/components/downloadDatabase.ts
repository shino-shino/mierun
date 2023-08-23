import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '~/types/Database';

const supabase = createServerComponentClient<Database>({ cookies });


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
