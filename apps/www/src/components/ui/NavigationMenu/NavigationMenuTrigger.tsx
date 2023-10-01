'use client';

import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-navigation-menu';
import { ChevronDown } from 'lucide-react';

import { cn } from '~/utils';

export const navigationMenuTriggerStyle = cn(
  'group inline-flex h-10 w-max items-center justify-center rounded-lg bg-greyBase px-4 py-2 text-sm font-medium transition-colors duration-200',
  'hover:bg-primaryBgHover',
  'active:bg-primaryBgActive',
  'focus:bg-primaryBgHover focus:outline-none',
  'data-[state=open]:bg-primaryBgActive',
  'disabled:cursor-not-allowed disabled:text-greySolid',
  'disabled:hover:bg-greyBase',
);

type Ref = React.ElementRef<typeof Trigger>;
type Props = React.ComponentPropsWithoutRef<typeof Trigger>;

const NavigationMenuTrigger = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => (
    <Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle, className)}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          'relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200',
          'group-data-[state=open]:rotate-180',
        )}
      />
    </Trigger>
  ),
);

NavigationMenuTrigger.displayName = Trigger.displayName;

export default NavigationMenuTrigger;
