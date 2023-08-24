import { SupervisedUserCircle } from '@mui/icons-material';
import Link from 'next/link';

import { DesktopNavbar } from '~/components/layout/DesktopNavbar';
import { MobileNavbar } from '~/components/layout/MobileNavbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="flex h-screen items-center flex-col space-y-6 bg-lemon">
      <div className="flex w-full h-24 justify-between px-4 md:flex-row ">
        <Link href="/" className="flex flex-col space-y-4">
          <h1 className="text-2xl font-KiwiMaru md:text-5xl pt-4 ">
            育児の今が見えるSNS
          </h1>
          <p className="text-xl font-bold m-0 pl-2 md:text-2xl">mierun</p>
        </Link>
        <div className='flex h-full justify-center items-ceter flex-row space-x-8 px-2 py-4'>
          <DesktopNavbar />
          <Link href="/profile">
            <SupervisedUserCircle href="/profile" fontSize="large" />
          </Link>
        </div>
      </div>
      <MobileNavbar />
      <div className="flex w-2/3 h-screen justify-center items-center rounded-xl bg-white" >{children}</div>
    </div>
  );
};
