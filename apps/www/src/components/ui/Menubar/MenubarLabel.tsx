'use client';

import { forwardRef } from 'react';
import { Label } from '@radix-ui/react-menubar';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Label>;
type Props = React.ComponentPropsWithoutRef<typeof Label> & { inset?: boolean };

const MenubarLabel = forwardRef<Ref, Props>(
  ({ className, inset, ...props }, ref) => (
    <Label
      ref={ref}
      className={cn(
        'h-10 px-2 text-sm font-semibold',
        inset && 'pl-8',
        className,
      )}
      {...props}
    />
  ),
);

MenubarLabel.displayName = Label.displayName;

export default MenubarLabel;
