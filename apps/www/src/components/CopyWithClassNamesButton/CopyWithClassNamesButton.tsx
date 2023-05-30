import { useCallback, useEffect, useState } from 'react';
import { SiReact, SiTailwindcss } from '@icons-pack/react-simple-icons';
import { DropdownMenuTriggerProps } from '@radix-ui/react-dropdown-menu';
import { Check, Copy } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/DropdownMenu';
import { copyToClipboardWithMeta } from '~/helpers';
import { cn } from '~/utils';

interface Props extends DropdownMenuTriggerProps {
  value: string;
  classNames: string;
  className?: string;
}

const CopyWithClassNamesButton = ({
  value,
  classNames,
  className,
  ...props
}: Props) => {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const handleClick = useCallback(async (value: string) => {
    await copyToClipboardWithMeta(value);
    setHasCopied(true);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'front-medium relative z-20 inline-flex h-6 w-6 items-center justify-center rounded-lg border bg-mauveBase text-sm transition-colors',
          'hover:bg-mauveBgSubtle',
          'focus:outline-none',
          className,
        )}
        {...props}
      >
        {hasCopied ? (
          <Check className='h-3 w-3' />
        ) : (
          <Copy className='h-3 w-3' />
        )}
        <span className='sr-only'>Copy</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => handleClick(value)}>
          <SiReact className='mr-2 h-4 w-4' />
          <span>Component</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleClick(classNames)}>
          <SiTailwindcss className='mr-2 h-4 w-4' />
          <span>className</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CopyWithClassNamesButton;
