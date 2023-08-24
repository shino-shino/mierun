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
    <div className="flex w-full justify-center items-center flex-wrap space-x-6 space-y-6 py-4">
      <PostCreater />
      
      {posts.map((post: PostData) => (
        <div className='[&:nth-child(5n)]:bg-[#FFFD94] [&:nth-child(5n+1)]:bg-[#FFE249] [&:nth-child(5n+2)]:bg-[#FFC01D] [&:nth-child(5n+3)]:bg-[#CFFF49] [&:nth-child(5n+4)]:bg-[#F4AF90] hover:brightness-90 top-0'>
          <PostCard
            // key={post.id}
            title={post.id.toString()}
            content={post.content}
            color={getColorById(post.id)}
          />
        </div>
      ))}

    </div>
  );
};
