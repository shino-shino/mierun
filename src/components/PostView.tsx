import { PostCard } from '~/components/PostCard';
import { Database } from '~/types/Database';
import { getColorById } from '~/utils/color';

type PostData = Database['public']['Tables']['post']['Row'];

interface PostViewProps {
  posts: PostData[] | null;
}

export const PostView = ({ posts }: PostViewProps): JSX.Element => {
  if (!posts) {
    return <></>;
  }

  return (
    <div className="flex flex-row flex-wrap gap-8 bg-slate-300">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.id.toString()}
          content={post.content}
          color={getColorById(post.id)}
        />
      ))}
    </div>
  );
};
