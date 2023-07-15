import { forwardRef } from 'react';
import { Label } from '@radix-ui/react-select';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Label>;
type Props = React.ComponentPropsWithoutRef<typeof Label>;

const SelectLabel = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn(
      'flex h-8 items-center pl-8 pr-2 text-xs font-medium text-greyText',
      className,
    )}
    {...props}
  />
));

SelectLabel.displayName = Label.displayName;

export default SelectLabel;
