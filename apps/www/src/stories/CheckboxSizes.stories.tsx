import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '~/components/ui/Checkbox';
import { Label } from '~/components/ui/Label';

const meta: Meta<typeof Checkbox> = {
  title: 'Design System/Checkbox/Sizes',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: { type: 'select' },
      defaultValue: { summary: 'square' },
      description: 'Choose the shape',
    },
    size: {
      control: { type: 'select' },
      defaultValue: { summary: 'small' },
      description: 'Choose the size',
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Small: Story = {
  args: {
    shape: 'square',
    size: 'small',
  },
  render: ({ shape, size }) => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms-small' shape={shape} size={size} />
      <Label htmlFor='terms-small'>Accept terms and conditions</Label>
    </div>
  ),
};

export const Medium: Story = {
  args: {
    shape: 'square',
    size: 'medium',
  },
  render: ({ shape, size }) => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms-medium' shape={shape} size={size} />
      <Label htmlFor='terms-medium'>Accept terms and conditions</Label>
    </div>
  ),
};
