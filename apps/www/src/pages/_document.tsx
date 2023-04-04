import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className='scroll-smooth' lang='en'>
      <Head />
      <body className='bg-mauveBase font-sans text-mauveTextContrast antialiased selection:bg-primarySolid selection:text-mauveBase'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
