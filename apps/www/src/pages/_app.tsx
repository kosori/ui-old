import '../styles/globals.css';
import type { AppType } from 'next/app';

// eslint-disable-next-line react/prop-types
const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
