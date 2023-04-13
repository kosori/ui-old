import {
  Portal,
  type AlertDialogPortalProps,
} from '@radix-ui/react-alert-dialog';

import { cn } from '~/utils';

const AlertDialogPortal = ({
  className,
  children,
  ...props
}: AlertDialogPortalProps) => (
  <Portal
    className={cn(
      'fixed inset-0 z-50 flex items-end justify-center sm:items-center',
      className,
    )}
    {...props}
  >
    <div>{children}</div>
  </Portal>
);

AlertDialogPortal.displayName = Portal.displayName;

export default AlertDialogPortal;
