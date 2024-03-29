import { forwardRef } from 'react';
import { Description } from '@radix-ui/react-alert-dialog';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Description>;
type Props = React.ComponentPropsWithoutRef<typeof Description>;

const AlertDialogDescription = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Description
      ref={ref}
      className={cn('text-sm text-greyText', className)}
      {...props}
    />
  ),
);

AlertDialogDescription.displayName = Description.displayName;

export default AlertDialogDescription;
