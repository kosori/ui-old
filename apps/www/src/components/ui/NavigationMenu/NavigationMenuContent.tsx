import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-navigation-menu';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Content>;
type Props = React.ComponentPropsWithoutRef<typeof Content>;

const NavigationMenuContent = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Content
      ref={ref}
      className={cn('left-0 top-0 w-full', 'md:absolute md:w-auto', className)}
      {...props}
    />
  ),
);

NavigationMenuContent.displayName = Content.displayName;

export default NavigationMenuContent;
