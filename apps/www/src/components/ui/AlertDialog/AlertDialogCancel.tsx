import { forwardRef } from 'react';
import { Cancel } from '@radix-ui/react-alert-dialog';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Cancel>;
type Props = React.ComponentPropsWithoutRef<typeof Cancel>;

const AlertDialogCancel = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Cancel
      ref={ref}
      className={cn(
        'h-10 rounded-lg bg-primaryBg px-3 text-sm text-primarySolid transition-colors duration-200',
        'hover:bg-primaryBgHover',
        'active:bg-primaryBgActive',
        'disabled:bg-mauveBg disabled:text-mauveSolid',
        className,
      )}
      {...props}
    />
  ),
);

AlertDialogCancel.displayName = Cancel.displayName;

export default AlertDialogCancel;
