import Link from 'next/link';

export const DesktopNavbar = (): JSX.Element => {
  return (
    <div className="hidden flex-row gap-9 text-base md:flex">
      <Link href="/topic">トピック一覧</Link>
      <Link href="/post">新規投稿</Link>
    </div>
  );
};
