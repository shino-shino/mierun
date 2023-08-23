import { PostCard } from '~/components/PostCard';
import type { Post } from '~/types/Post';
import { getColorById } from '~/utils/color';

interface PostViewProps {
  posts: Post[];
}

export const PostView = ({ posts }: PostViewProps): JSX.Element => {
  return (
    <div className="flex flex-row flex-wrap gap-8 bg-slate-300">
      {posts.map((post) => {
        <PostCard
          key={post.id}
          title={post.id}
          content={post.content}
          color={getColorById(post.id)}
        />;
      })}
    </div>
  );
};
