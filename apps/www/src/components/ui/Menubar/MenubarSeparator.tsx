import { forwardRef } from 'react';
import { Separator } from '@radix-ui/react-menubar';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Separator>;
type Props = React.ComponentPropsWithoutRef<typeof Separator>;

const MenubarSeparator = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Separator
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-mauveLine', className)}
      {...props}
    />
  ),
);

MenubarSeparator.displayName = Separator.displayName;

export default Separator;
