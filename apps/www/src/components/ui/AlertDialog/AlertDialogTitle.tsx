import { forwardRef } from 'react';
import { Title } from '@radix-ui/react-alert-dialog';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Title>;
type Props = React.ComponentPropsWithoutRef<typeof Title>;

const AlertDialogTitle = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Title
      ref={ref}
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  ),
);

AlertDialogTitle.displayName = Title.displayName;

export default AlertDialogTitle;
