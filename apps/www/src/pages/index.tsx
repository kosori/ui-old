import { type NextPage } from 'next';

import { SiteHero } from '~/components';

const Home: NextPage = () => {
  return (
    <div className='flex-1'>
      <SiteHero />

      <div className='mx-auto mt-20 flex w-full max-w-screen-xl items-end justify-center'>
        <div className='h-[300px] w-[600px] rounded-xl bg-mauveBgSubtle' />
      </div>
    </div>
  );
};

export default Home;
