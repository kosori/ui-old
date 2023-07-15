import { forwardRef } from 'react';
import { Label } from '@radix-ui/react-context-menu';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Label>;
type Props = React.ComponentPropsWithoutRef<typeof Label> & { inset?: boolean };

const ContextMenuLabel = forwardRef<Ref, Props>(
  ({ className, inset, ...props }, ref) => (
    <Label
      ref={ref}
      className={cn(
        'flex h-8 items-center px-2 text-xs font-medium text-greyText',
        inset && 'pl-8',
        className,
      )}
      {...props}
    />
  ),
);

ContextMenuLabel.displayName = Label.displayName;

export default ContextMenuLabel;
