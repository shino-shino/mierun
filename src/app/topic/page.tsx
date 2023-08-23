import { NextPage } from 'next';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { TopicList } from '~/components/TopicList';
import { Database } from '~/types/Database';

const Topic: NextPage = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: topic } = await supabase.from('topic').select();

  return (
    <>
      <h1>Topic</h1>
      <TopicList topics={topic}></TopicList>
    </>
  );
};

export default Topic;
