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
        'group peer h-4 w-4 rounded-full border border-mauveBorder bg-mauveBase',
        'focus:outline focus:outline-primaryFocusRing',
        'hover:border-mauveBorderHover',
        'data-[state=checked]:bg-primarySolid',
        'disabled:cursor-not-allowed disabled:bg-mauveBg disabled:text-mauveSolid',
        'disabled:hover:border-mauveBorder',
        className,
      )}
      {...props}
    >
      <Indicator className='flex items-center justify-center'>
        <Circle
          className={cn(
            'h-2 w-2 fill-mauveBase',
            'group-disabled:fill-mauveBg',
          )}
        />
      </Indicator>
    </Item>
  ),
);

RadioGroupItem.displayName = Item.displayName;

export default RadioGroupItem;
