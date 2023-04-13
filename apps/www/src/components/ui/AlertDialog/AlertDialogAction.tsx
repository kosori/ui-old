import { forwardRef } from 'react';
import { Action } from '@radix-ui/react-alert-dialog';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Action>;
type Props = React.ComponentPropsWithoutRef<typeof Action>;

const AlertDialogAction = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Action
      ref={ref}
      className={cn(
        'trasition-colors h-10 rounded-lg bg-primarySolid px-3 text-sm text-mauveBase duration-200',
        'hover:bg-primarySolidHover',
        'active:bg-primaryText',
        'disabled:bg-primaryLine',
        className,
      )}
      {...props}
    />
  ),
);

AlertDialogAction.displayName = Action.displayName;

export default AlertDialogAction;
