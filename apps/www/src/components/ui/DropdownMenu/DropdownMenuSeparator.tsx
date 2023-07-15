import { forwardRef } from 'react';
import { Separator } from '@radix-ui/react-dropdown-menu';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Separator>;
type Props = React.ComponentPropsWithoutRef<typeof Separator>;

const DropdownMenuSeparator = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Separator
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-greyLine', className)}
      {...props}
    />
  ),
);

DropdownMenuSeparator.displayName = Separator.displayName;

export default DropdownMenuSeparator;
