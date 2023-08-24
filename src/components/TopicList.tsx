'use client';

import Link from 'next/link';
import type { Database } from '~/types/Database';

type TopicData = Database['public']['Tables']['topic']['Row'];

interface TopicListProps {
  topics: TopicData[] | null;
}

export const TopicList = ({ topics }: TopicListProps): JSX.Element => {
  if (!topics) {
    return <></>;
  }

  return (
    <ul className='pt-10 pl-20'>
      {topics.map((topic) => (
        <li key={topic.id} className='text-4xl pt-6 pl-2 list-decimal'>
          <Link href={`/topic/${topic.id}`}>{topic.topic_title}</Link>
        </li>
      ))}
    </ul>
  );
};
