import { forwardRef } from 'react';
import { List } from '@radix-ui/react-navigation-menu';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof List>;
type Props = React.ComponentPropsWithoutRef<typeof List>;

const MenubarNavigationList = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <List
      ref={ref}
      className={cn(
        'group flex flex-1 list-none items-center justify-center space-x-1',
        className,
      )}
      {...props}
    />
  ),
);
MenubarNavigationList.displayName = List.displayName;

export default MenubarNavigationList;
