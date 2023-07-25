import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { DateRange, DayPicker } from 'react-day-picker';

import { Calendar } from '~/components/ui';

const meta: Meta<typeof Calendar> = {
  title: 'Design System/Calendar/Modes',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    fixedWeeks: {
      control: { type: 'boolean' },
      description:
        'Display six weeks per months, regardless the month’s number of weeks.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

const SingleCalendar = ({
  fixedWeeks,
}: React.ComponentProps<typeof DayPicker>) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      className='rounded-2xl border border-greyLine'
      fixedWeeks={fixedWeeks}
      mode='single'
      selected={date}
      onSelect={setDate}
    />
  );
};

const RangeCalendar = ({
  fixedWeeks,
}: React.ComponentProps<typeof DayPicker>) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <Calendar
      className='rounded-2xl border border-greyLine'
      fixedWeeks={fixedWeeks}
      mode='range'
      numberOfMonths={2}
      selected={date}
      onSelect={setDate}
    />
  );
};

export const Single: Story = {
  args: {
    fixedWeeks: true,
  },
  render: ({ fixedWeeks }) => <SingleCalendar fixedWeeks={fixedWeeks} />,
};

export const Range: Story = {
  args: {
    fixedWeeks: true,
  },
  render: ({ fixedWeeks }) => <RangeCalendar fixedWeeks={fixedWeeks} />,
};
