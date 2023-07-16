import { forwardRef } from 'react';

import { cn } from '~/utils';

type Props = React.HTMLAttributes<HTMLHeadingElement>;

const CardTitle = forwardRef<HTMLParagraphElement, Props>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className,
      )}
      {...props}
    />
  ),
);

CardTitle.displayName = 'CardTitle';

export default CardTitle;
