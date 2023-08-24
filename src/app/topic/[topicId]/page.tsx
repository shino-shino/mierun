import { NextPage } from 'next';
import { PostView } from '~/components/PostView';
import { PostData, downloadPosts } from '~/components/downloadDatabase';

interface PostProps {
  params: {
    topicId: string;
  }
}

const Post: NextPage<PostProps> = async ({ params }) => {
  const posts: PostData[] | undefined = await downloadPosts(params.topicId)
  if (posts && !posts.length) return <div>loading...</div>
  if (posts && posts.length) return (
    <div>
      <PostView posts={posts}/>
    </div>
  );
};

export default Post;
