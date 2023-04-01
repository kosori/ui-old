import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className='scroll-smooth' lang='en'>
      <Head />
      <body className='bg-mauve12 font-sans text-mauve1 antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
