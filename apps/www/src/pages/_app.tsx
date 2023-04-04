import type { AppType } from 'next/app';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import { SiteFooter, SiteHeader } from '~/components';
import '~/styles/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// eslint-disable-next-line react/prop-types
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      {/*eslint-disable-next-line react/no-unknown-property*/}
      <style global jsx>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }
      `}</style>

      <ThemeProvider attribute='class' defaultTheme='system'>
        <div className='flex min-h-screen gap-y-10 flex-col'>
          <SiteHeader />
          <Component {...pageProps} />
          <SiteFooter />
        </div>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
