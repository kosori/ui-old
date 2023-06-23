import { forwardRef } from 'react';
import { Cancel } from '@radix-ui/react-alert-dialog';

import {
  buttonStyles,
  type Props as ButtonProps,
} from '~/components/ui/Button';

type Ref = React.ElementRef<typeof Cancel>;
type CancelProps = React.ComponentPropsWithoutRef<typeof Cancel>;
interface Props extends CancelProps, ButtonProps {}

const AlertDialogCancel = forwardRef<Ref, Props>(
  ({ intent = 'secondary', size, className, ...props }, ref) => (
    <Cancel
      ref={ref}
      className={buttonStyles({ intent, size, class: className })}
      {...props}
    />
  ),
);

AlertDialogCancel.displayName = Cancel.displayName;

export default AlertDialogCancel;
