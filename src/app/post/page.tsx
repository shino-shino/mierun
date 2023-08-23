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

const Post: NextPage<PostProps> = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: post } = await supabase.from('post').select();

  return (
    <div>
      <PostView posts={post} />
    </div>
  );
};

export default Post;
