'use client';

import { forwardRef } from 'react';
import { Indicator, Item } from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Item>;
type Props = React.ComponentPropsWithoutRef<typeof Item>;

const RadioGroupItem = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Item
      ref={ref}
      className={cn(
        'group peer h-4 w-4 rounded-full border border-greyBorder bg-greyBase',
        'focus:outline focus:outline-primaryFocusRing',
        'hover:border-greyBorderHover',
        'data-[state=checked]:bg-primarySolid',
        'disabled:cursor-not-allowed disabled:bg-greyBg disabled:text-greySolid',
        'disabled:hover:border-greyBorder',
        className,
      )}
      {...props}
    >
      <Indicator className='flex items-center justify-center'>
        <Circle
          className={cn('h-2 w-2 fill-greyBase', 'group-disabled:fill-greyBg')}
        />
      </Indicator>
    </Item>
  ),
);

RadioGroupItem.displayName = Item.displayName;

export default RadioGroupItem;
