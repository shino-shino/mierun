import { NextPage } from 'next';
import PostCreater from '~/components/PostCreater';
import PostCard from '../components/PostCard';

const Home: NextPage = async () => {
  // const supabase = createServerComponentClient({ cookies });
  // const { data: post } = await supabase.from('post').select();
  // console.log(post);

  return (
    <div className="flex flex-row flex-wrap gap-8 bg-slate-200">
      <PostCreater />
      <PostCard
        title={'タイトル'}
        content={
          'コンテンツあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
        }
        color={'yuzu'}
      />
      <PostCard
        title={'タイトル'}
        content={
          'コンテンツあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
        }
        color={'mandarin'}
      />
      <PostCard
        title={'タイトル'}
        content={
          'コンテンツあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
        }
        color={'lime'}
      />
      <PostCard
        title={'タイトル'}
        content={
          'コンテンツあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
        }
        color={'grapefruit'}
      />
      <PostCard
        title={'タイトル'}
        content={
          'コンテンツあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
        }
        color={'lemon'}
      />
    </div>

  );
};

export default Home;
