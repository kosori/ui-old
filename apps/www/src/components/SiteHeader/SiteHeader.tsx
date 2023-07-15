import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

import MainNav from './MainNav';
import ToggleTheme from './ToggleTheme';

const SiteHeader = () => {
  return (
    <header className='border-greyLine bg-greyBase/80 sticky top-0 z-20 flex w-full items-center border-b py-4 backdrop-blur-lg'>
      <div className='mx-auto grid w-full max-w-screen-xl grid-cols-[1fr_auto_1fr]'>
        <Link className='flex items-center space-x-2 font-bold' href='/'>
          <span className='bg-grey12 inline-block h-8 w-8 rounded-full' />
          <span className='text-lg font-bold'>Zen UI</span>
        </Link>

        <MainNav />

        <div className='flex items-center justify-end gap-x-6'>
          <Link
            className='text-greyText hover:text-greyTextContrast transition-colors duration-200'
            href='/'
          >
            <Github className='h-5 w-5' />
          </Link>
          <Link
            className='text-greyText hover:text-greyTextContrast transition-colors duration-200'
            href='/'
          >
            <Twitter className='h-5 w-5' />
          </Link>

          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
