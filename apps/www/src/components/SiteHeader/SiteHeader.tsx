import Link from 'next/link';
import { Github, Sun, Twitter } from 'lucide-react';

import { Button } from '~/components/ui/Button';
import MainNav from './MainNav';

const SiteHeader = () => {
  return (
    <header className='sticky top-0 z-20 flex w-full items-center border-b border-mauveLine bg-mauveBase/80 py-4 backdrop-blur-lg'>
      <div className='mx-auto grid w-full max-w-screen-xl grid-cols-[1fr_auto_1fr]'>
        <Link className='flex items-center space-x-2 font-bold' href='/'>
          <span className='inline-block h-8 w-8 rounded-full bg-mauve12' />
          <span className='text-lg font-bold'>Zen UI</span>
        </Link>

        <MainNav />

        <div className='flex items-center justify-end gap-x-6'>
          <Link
            className='text-mauveText transition-colors duration-200 hover:text-mauveTextContrast'
            href='/'
          >
            <Github className='h-5 w-5' />
          </Link>
          <Link
            className='text-mauveText transition-colors duration-200 hover:text-mauveTextContrast'
            href='/'
          >
            <Twitter className='h-5 w-5' />
          </Link>

          <Button className='p-[11px]' intent='tertiary'>
            <Sun className='h-[18px] w-[18px]' />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
