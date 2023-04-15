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
      'peer h-4 w-4 rounded-[4px] border border-mauveBorder bg-mauveBase transition-colors duration-200',
      'hover:border-mauveBorderHover',
      'focus:outline focus:outline-primaryFocusRing',
      'disabled:cursor-not-allowed disabled:border-mauveLine disabled:bg-mauveBg',
      'data-[state=checked]:border-primaryBorder data-[state=checked]:bg-primaryBg',
      'data-[state=checked]:hover:border-primaryBorderHover',
      className,
    )}
    {...props}
  >
    <Indicator className={cn('flex items-center justify-center')}>
      <Check className='h-4 w-4 text-primarySolid' />
    </Indicator>
  </Root>
));

Checkbox.displayName = Root.displayName;

export default Checkbox;
