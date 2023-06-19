import { forwardRef } from 'react';

import { cn } from '~/utils';

type Ref = HTMLParagraphElement;
type Props = React.HTMLAttributes<HTMLParagraphElement>;

const AlertDescription = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-mauveText', className)} {...props} />
  ),
);

AlertDescription.displayName = 'AlertDescription';

export default AlertDescription;
