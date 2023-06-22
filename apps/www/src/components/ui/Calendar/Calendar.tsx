import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { buttonStyles } from '~/components/ui/Button';
import { cn } from '~/utils';

type Props = React.ComponentProps<typeof DayPicker>;

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: Props) => {
  return (
    <DayPicker
      className={cn('w-fit', className)}
      classNames={{
        month: 'space-y-0',
        caption:
          'h-[72px] flex justify-center border-b border-mauveLine relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'flex items-center',
        nav_button_previous: 'absolute left-4',
        nav_button_next: 'absolute right-4',
        nav_button: cn(
          buttonStyles({ intent: 'tertiary', size: 'medium' }),
          'p-[11px]',
        ),
        table: 'w-full px-4 inline-block',
        head_row: 'flex',
        head_cell:
          'text-mauveText flex items-center justify-center w-10 h-9 font-normal text-sm',
        row: 'flex w-full',
        cell: cn(
          '[&:has([aria-selected])]:bg-primarySolid',
          'first:[&:has([aria-selected])]:rounded-l-md',
          'last:[&:has([aria-selected])]:rounded-r-md',
          'focus-within:relative focus-within:z-20',
        ),
        day: cn(
          buttonStyles({ intent: 'quaternary', class: 'h-9 w-10' }),
          'aria-selected:opacity-100',
        ),
        months: cn(
          'flex flex-col divide-y divide-mauveBorder',
          'sm:flex-row sm:divide-x sm:divide-y-0',
        ),
        day_selected: cn(
          buttonStyles({ intent: 'primary', class: 'h-9 w-10' }),
          '!text-mauveBase',
        ),
        day_today: buttonStyles({ intent: 'secondary', class: 'h-9 w-10' }),
        day_outside: 'text-mauveText opacity-50',
        day_disabled: 'text-mauveText opacity-50',
        day_range_middle:
          'aria-selected:bg-primarySolid aria-selected:mauveBase',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className='h-4 w-4' {...props} />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className='h-4 w-4' {...props} />
        ),
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
};

export default Calendar;
