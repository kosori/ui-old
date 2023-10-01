import { Portal, type DialogPortalProps } from '@radix-ui/react-dialog';

import { cn } from '~/utils';

const DialogPortal = ({ children, ...props }: DialogPortalProps) => (
  <Portal {...props}>
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-start justify-center',
        'sm:items-center',
      )}
    >
      {children}
    </div>
  </Portal>
);

DialogPortal.displayName = Portal.displayName;

export default DialogPortal;
