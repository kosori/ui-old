import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className='scroll-smooth' lang='en'>
      <Head />
      <body className='bg-greyBase text-greyTextContrast selection:text-greyBase font-sans antialiased selection:bg-primarySolid'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
