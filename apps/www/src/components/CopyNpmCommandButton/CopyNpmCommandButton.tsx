import { useCallback, useEffect, useState } from 'react';
import { SiNpm, SiPnpm, SiYarn } from '@icons-pack/react-simple-icons';
import type { DropdownMenuTriggerProps } from '@radix-ui/react-dropdown-menu';
import { Check, Copy } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui';
import { copyToClipboardWithMeta } from '~/helpers';
import type { NpmCommands } from '~/types';
import { cn } from '~/utils';

interface Props extends DropdownMenuTriggerProps {
  commands: Required<NpmCommands>;
}

const CopyNpmCommandButton = ({ commands, className, ...props }: Props) => {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const handleClick = useCallback(
    async (value: string, pm: 'npm' | 'pnpm' | 'yarn') => {
      await copyToClipboardWithMeta(value, {
        name: 'copy_npm_command',
        properties: { command: value, pm },
      });
      setHasCopied(true);
    },
    [],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn('', className)} {...props}>
        {hasCopied ? (
          <Check className='h-3 w-3' />
        ) : (
          <Copy className='h-3 w-3' />
        )}
        <span className='sr-only'>Copy</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          onClick={() => handleClick(commands.__npmCommand__, 'npm')}
        >
          <SiNpm className='mr-2 h-4 w-4' />
          <span>npm</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => handleClick(commands.__yarnCommand__, 'npm')}
        >
          <SiYarn className='mr-2 h-4 w-4' />
          <span>yarn</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => handleClick(commands.__pnpmCommand__, 'npm')}
        >
          <SiPnpm className='mr-2 h-4 w-4' />
          <span>pnpm</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CopyNpmCommandButton;
