import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, Label } from '~/components/ui';

const meta: Meta<typeof Checkbox> = {
  title: 'Example/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: { type: 'select' },
      description: 'Choose the shape',
      defaultValue: { summary: 'square' },
      options: ['square', 'rounded'],
    },
    size: {
      control: { type: 'select' },
      description: 'Choose the size',
      defaultValue: { summary: 'small' },
      options: ['small', 'medium'],
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    shape: 'square',
    size: 'small',
  },
  render: ({ shape, size }) => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms' shape={shape} size={size} />
      <Label htmlFor='terms'>Accept terms and conditions</Label>
    </div>
  ),
};
