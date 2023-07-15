import { forwardRef } from 'react';
import { Content, Portal } from '@radix-ui/react-menubar';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Content>;
type Props = React.ComponentPropsWithoutRef<typeof Content>;

const MenubarContent = forwardRef<Ref, Props>(
  (
    { className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
    ref,
  ) => (
    <Portal>
      <Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          'z-50 min-w-[12rem] overflow-hidden rounded-lg border border-greyLine bg-greyBase p-1 shadow-md',
          className,
        )}
        sideOffset={sideOffset}
        {...props}
      />
    </Portal>
  ),
);

MenubarContent.displayName = Content.displayName;

export default MenubarContent;
