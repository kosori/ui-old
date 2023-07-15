import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-alert-dialog';

import { cn } from '~/utils';
import AlertDialogOverlay from './AlertDialogOverlay';
import AlertDialogPortal from './AlertDialogPortal';

type Ref = React.ElementRef<typeof Content>;
type Props = React.ComponentPropsWithoutRef<typeof Content>;

const AlertDialogContent = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <Content
        ref={ref}
        className={cn(
          'fixed inset-1/2 z-50 grid h-fit w-full max-w-lg -translate-x-1/2 -translate-y-1/2 scale-100 gap-4 bg-greyBase p-6 opacity-100 sm:rounded-lg md:w-full',
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  ),
);

AlertDialogContent.displayName = Content.displayName;

export default AlertDialogContent;
