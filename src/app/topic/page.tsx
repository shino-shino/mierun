import { NextPage } from 'next';

import { TopicList } from '~/components/TopicList';
import { topicData } from '~/constants/topicData';

const Topic: NextPage = () => {
  return (
    <>
      <h1>Topic</h1>
      <TopicList topics={topicData}></TopicList>
    </>
  );
};

export default Topic;
