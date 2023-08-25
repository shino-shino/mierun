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
    <ul className="pl-20 pt-10">
      {topics.map((topic) => (
        <li
          key={topic.id}
          className="list-decimal text-xl md:pl-2 md:pt-6 md:text-4xl"
        >
          <Link href={`/topic/${topic.id}`}>{topic.topic_title}</Link>
        </li>
      ))}
    </ul>
  );
};
