import { forwardRef } from 'react';

import { cn } from '~/utils';

type Props = React.HTMLAttributes<HTMLParagraphElement>;

const CardDescription = forwardRef<HTMLParagraphElement, Props>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-greyText', className)}
      {...props}
    />
  ),
);

CardDescription.displayName = 'CardDescription';

export default CardDescription;
