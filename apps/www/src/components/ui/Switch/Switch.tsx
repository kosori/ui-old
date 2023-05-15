import { forwardRef } from 'react';
import { Root, Thumb } from '@radix-ui/react-switch';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Root>;
type Props = React.ComponentPropsWithoutRef<typeof Root>;

const Switch = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
      'focus-visible:outline focus-visible:outline-primaryFocusRing',
      'disabled:cursor-not-allowed disabled:bg-mauveBgSubtle',
      'data-[state=checked]:bg-primarySolid',
      'data-[state=unchecked]:bg-mauveBg',
      className,
    )}
    {...props}
  >
    <Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-mauveBase shadow-lg transition-transform',
        'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      )}
    />
  </Root>
));

Switch.displayName = Root.displayName;

export default Switch;
