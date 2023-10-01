'use client';

import { forwardRef } from 'react';
import { Content, Portal } from '@radix-ui/react-popover';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Content>;
type Props = React.ComponentPropsWithoutRef<typeof Content>;

const PopoverContent = forwardRef<Ref, Props>(
  ({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
    <Portal>
      <Content
        ref={ref}
        align={align}
        className={cn(
          'z-50 w-72 rounded-lg border border-greyLine bg-greyBase p-4 shadow-md outline-none',
          className,
        )}
        sideOffset={sideOffset}
        {...props}
      />
    </Portal>
  ),
);

PopoverContent.displayName = Content.displayName;

export default PopoverContent;
