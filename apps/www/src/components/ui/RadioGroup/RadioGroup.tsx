import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-radio-group';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Root>;
type Props = React.ComponentPropsWithoutRef<typeof Root>;

const RadioGroup = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <Root ref={ref} className={cn('grid gap-2', className)} {...props} />
));

RadioGroup.displayName = Root.displayName;

export default RadioGroup;
