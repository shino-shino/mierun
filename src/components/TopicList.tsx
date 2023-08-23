import type { Topic } from '~/types/Topic';

interface TopicListProps {
  topics: Topic[];
}

export const TopicList = ({ topics }: TopicListProps): JSX.Element => {
  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic.id}>{topic.title}</li>
      ))}
    </ul>
  );
};
