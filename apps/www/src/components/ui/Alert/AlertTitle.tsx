import { forwardRef } from 'react';

import { cn } from '~/utils';

type Ref = HTMLParagraphElement;
type Props = React.HTMLAttributes<HTMLHeadingElement>;

const AlertTitle = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      'mb-1 flex items-center font-medium leading-none tracking-tight text-current',
      className,
    )}
    {...props}
  />
));

AlertTitle.displayName = 'AlertTitle';

export default AlertTitle;
