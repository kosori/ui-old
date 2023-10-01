import { forwardRef } from 'react';

import { cn } from '~/utils';

type Props = React.HTMLAttributes<HTMLDivElement>;

const CardFooter = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  ),
);
CardFooter.displayName = 'CardFooter';

export default CardFooter;
