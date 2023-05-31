import { useMDXComponent } from 'next-contentlayer/hooks';

import { MdxComponents } from '~/components';

type Props = {
  code: string;
};

const Mdx = ({ code }: Props) => {
  const Component = useMDXComponent(code);

  return (
    <div className='mdx'>
      <Component components={MdxComponents} />
    </div>
  );
};

export default Mdx;
