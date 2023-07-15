import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-tabs';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Trigger>;
type Props = React.ComponentPropsWithoutRef<typeof Trigger>;

const TabsTrigger = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <Trigger
    ref={ref}
    className={cn(
      'inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium transition-all',
      'focus-visible:outline focus-visible:outline-primaryFocusRing',
      'disabled:cursor-not-allowed disabled:text-greySolid',
      'data-[state=active]:bg-greyBase data-[state=active]:text-greyTextContrast data-[state=active]:shadow-sm',
      className,
    )}
    {...props}
  />
));

TabsTrigger.displayName = Trigger.displayName;

export default TabsTrigger;
