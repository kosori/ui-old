import { forwardRef } from 'react';
import { Overlay } from '@radix-ui/react-alert-dialog';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Overlay>;
type Props = React.ComponentPropsWithoutRef<typeof Overlay>;

const AlertDialogOverlay = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Overlay
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 bg-blackA9 backdrop-blur-sm transition-opacity',
        className,
      )}
      {...props}
    />
  ),
);

AlertDialogOverlay.displayName = Overlay.displayName;

export default AlertDialogOverlay;
