'use client';

import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-tabs';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Content>;
type Props = React.ComponentPropsWithoutRef<typeof Content>;

const TabsContent = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <Content
    ref={ref}
    className={cn(
      'mt-2',
      'focus-visible:outline focus-visible:outline-primaryFocusRing',
      className,
    )}
    {...props}
  />
));

TabsContent.displayName = Content.displayName;

export default TabsContent;
