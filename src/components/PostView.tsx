'use client';

import { useEffect, useState } from 'react';
import { Database } from '~/types/Database';
import { getColorById } from '~/utils/color';
import { PostCard } from './PostCard';

type PostData = Database['public']['Tables']['post']['Row'];

interface PostViewProps {
  posts: PostData[] | undefined;
  topicId?: number;
}

export const PostView = ({ posts, topicId }: PostViewProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(!posts);

  useEffect(() => {
    setLoading(!posts || posts.length === 0);
  }, [posts]);

  if (loading) return <div>loading...</div>;

  if (!posts || posts.length === 0) return <div>エラーが発生しました</div>;

  return (
    <div className="flex w-full flex-wrap items-center justify-center py-10">
      {posts.map((post: PostData) => (
        <div className="top-0 m-4 hover:brightness-90 [&:nth-child(5n)]:bg-[#FFFD94] [&:nth-child(5n+1)]:bg-[#FFE249] [&:nth-child(5n+2)]:bg-[#FFC01D] [&:nth-child(5n+3)]:bg-[#CFFF49] [&:nth-child(5n+4)]:bg-[#F4AF90]">
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            color={getColorById(post.id)}
          />
        </div>
      ))}
    </div>
  );
};
