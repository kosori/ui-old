import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className='scroll-smooth' lang='en'>
      <Head />
      <body className='bg-mauveBase text-mauveTextContrast selection:bg-primarySolid selection:text-mauveBase font-sans antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
