import Image from 'next/image'
import { SupervisedUserCircle } from '@mui/icons-material';
import Link from 'next/link';
import { DesktopNavbar } from '~/components/layout/DesktopNavbar';
import { MobileNavbar } from '~/components/layout/MobileNavbar';
import icon from '~/assets/images/mierun.svg'

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="flex items-center min-h-full flex-col space-y-6 bg-lemon pb-20">
      <div className="flex w-full h-24 px-4 md:flex-row ">
        <Image src={icon} alt='' width={160} className='outline-2 pt-4'></Image>
        <Link href="/" className="flex flex-col space-y-4">
          <h1 className="text-xl font-KiwiMaru md:text-2xl pt-4 pl-8 ">
            育児の今が見えるSNS
          </h1>
          <p className="text-xl font-bold m-0 pl-8 pt-2 md:text-6xl">mierun</p>
        </Link>
        <div className='flex h-full justify-end items-ceter flex-row flex-grow  left-0 space-x-8 px-2 py-6 right-0'>
          <DesktopNavbar />
          <Link href="/profile">
            <SupervisedUserCircle href="/profile" fontSize="large" />
          </Link>
        </div>
      </div>
      <MobileNavbar />
      <div className="flex w-2/3 justify-center items-center rounded-2xl bg-white p-2" >{children}</div>
    </div>
  );
};
