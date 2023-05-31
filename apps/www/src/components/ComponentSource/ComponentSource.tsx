import { type HTMLAttributes } from 'react';

import { CodeBlockWrapper } from '~/components';
import { cn } from '~/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
}

const ComponentSource = ({ children, className }: Props) => {
  return (
    <CodeBlockWrapper
      className={cn('my-6 overflow-hidden rounded-md', className)}
      expandButtonTitle='Expand'
    >
      {children}
    </CodeBlockWrapper>
  );
};

export default ComponentSource;
