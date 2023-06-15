import Link from 'next/link';
import { Github, Sun, Twitter } from 'lucide-react';

import { Button } from '~/components/ui/Button';
import MainNav from './MainNav';

const SiteHeader = () => {
  return (
    <header className='sticky top-0 z-20 flex h-16 w-full items-center border-b border-mauveLine bg-mauveBase/80 backdrop-blur-lg'>
      <div className='mx-auto flex w-full max-w-screen-xl justify-between'>
        <Link className='flex items-center space-x-2 font-bold' href='/'>
          <span className='inline-block h-6 w-6 rounded-full bg-mauve12' />
          <span className='text-lg font-bold'>Zen UI</span>
        </Link>

        <MainNav />

        <div className='flex items-center gap-x-6'>
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

          <Button intent='quaternary' size='small'>
            <Sun className='h-[14px] w-[14px]' />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
