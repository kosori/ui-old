'use client';

import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-menubar';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Root>;
type Props = React.ComponentPropsWithoutRef<typeof Root>;

const Menubar = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'flex h-10 items-center space-x-1 rounded-lg border border-greyLine bg-greyBase p-1',
      className,
    )}
    {...props}
  />
));

Menubar.displayName = Root.displayName;

export default Menubar;
