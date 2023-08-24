'use client'
import { useEffect, useState } from 'react';
import { Database } from '~/types/Database';
import { getColorById } from '~/utils/color';
import { PostCard } from './PostCard';
import PostCreater from './PostCreater';

type PostData = Database['public']['Tables']['post']['Row'];

interface PostViewProps {
  posts: PostData[];
}

export const PostView = ({ posts }: PostViewProps): JSX.Element => {
  // const [posts, setPosts] = useState<PostData[] | undefined>(props)
  const [loading, setLoading] = useState<boolean>(true)
  console.log('posts', posts)

  useEffect(() => {
    // setPosts(props)

    if (posts && posts.length) setLoading(false)
  }, [posts])

  if (loading) return (
    <div>loading...</div>
  )
  if (!loading && posts && !posts.length) return (
    <div>エラーが発生しました</div>
  )
  
  return (
    <div className="flex w-full justify-center items-center flex-row flex-wrap space-x-8 space-y-6 py-24">
      <PostCreater />
      
      {posts.map((post: PostData) => (
        <PostCard
          // key={post.id}
          title={post.id.toString()}
          content={post.content}
          color={getColorById(post.id)}
        />
      ))}

    </div>
  );
};
