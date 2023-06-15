import Link from 'next/link';
import { ArrowRight, Component } from 'lucide-react';

import { buttonStyles } from '~/components/ui/Button';

const SiteHero = () => {
  return (
    <div className='mx-auto flex w-full max-w-screen-xl flex-col items-center text-center'>
      <h1 className='text-5xl font-bold leading-none'>
        Build high quality and <br /> accessible apps in a short time.
      </h1>
      <p className='mt-4 text-xl text-mauveText'>
        Accessible. Customizable. Open source.
      </p>

      <div className='mt-9 flex space-x-6'>
        <Link
          className={buttonStyles({ size: 'large' })}
          href='/docs/introduction'
        >
          Get Started <ArrowRight className='h-5 w-5' />
        </Link>
        <Link
          className={buttonStyles({ intent: 'secondary', size: 'large' })}
          href='/docs/components'
        >
          Components <Component className='h-5 w-5' />
        </Link>
      </div>
    </div>
  );
};

export default SiteHero;
