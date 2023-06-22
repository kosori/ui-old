import { forwardRef } from 'react';
import { Content, Portal } from '@radix-ui/react-context-menu';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Content>;
type Props = React.ComponentPropsWithoutRef<typeof Content>;

const ContextMenuContent = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Portal>
      <Content
        ref={ref}
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-xl border border-mauveLine bg-mauveBase p-1 shadow-md',
          className,
        )}
        {...props}
      />
    </Portal>
  ),
);

ContextMenuContent.displayName = Content.displayName;

export default ContextMenuContent;
