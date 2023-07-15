import { forwardRef } from 'react';
import { Separator } from '@radix-ui/react-context-menu';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Separator>;
type Props = React.ComponentPropsWithoutRef<typeof Separator>;

const ContextMenuSeparator = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Separator
      ref={ref}
      className={cn('-mx-2 my-1 h-px bg-greyLine', className)}
      {...props}
    />
  ),
);

ContextMenuSeparator.displayName = Separator.displayName;

export default ContextMenuSeparator;
