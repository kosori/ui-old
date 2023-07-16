import { Moon, Sun, Wand } from 'lucide-react';
import { useTheme } from 'next-themes';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui';
import { cn } from '~/utils';

const ToggleTheme = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='p-[11px]' intent='tertiary'>
          <Sun
            className={cn(
              'h-[18px] w-[18px] rotate-0 scale-100 transition-all duration-500 ease-out',
              'dark:rotate-90 dark:scale-0',
            )}
          />
          <Moon
            className={cn(
              'absolute h-[18px] w-[18px] rotate-90 scale-0 transition-all duration-500 ease-out',
              'dark:rotate-0 dark:scale-100',
            )}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className='mr-2 h-4 w-4' />
          <span>Light</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className='mr-2 h-4 w-4' />
          <span>Dark</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Wand className='mr-2 h-4 w-4' />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToggleTheme;
