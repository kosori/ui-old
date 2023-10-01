'use client';

import { forwardRef } from 'react';
import { Indicator } from '@radix-ui/react-navigation-menu';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Indicator>;
type Props = React.ComponentPropsWithRef<typeof Indicator>;

const NavigationMenuIndicator = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Indicator
      ref={ref}
      className={cn(
        'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
        className,
      )}
      {...props}
    >
      <div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-greyLine shadow-md' />
    </Indicator>
  ),
);

NavigationMenuIndicator.displayName = Indicator.displayName;

export default NavigationMenuIndicator;
