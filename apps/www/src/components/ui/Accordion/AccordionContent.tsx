import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-accordion';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Content>;
type Props = React.ComponentPropsWithoutRef<typeof Content>;

const AccordionContent = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => (
    <Content
      ref={ref}
      className={cn(
        'overflow-hidden text-mauveText',
        'data-[disabled]:text-mauveSolid',
        'data-[state=closed]:animate-accordion-up',
        'data-[state=open]:animate-accordion-down',
        className,
      )}
      {...props}
    >
      <div className='px-4 pb-2'>{children}</div>
    </Content>
  ),
);

AccordionContent.displayName = 'AccordionContent';

export default AccordionContent;
