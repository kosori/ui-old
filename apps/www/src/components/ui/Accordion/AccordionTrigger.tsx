import { forwardRef } from 'react';
import { Header, Trigger } from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Trigger>;
type Props = React.ComponentPropsWithoutRef<typeof Trigger>;

const AccordionTrigger = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => (
    <Header className='flex'>
      <Trigger
        ref={ref}
        className={cn(
          'group flex h-10 flex-1 items-center justify-between border-b border-mauveLine px-4 font-medium outline-none',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className='h-5 w-5 transition-transform ease-in-out group-data-[state=open]:rotate-180' />
      </Trigger>
    </Header>
  ),
);

AccordionTrigger.displayName = 'AccordionTrigger';

export default AccordionTrigger;
