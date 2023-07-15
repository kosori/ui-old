import { forwardRef } from 'react';
import { Indicator, Root } from '@radix-ui/react-progress';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Root>;
type Props = React.ComponentPropsWithoutRef<typeof Root>;

const Progress = forwardRef<Ref, Props>(
  ({ className, value, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(
        'relative h-4 w-full overflow-hidden rounded-full bg-greyBg',
        className,
      )}
      {...props}
    >
      <Indicator
        className='h-full w-full flex-1 bg-greyTextContrast transition-all'
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </Root>
  ),
);

Progress.displayName = Root.displayName;

export default Progress;
