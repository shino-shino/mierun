'use client'
import { useEffect, useState } from 'react';
import { Database } from '~/types/Database';
import { getColorById } from '~/utils/color';
import { downloadDatabase } from './IOToDB';
import { PostCard } from './PostCard';
import PostCreater from './PostCreater';

type PostData = Database['public']['Tables']['post']['Row'];

interface PostViewProps {
  posts: PostData[];
}

export const PostView = (): JSX.Element => {
  const [posts, setPosts] = useState<PostData[]>()
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

  if (!posts) return (
    <div>エラーが発生しました</div>
  )
  
  return (
    <div className="flex w-full justify-center items-center flex-row flex-wrap space-x-8 space-y-4">
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
