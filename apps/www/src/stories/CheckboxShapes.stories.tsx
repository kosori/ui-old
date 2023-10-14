import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '~/components/ui/Checkbox';
import { Label } from '~/components/ui/Label';

const meta: Meta<typeof Checkbox> = {
  title: 'Design System/Checkbox/Shapes',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: { type: 'select' },
      description: 'Choose the shape',
      defaultValue: { summary: 'square' },
    },
    size: {
      control: { type: 'select' },
      description: 'Choose the size',
      defaultValue: { summary: 'small' },
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Square: Story = {
  args: {
    shape: 'square',
    size: 'small',
  },
  render: ({ shape, size }) => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms-square' shape={shape} size={size} />
      <Label htmlFor='terms-square'>Accept terms and conditions</Label>
    </div>
  ),
};

export const Rounded: Story = {
  args: {
    shape: 'round',
    size: 'small',
  },
  render: ({ shape, size }) => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms-round' shape={shape} size={size} />
      <Label htmlFor='terms-round'>Accept terms and conditions</Label>
    </div>
  ),
};
