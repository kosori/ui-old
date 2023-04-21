import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-label';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Root>;
type Props = React.ComponentPropsWithoutRef<typeof Root>;

const Label = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'text-sm font-medium',
      'peer-disabled:cursor-not-allowed peer-disabled:text-mauveSolid',
      className,
    )}
    {...props}
  />
));

Label.displayName = Label.displayName;

export default Label;
