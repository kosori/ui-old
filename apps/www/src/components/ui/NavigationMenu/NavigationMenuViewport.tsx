'use client';

import { forwardRef } from 'react';
import { Viewport } from '@radix-ui/react-navigation-menu';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Viewport>;
type Props = React.ComponentPropsWithoutRef<typeof Viewport>;

const NavigationMenuViewport = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <div className='absolute left-0 top-full flex justify-center'>
      <Viewport
        ref={ref}
        className={cn(
          'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-lg border border-greyLine bg-greyBase shadow-md',
          'md:w-[var(--radix-navigation-menu-viewport-width)]',
          className,
        )}
        {...props}
      />
    </div>
  ),
);

NavigationMenuViewport.displayName = Viewport.displayName;

export default NavigationMenuViewport;
