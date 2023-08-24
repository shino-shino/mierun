import Link from 'next/link';

export const MobileNavbar = (): JSX.Element => {
  return (
    <div className="flex flex-row gap-52 pt-6 text-xl md:hidden">
      <Link href="/topic">トピック一覧</Link>
      <Link href="/post">新規投稿</Link>
    </div>
  );
};
