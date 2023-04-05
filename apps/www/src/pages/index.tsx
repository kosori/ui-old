import { type NextPage } from 'next';
import Link from 'next/link';
import { SiGithub } from '@icons-pack/react-simple-icons';

import { buttonStyles } from '~/components/ui/Button';

const Home: NextPage = () => {
  return (
    <div className='flex-1'>
      <div className='mx-auto flex w-full max-w-screen-xl flex-col items-center text-center'>
        <h1 className='text-5xl font-bold'>
          Build high quality and <br /> accessible apps in a short time.
        </h1>
        <p className='text-xl text-mauveText'>
          Accessible. Customizable. Open source.
        </p>

        <div className='mt-6 flex space-x-4'>
          <Link
            className={buttonStyles({ size: 'large' })}
            href='/docs/getting-started'
          >
            Get Started
          </Link>
          <Link
            className={buttonStyles({ intent: 'secondary', size: 'large' })}
            href='https://github.com/codingcodax/ui'
            rel='noopener noreferrer'
            target='_blank'
          >
            <SiGithub size={16} /> GitHub
          </Link>
        </div>
      </div>
      <div className='mx-auto mt-16 grid h-[50vh] w-full max-w-screen-md grid-cols-3 grid-rows-2 gap-6'>
        <div className='bg-mauveBgSubtle' />
        <div className='row-span-2 bg-mauveBgSubtle' />
        <div className='bg-mauveBgSubtle' />
        <div className='bg-mauveBgSubtle' />
        <div className='bg-mauveBgSubtle' />
      </div>
    </div>
  );
};

export default Home;
