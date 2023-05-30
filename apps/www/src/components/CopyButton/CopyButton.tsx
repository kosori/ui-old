import { useEffect, useState, type HTMLAttributes } from 'react';
import { Check, Copy } from 'lucide-react';

import { copyToClipboardWithMeta } from '~/helpers';
import type { Event } from '~/types';
import { cn } from '~/utils';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  // src?: string;
  event?: Event['name'];
}

const CopyButton = ({ value, className, event, ...props }: Props) => {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const handleClick = async (value: string, event?: Event['name']) => {
    await copyToClipboardWithMeta(
      value,
      event ? { name: event, properties: { code: value } } : undefined,
    );

    setHasCopied(true);
  };

  return (
    <button
      className={cn(
        'relative z-20 inline-flex h-6 w-6 items-center justify-center rounded-md border bg-mauveBase text-sm font-medium transition-colors',
        'hover:bg-mauveBgHover',
        'focus:outline-none',
        className,
      )}
      onClick={() => handleClick(value, event)}
      {...props}
    >
      <span className='sr-only'>Copy</span>
      {hasCopied ? <Check className='h-3 w-3' /> : <Copy className='h-3 w-3' />}
    </button>
  );
};

export default CopyButton;
