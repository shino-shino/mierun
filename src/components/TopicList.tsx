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
    <ul>
      {topics.map((topic) => (
        <li key={topic.id}>
          <Link href={`/topic/${topic.id}`}>{topic.topic_title}</Link>
        </li>
      ))}
    </ul>
  );
};
