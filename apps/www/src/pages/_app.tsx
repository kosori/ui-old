import type { AppType } from 'next/app';
import { Inter as FontSans } from 'next/font/google';

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

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
