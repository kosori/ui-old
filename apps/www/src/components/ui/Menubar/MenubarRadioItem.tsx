import { forwardRef } from 'react';
import { ItemIndicator, RadioItem } from '@radix-ui/react-menubar';
import { Circle } from 'lucide-react';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof RadioItem>;
type Props = React.ComponentPropsWithoutRef<typeof RadioItem>;

const MenubarRadioItem = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => (
    <RadioItem
      ref={ref}
      className={cn(
        'relative flex h-8 select-none items-center rounded-md pl-8 pr-2 text-sm outline-none transition-colors duration-200',
        'focus:bg-primaryBgHover',
        'active:bg-primaryBgActive',
        'data-[disabled]:cursor-not-allowed data-[disabled]:text-greySolid',
        className,
      )}
      {...props}
    >
      <span className='absolute left-2 flex items-center justify-center'>
        <ItemIndicator>
          <Circle className='h-2 w-2 fill-current' />
        </ItemIndicator>
      </span>
      {children}
    </RadioItem>
  ),
);

MenubarRadioItem.displayName = RadioItem.displayName;

export default MenubarRadioItem;
