import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '~/components/ui/Label';
import { RadioGroup, RadioGroupItem } from '~/components/ui/RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Design System/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue='comfortable'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='default' id='r1' />
        <Label htmlFor='r1'>Default</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='comfortable' id='r2' />
        <Label htmlFor='r2'>Comfortable</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='compact' id='r3' />
        <Label htmlFor='r3'>Compact</Label>
      </div>
    </RadioGroup>
  ),
};
