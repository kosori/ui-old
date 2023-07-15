import { forwardRef } from 'react';
import { Fallback } from '@radix-ui/react-avatar';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Fallback>;
type Props = React.ComponentPropsWithoutRef<typeof Fallback>;

const AvatarFallback = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Fallback
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center bg-greyBgSubtle',
        className,
      )}
      {...props}
    />
  ),
);

AvatarFallback.displayName = Fallback.displayName;

export default AvatarFallback;
