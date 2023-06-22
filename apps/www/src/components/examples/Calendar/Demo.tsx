import { useState } from 'react';

import { Calendar } from '~/components/ui/Calendar';

const Demo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      fixedWeeks
      className='rounded-md border border-mauveLine'
      mode='single'
      selected={date}
      onSelect={setDate}
    />
  );
};

export default Demo;
