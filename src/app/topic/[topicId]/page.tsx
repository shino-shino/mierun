import { NextPage } from 'next';

import PostCreater from '~/components/PostCreater';
import { PostView } from '~/components/PostView';
import { PostData, downloadPosts } from '~/components/downloadDatabase';

interface PostProps {
  params: {
    topicId: string;
  };
}

const Post: NextPage<PostProps> = async ({ params }) => {
  const posts: PostData[] | undefined = await downloadPosts(params.topicId);
  const topicId = parseInt(params.topicId);
  if (posts && !posts.length)
    return (
      <div>
        loading...
        <PostCreater topicId={topicId} />
      </div>
    );
  if (posts && posts.length)
    return (
      <div>
        <PostCreater topicId={topicId} />
        <PostView posts={posts} topicId={topicId} />
      </div>
    );
};

export default Post;
