'use client';

interface PostCardProps {
  id: number;
  title: string;
  content: string;
  color: 'yuzu' | 'mandarin' | 'lime' | 'grapefruit' | 'lemon';
}

export const PostCard = ({ title, content, color }: PostCardProps) => {
  // const colorClassName = 'bg-slate-500';
  const colorClassName = 'bg-' + color;
  const cardClassName = 'flex w-48 h-32 flex-col space-y-1 ' + colorClassName;

  return (
    <div className={cardClassName}>
      <label className="h-1/4 truncate">{title}</label>
      <label className="bg-slate-70 line-clamp-3 h-1/2 text-sm">
        {content}
      </label>
    </div>
  );
};
