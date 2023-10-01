'use client';

import { forwardRef } from 'react';
import { Item } from '@radix-ui/react-context-menu';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Item>;
type Props = React.ComponentPropsWithoutRef<typeof Item> & { inset?: boolean };

const ContextMenuItem = forwardRef<Ref, Props>(
  ({ className, inset, ...props }, ref) => (
    <Item
      ref={ref}
      className={cn(
        'group relative flex h-8 select-none items-center rounded-lg px-2 text-sm outline-none transition-colors duration-200',
        'focus:bg-primaryBgHover',
        'active:bg-primaryBgActive',
        'data-[disabled]:cursor-not-allowed data-[disabled]:text-greySolid',
        inset && 'pl-8',
        className,
      )}
      {...props}
    />
  ),
);

ContextMenuItem.displayName = Item.displayName;

export default ContextMenuItem;
