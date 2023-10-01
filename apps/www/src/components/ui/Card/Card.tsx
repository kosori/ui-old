import { forwardRef } from 'react';

import { cn } from '~/utils';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Card = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl border border-greyLine bg-greyBase text-greyTextContrast shadow-sm',
        className,
      )}
      {...props}
    />
  ),
);

Card.displayName = 'Card';

export default Card;
