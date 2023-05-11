import { forwardRef } from 'react';
import { Separator } from '@radix-ui/react-select';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Separator>;
type Props = React.ComponentPropsWithoutRef<typeof Separator>;

const SelectSeparator = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Separator
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-mauveLine', className)}
      {...props}
    />
  ),
);

SelectSeparator.displayName = Separator.displayName;

export default SelectSeparator;
