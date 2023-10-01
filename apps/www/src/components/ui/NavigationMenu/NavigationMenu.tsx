'use client';

import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-navigation-menu';

import { cn } from '~/utils';
import NavigationMenuViewport from './NavigationMenuViewport';

type Ref = React.ElementRef<typeof Root>;
type Props = React.ComponentPropsWithoutRef<typeof Root>;

const NavigationMenu = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(
        'relative z-10 flex flex-1 items-center justify-center',
        className,
      )}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </Root>
  ),
);

NavigationMenu.displayName = Root.displayName;

export default NavigationMenu;
