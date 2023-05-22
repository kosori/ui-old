import { forwardRef } from 'react';
import { Indicator, Root } from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Root>;
type Props = React.ComponentPropsWithoutRef<typeof Root>;

const Checkbox = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'group peer h-5 w-5 rounded-md border border-mauveBorder bg-mauveBase outline-none transition-colors duration-200',
      'hover:border-mauveBorderHover',
      'focus-visible:ring-mauveFocusRing focus-visible:ring-4',
      'disabled:cursor-not-allowed disabled:border-0 disabled:bg-mauveLine',
      'data-[state=checked]:border-0 data-[state=checked]:bg-primarySolid',
      'data-[state=checked]:focus-visible:ring-primaryFocusRing',
      'data-[state=checked]:disabled:border-0 data-[state=checked]:disabled:bg-mauveLine',
      className,
    )}
    {...props}
  >
    <Indicator className={cn('flex items-center justify-center')}>
      <Check className='h-4 w-4 text-mauveBase group-disabled:text-mauveSolid' />
    </Indicator>
  </Root>
));

Checkbox.displayName = Root.displayName;

export default Checkbox;
