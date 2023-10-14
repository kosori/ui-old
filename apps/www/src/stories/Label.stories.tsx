import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '~/components/ui/Input';
import { Label } from '~/components/ui/Label';

const meta: Meta<typeof Label> = {
  title: 'Design System/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => (
    <div className='flex flex-col space-y-2'>
      <Label htmlFor='firstName'>First name</Label>
      <Input type='text' id='firstName' defaultValue='Pedro Duarte' />
    </div>
  ),
};
