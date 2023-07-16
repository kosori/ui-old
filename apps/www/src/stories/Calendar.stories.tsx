import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { DayPicker } from 'react-day-picker';

import { Calendar } from '~/components/ui';

const meta: Meta<typeof Calendar> = {
  title: 'Example/Calendar',
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

export const Single: Story = {
  args: {
    fixedWeeks: true,
  },
  render: ({ fixedWeeks }) => <SingleCalendar fixedWeeks={fixedWeeks} />,
};
