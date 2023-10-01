import { ArrowRight, ChevronRight, CircleDot } from 'lucide-react';

import { cn } from '~/utils';

type Props = {
  type?: 'slash' | 'vertical-bar' | 'chevron' | 'arrow' | 'dot';
  className?: string;
};

const BreadcrumbSeparator = ({ type = 'slash', className }: Props) => {
  return (
    <span className={cn('text-grey11', className)}>
      {type === 'slash' && '/'}
      {type === 'vertical-bar' && '|'}
      {type === 'chevron' && <ChevronRight className='h-4 w-4' />}
      {type === 'arrow' && <ArrowRight className='h-4 w-4' />}
      {type === 'dot' && <CircleDot className='h-4 w-4' />}
    </span>
  );
};

export default BreadcrumbSeparator;
