import { forwardRef } from 'react';
import { Action } from '@radix-ui/react-alert-dialog';

import {
  buttonStyles,
  type Props as ButtonProps,
} from '~/components/ui/Button';

type Ref = React.ElementRef<typeof Action>;
type ActionProps = React.ComponentPropsWithoutRef<typeof Action>;
interface Props extends ActionProps, ButtonProps { }

const AlertDialogAction = forwardRef<Ref, Props>(
  ({ intent = 'primary', size, className, ...props }, ref) => (
    <Action
      ref={ref}
      className={buttonStyles({ intent, size, class: className })}
      {...props}
    />
  ),
);

AlertDialogAction.displayName = Action.displayName;

export default AlertDialogAction;
