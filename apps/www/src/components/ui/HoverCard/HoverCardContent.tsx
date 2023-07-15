import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-hover-card';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Content>;
type Props = React.ComponentPropsWithoutRef<typeof Content>;

const HoverCardContent = forwardRef<Ref, Props>(
  ({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
    <Content
      ref={ref}
      align={align}
      className={cn(
        'z-50 rounded-lg bg-greyBase p-4 shadow-md outline-none',
        className,
      )}
      sideOffset={sideOffset}
      {...props}
    />
  ),
);

HoverCardContent.displayName = Content.displayName;

export default HoverCardContent;
