'use client'
import { useEffect, useState } from 'react';
import { Database } from '~/types/Database';
import { getColorById } from '~/utils/color';
import { downloadDatabase } from './IOToDB';
import { PostCard } from './PostCard';

type PostData = Database['public']['Tables']['post']['Row'];

interface PostViewProps {
  posts: PostData[] | null;
}

export const PostView = (): JSX.Element => {
  const [posts, setPosts] = useState<PostData>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    downloadDatabase('5').then((res) => {
      setPosts(res)
      // console.log('posts',posts)
    })
    if (posts) setLoading(false)

  }, [posts])

  if (loading) return (
    <div>loading...</div>
  )
  return (
    <div className="flex flex-row flex-wrap gap-8 bg-slate-300">
      {posts.map((post: PostData) => (
        <PostCard
          // key={post.id}
          title={post.id.toString()}
          content={post.content}
          color={getColorById(post.id)}
        />
      ))}
      a
    </div>
  );
};
