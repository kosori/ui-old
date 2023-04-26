import { forwardRef } from 'react';
import { Description } from '@radix-ui/react-dialog';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Description>;
type Props = React.ComponentPropsWithoutRef<typeof Description>;

const DialogDescription = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Description
      ref={ref}
      className={cn('text-sm text-mauveText', className)}
      {...props}
    />
  ),
);

DialogDescription.displayName = Description.displayName;

export default DialogDescription;
