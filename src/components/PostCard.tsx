'use client';

type PostCardProps = {
  title: string;
  content: string;
  color: string;
};

export const PostCard = ({ title, content, color }: PostCardProps) => {
  const colorClassName = 'bg-[#ffe24a]';
  // const colorClassName = 'bg-' + color;
  // const cardClassName = 'flex w-48 h-32 flex-col space-y-1 ' + colorClassName;
  const cardClassName = `flex w-48 h-32 flex-col space-y-1 bg-[#ffe24a]`;

  return (
    // <div className={cardClassName}>
    <div className={cardClassName}>
      <label className="h-1/4 truncate">{title}</label>
      <label className="line-clamp-3 h-1/2 text-sm">{content}</label>
    </div>
  );
};
