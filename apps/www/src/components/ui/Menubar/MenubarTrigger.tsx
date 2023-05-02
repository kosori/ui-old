import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-menubar';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Trigger>;
type Props = React.ComponentPropsWithoutRef<typeof Trigger>;

const MenubarTrigger = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Trigger
      ref={ref}
      className={cn(
        'flex h-full select-none items-center rounded-md px-3 text-sm font-medium outline-none transition-colors duration-200',
        'focus:bg-primaryBgHover',
        'data-[state=open]:bg-primaryBgHover',
        className,
      )}
      {...props}
    />
  ),
);

MenubarTrigger.displayName = Trigger.displayName;

export default MenubarTrigger;
