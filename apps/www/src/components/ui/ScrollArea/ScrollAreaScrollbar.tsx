import { forwardRef } from 'react';
import {
  ScrollAreaThumb,
  ScrollAreaScrollbar as Scrollbar,
} from '@radix-ui/react-scroll-area';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Scrollbar>;
type Props = React.ComponentPropsWithoutRef<typeof Scrollbar>;

const ScrollAreaScrollbar = forwardRef<Ref, Props>(
  ({ className, orientation = 'vertical', ...props }, ref) => (
    <Scrollbar
      ref={ref}
      className={cn(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' &&
        'h-full w-2.5 border-l border-l-transparent p-px',
        orientation === 'horizonal' &&
        'h-2.5 border-t border-t-transparent p-px',
        className,
      )}
      orientation={orientation}
      {...props}
    >
      <ScrollAreaThumb className='relative flex-1 rounded-full bg-mauveLine' />
    </Scrollbar>
  ),
);

ScrollAreaScrollbar.displayName = Scrollbar.displayName;

export default ScrollAreaScrollbar;
