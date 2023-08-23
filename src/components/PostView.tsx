'use client'
import { useState } from 'react';
import { PostCard } from '~/components/PostCard';
import type { Post } from '~/types/Post';
import { getColorById } from '~/utils/color';
import { getLatestPostFromMierun } from './IOToDB';

interface PostViewProps {
  posts: Post[];
}

export const PostView = ({ posts }: PostViewProps): JSX.Element => {
  const [data, setData] = useState(getLatestPostFromMierun)
  // useEffect(() => {
// 
// 
  // }, [])
  console.log(data)
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
