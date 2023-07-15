import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className='scroll-smooth' lang='en'>
      <Head />
      <body className='bg-greyBase font-sans text-greyTextContrast antialiased selection:bg-primarySolid selection:text-greyBase'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
