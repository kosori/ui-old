import { forwardRef } from 'react';
import { SubContent } from '@radix-ui/react-context-menu';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof SubContent>;
type Props = React.ComponentPropsWithoutRef<typeof SubContent>;

const ContextMenuSubContent = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <SubContent
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-xl border border-greyLine bg-greyBase p-1 shadow-md',
        className,
      )}
      {...props}
    />
  ),
);

ContextMenuSubContent.displayName = SubContent.displayName;

export default ContextMenuSubContent;
