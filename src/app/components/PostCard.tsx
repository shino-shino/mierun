'use client'
type PostCardProps = {
  title: string
  content: string
  color: string
}

const PostCard = ({
  title,
  content,
  color
}: PostCardProps
) => {
  const cardClassName = 'flex w-48 h-32 flex-col space-y-1 ' + color

  return (
    <div className={cardClassName}>
      <label className=''>{title}</label>
      <label className='text-sm'>{content}</label>
    </div>
  )
}


export default PostCard
