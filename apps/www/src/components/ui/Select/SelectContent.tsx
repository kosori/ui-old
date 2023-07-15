import { forwardRef } from 'react';
import { Content, Portal, Viewport } from '@radix-ui/react-select';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Content>;
type Props = React.ComponentPropsWithoutRef<typeof Content>;

const SelectContent = forwardRef<Ref, Props>(
  ({ className, children, position = 'popper', ...props }, ref) => (
    <Portal>
      <Content
        ref={ref}
        className={cn(
          'relative z-50 min-w-[8rem] overflow-hidden rounded-lg border border-greyLine bg-greyBase shadow-md',
          position === 'popper' && 'translate-y-1',
          className,
        )}
        position={position}
        {...props}
      >
        <Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
          )}
        >
          {children}
        </Viewport>
      </Content>
    </Portal>
  ),
);

SelectContent.displayName = Content.displayName;

export default SelectContent;
