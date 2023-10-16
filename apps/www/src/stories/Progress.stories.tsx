import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from '~/components/ui/Progress';

const meta: Meta<typeof Progress> = {
  title: 'Design System/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: () => {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);

      return clearTimeout(timer);
    }, []);

    return <Progress className='h-4 w-80' value={progress} />;
  },
};
