import { NextPage } from 'next';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { PostView } from '~/components/PostView';
import { Database } from '~/types/Database';

interface PostProps {
  params: {
    topicId: string;
  };
}

const Post: NextPage<PostProps> = async ({ params }) => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: topic } = await supabase
    .from('topic')
    .select('list_of_post')
    .eq('id', params.topicId)
    .single();

  const { data: post } = await supabase
    .from('post')
    .select()
    .in('id', topic.list_of_post);

  return (
    <div>
      <PostView posts={post} />
    </div>
  );
};

export default Post;
