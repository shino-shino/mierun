import PostCard from "./PostCard"

const PostView = () => {
  return (
    <div className="flex flex-row flex-wrap bg-slate-300 gap-8">
      <PostCard title={'タイトル'} content={'コンテンツあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'} color={'yuzu'}/>
      <PostCard title={'タイトル'} content={'コンテンツあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'} color={'mandarin'}/>
      <PostCard title={'タイトル'} content={'コンテンツあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'} color={'lime'}/>
      <PostCard title={'タイトル'} content={'コンテンツあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'} color={'grapefruit'}/>
      <PostCard title={'タイトル'} content={'コンテンツあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'} color={'lemon'}/>
    </div>
  )
}

export default PostView
