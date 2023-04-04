import Link from 'next/link';
import { SiGithub, SiTwitter } from '@icons-pack/react-simple-icons';

import MainNav from './MainNav';

const SiteHeader = () => {
  return (
    <header className='flex h-16 w-full items-center'>
      <div className='mx-auto flex w-full max-w-screen-xl justify-between'>
        <Link className='font-bold' href='/'>
          /ui
        </Link>

        <MainNav />

        <div className='flex gap-x-6'>
          <Link
            className='text-mauveText hover:text-mauveTextContrast transition-colors duration-200'
            href='/'
          >
            <SiGithub size={20} />
          </Link>
          <Link
            className='text-mauveText transition-colors duration-200 hover:text-mauveTextContrast'
            href='/'
          >
            <SiTwitter size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
