import { SupervisedUserCircle } from '@mui/icons-material';
import Link from 'next/link';

import { DesktopNavbar } from '~/components/layout/DesktopNavbar';
import { MobileNavbar } from '~/components/layout/MobileNavbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="h-screen w-full bg-lemon">
      <div className="flex w-full justify-between px-4 py-10 md:flex-row md:px-20 md:py-20">
        <Link href="/" className="flex flex-col">
          <h1 className="text-xl font-semibold md:text-2xl">
            育児の今が見えるSNS
          </h1>
          <p className="text-base">mierun</p>
        </Link>
        <DesktopNavbar />
        <Link href="/profile">
          <SupervisedUserCircle href="/profile" fontSize="large" />
        </Link>
      </div>
      <MobileNavbar />
      <div className="mx-5 my-10 rounded-lg bg-white md:mx-10">{children}</div>
    </div>
  );
};
