import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-label';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Root>;
type Props = React.ComponentPropsWithoutRef<typeof Root>;

const Label = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'text-md font-medium',
      'peer-disabled:cursor-not-allowed peer-disabled:text-greySolid',
      className,
    )}
    {...props}
  />
));

Label.displayName = Label.displayName;

export default Label;
