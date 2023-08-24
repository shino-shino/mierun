import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '~/types/Database';

export type TopicData = Database['public']['Tables']['topic']['Row'];
export type PostData = Database['public']['Tables']['post']['Row'];

export async function downloadTopics(): Promise<TopicData[] | undefined> {
  const supabase = createServerComponentClient<Database>({ cookies });

  try {
    const { data: topics, error: topicError } = await supabase
      .from('topic')
      .select(
        `
        id,
        topic_title,
        topic_description,
        list_of_post
      `,
      );
    // .single()

    if (topicError) throw Error;
    if (!topics) throw Error;
    // for (const t of topic) t.list_of_post = Object.entries(t.list_of_post)
    if (topics) return topics;
  } catch (error) {
    console.error(error);
  }
}

export async function downloadPosts(
  topicID: string,
): Promise<PostData[] | undefined> {
  const supabase = createServerComponentClient<Database>({ cookies });

  try {
    const { data: topic, error: topicError } = await supabase
      .from('topic')
      .select('list_of_post')
      .eq('id', topicID)
      .single();

    if (topicError) throw Error;
    if (!topic.list_of_post) throw Error;

    const listOfPost = Object.entries(topic.list_of_post);

    const { data: posts, error: postError } = await supabase
      .from('post')
      .select()
      .in('id', listOfPost);

    if (postError) throw Error;
    if (posts) return posts;
  } catch (error) {
    console.error(error);
  }
}

export async function downloadAllPosts(): Promise<PostData[] | undefined> {
  const supabase = createServerComponentClient<Database>({ cookies });

  try {
    const { data: posts, error } = await supabase.from('post').select();

    if (error) throw Error;

    return posts;
  } catch (error) {
    console.error(error);
  }
}
