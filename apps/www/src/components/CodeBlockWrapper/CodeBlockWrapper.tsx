import { useState, type HTMLAttributes } from 'react';

import { Button } from '~/components/ui/Button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/components/ui/Collapsible';
import { cn } from '~/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string;
}

const CodeBlockWrapper = ({
  expandButtonTitle = 'View Code',
  className,
  children,
  ...props
}: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className={cn('relative overflow-hidden', className)} {...props}>
        <CollapsibleContent
          forceMount
          className={cn('overflow-hidden', !isOpened && 'max-h-32')}
        >
          <div
            className={cn(
              '[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]',
              !isOpened ? 'inset-x-0 bottom-0 h-12' : 'inset-0',
            )}
          >
            {children}
          </div>
        </CollapsibleContent>

        <div
          className={cn(
            'from-background/30 to-muted/90 absolute flex items-center justify-center bg-gradient-to-b p-2',
            isOpened ? 'inset-x-0 bottom-0 h-12' : 'inset-0',
          )}
        >
          <CollapsibleTrigger asChild>
            <Button intent='secondary' size='extra-small'>
              {isOpened ? 'Collapse' : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  );
};

export default CodeBlockWrapper;
