import {
  Portal,
  type AlertDialogPortalProps,
} from '@radix-ui/react-alert-dialog';

const AlertDialogPortal = ({ children, ...props }: AlertDialogPortalProps) => (
  <Portal {...props}>{children}</Portal>
);

AlertDialogPortal.displayName = Portal.displayName;

export default AlertDialogPortal;
