'use client';

import { forwardRef } from 'react';
import { SubTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronRight } from 'lucide-react';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof SubTrigger>;
type Props = React.ComponentPropsWithoutRef<typeof SubTrigger> & {
  inset?: boolean;
};

const DropdownMenuSubTrigger = forwardRef<Ref, Props>(
  ({ className, inset, children, ...props }, ref) => (
    <SubTrigger
      ref={ref}
      className={cn(
        'flex h-8 select-none items-center rounded-md px-2 text-sm outline-none transition-colors duration-200',
        'focus:bg-primaryBgHover',
        'data-[state=open]:bg-primaryBgHover',
        inset && 'pl-8',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRight className='ml-auto h-4 w-4' />
    </SubTrigger>
  ),
);

DropdownMenuSubTrigger.displayName = SubTrigger.displayName;

export default DropdownMenuSubTrigger;
