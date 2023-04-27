import { forwardRef } from 'react';
import { Label } from '@radix-ui/react-dropdown-menu';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Label>;
type Props = React.ComponentPropsWithoutRef<typeof Label> & { inset?: boolean };

const DropdownMenuLabel = forwardRef<Ref, Props>(
  ({ className, inset, ...props }, ref) => (
    <Label
      ref={ref}
      className={cn(
        'flex h-8 items-center px-2 text-sm font-semibold',
        inset && 'pl-8',
        className,
      )}
      {...props}
    />
  ),
);

DropdownMenuLabel.displayName = Label.displayName;

export default DropdownMenuLabel;
