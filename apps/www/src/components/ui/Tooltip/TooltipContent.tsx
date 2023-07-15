import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-tooltip';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Content>;
type Props = React.ComponentPropsWithoutRef<typeof Content>;

const TooltipContent = forwardRef<Ref, Props>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <Content
      ref={ref}
      className={cn(
        'z-50 overflow-hidden rounded-lg border border-greyLine bg-greyBase px-3 py-1.5 text-sm shadow-md',
        className,
      )}
      sideOffset={sideOffset}
      {...props}
    />
  ),
);

TooltipContent.displayName = Content.displayName;

export default TooltipContent;
