import Link from 'next/link';

const SiteFooter = () => {
  return (
    <footer className='flex items-center h-12'>
      <div className='mx-auto w-full max-w-screen-xl text-center'>
        <p className='text-sm text-mauveText'>
          Created by{' '}
          <Link
            className='text-primarySolid transition-colors duration-200 hover:text-primarySolidHover'
            href='/'
          >
            Alexis Guzman
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
