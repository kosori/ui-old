import { forwardRef } from 'react';
import { Item } from '@radix-ui/react-accordion';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Item>;
type Props = React.ComponentPropsWithoutRef<typeof Item>;

const AccordionItem = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      'w-full rounded-lg border border-greyBorder bg-greyBase transition-colors duration-200',
      'focus-within:outline focus-within:outline-primaryFocusRing',
      'hover:border-greyBorderHover',
      'data-[disabled]:border-greyLine',
      'data-[disabled]:hover:border-greyLine',
      className,
    )}
    {...props}
  />
));

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
