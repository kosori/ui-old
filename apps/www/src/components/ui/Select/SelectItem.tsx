import { forwardRef } from 'react';
import { Item, ItemIndicator, ItemText } from '@radix-ui/react-select';
import { Check } from 'lucide-react';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Item>;
type Props = React.ComponentPropsWithoutRef<typeof Item>;

const SelectItem = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => (
    <Item
      ref={ref}
      className={cn(
        'relative flex h-8 w-full cursor-pointer select-none items-center rounded-md pl-8 pr-2 text-sm outline-none transition-colors duration-200',
        'focus:bg-primaryBgHover',
        'data-[disabled]:cursor-not-allowed data-[disabled]:text-greySolid',
        className,
      )}
      {...props}
    >
      <span className='absolute left-2 flex items-center justify-center'>
        <ItemIndicator>
          <Check className='h-4 w-4' />
        </ItemIndicator>
      </span>

      <ItemText>{children}</ItemText>
    </Item>
  ),
);

SelectItem.displayName = Item.displayName;

export default SelectItem;
