import { forwardRef } from 'react';
import { Corner, Root, Viewport } from '@radix-ui/react-scroll-area';

import { cn } from '~/utils';
import ScrollAreaScrollbar from './ScrollAreaScrollbar';

type Ref = React.ElementRef<typeof Root>;
type Props = React.ComponentPropsWithoutRef<typeof Root>;

const ScrollArea = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      <Viewport className='h-full w-full rounded-[inherit]'>
        {children}
      </Viewport>
      <ScrollAreaScrollbar />
      <Corner />
    </Root>
  ),
);

ScrollArea.displayName = Root.displayName;

export default ScrollArea;
