import { forwardRef } from 'react';
import { SubContent } from '@radix-ui/react-menubar';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof SubContent>;
type Props = React.ComponentPropsWithoutRef<typeof SubContent>;

const MenubarSubContent = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <SubContent
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-lg border border-greyLine bg-greyBase p-1 shadow-md',
        className,
      )}
      {...props}
    />
  ),
);

MenubarSubContent.displayName = SubContent.displayName;

export default MenubarSubContent;
