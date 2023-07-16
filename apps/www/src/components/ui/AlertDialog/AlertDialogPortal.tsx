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
  <Portal className={cn(className)} {...props}>
    {children}
  </Portal>
);

AlertDialogPortal.displayName = Portal.displayName;

export default AlertDialogPortal;
