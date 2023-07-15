import { forwardRef } from 'react';
import { List } from '@radix-ui/react-tabs';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof List>;
type Props = React.ComponentPropsWithoutRef<typeof List>;

const TabsList = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <List
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-greyBg p-1 text-greyText',
      className,
    )}
    {...props}
  />
));

TabsList.displayName = List.displayName;

export default TabsList;
