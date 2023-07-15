import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-dropdown-menu';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Content>;
type Props = React.ComponentPropsWithoutRef<typeof Content>;

const DropdownMenuContent = forwardRef<Ref, Props>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <Content
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-lg border border-greyLine bg-greyBase p-1 shadow-md',
        className,
      )}
      sideOffset={sideOffset}
      {...props}
    />
  ),
);

DropdownMenuContent.displayName = Content.displayName;

export default DropdownMenuContent;
