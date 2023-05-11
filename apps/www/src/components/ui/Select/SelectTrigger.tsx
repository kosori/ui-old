import { forwardRef } from 'react';
import { Icon, Trigger } from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Trigger>;
type Props = React.ComponentPropsWithoutRef<typeof Trigger>;

const SelectTrigger = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => (
    <Trigger
      ref={ref}
      className={cn(
        'flex h-10 w-full cursor-pointer items-center justify-between rounded-lg border border-mauveBorder bg-mauveBase px-3 text-sm transition-colors duration-200',
        'placeholder:text-mauvePlaceholderText',
        'focus:outline focus:outline-primaryFocusRing',
        'hover:border-mauveBorderHover',
        'disabled:cursor-not-allowed disabled:bg-mauveBg disabled:text-mauveSolid',
        className,
      )}
      {...props}
    >
      {children}

      <Icon asChild>
        <ChevronDown className='h=4 w-4 fill-mauveText' />
      </Icon>
    </Trigger>
  ),
);

SelectTrigger.displayName = Trigger.displayName;

export default SelectTrigger;
