import { forwardRef } from 'react';
import { CheckboxItem, ItemIndicator } from '@radix-ui/react-menubar';
import { Check } from 'lucide-react';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof CheckboxItem>;
type Props = React.ComponentPropsWithoutRef<typeof CheckboxItem>;

const MenubarCheckboxItem = forwardRef<Ref, Props>(
  ({ className, children, checked, ...props }, ref) => (
    <CheckboxItem
      ref={ref}
      checked={checked}
      className={cn(
        'group relative flex h-8 select-none items-center rounded-md pl-8 pr-2 text-sm outline-none transition-colors duration-200',
        'focus:bg-primaryBgHover',
        'active:bg-primaryBgActive',
        'data-[disabled]:cursor-not-allowed data-[disabled]:text-mauveSolid',
        className,
      )}
      {...props}
    >
      <span className='absolute left-2 flex items-center justify-center'>
        <ItemIndicator>
          <Check className='h-4 w-4' />
        </ItemIndicator>
      </span>
      {children}
    </CheckboxItem>
  ),
);

MenubarCheckboxItem.displayName = CheckboxItem.displayName;

export default MenubarCheckboxItem;
