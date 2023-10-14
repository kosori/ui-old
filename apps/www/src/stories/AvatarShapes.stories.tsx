import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Avatar/Shapes',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: { type: 'select' },
      defaultValue: { summary: 'rounded' },
      options: ['rounded', 'square'],
      description: 'Choose the shape:',
    },
    size: {
      control: { type: 'select' },
      defaultValue: { summary: 'small' },
      options: ['small', 'extra-small', 'medium', 'large', 'extra-large'],
      description: 'Choose the size',
    },
  },
  args: {
    shape: 'round',
    size: 'small',
  },
};

type Story = StoryObj<typeof Avatar>;

export const Rounded: Story = {
  args: {
    shape: 'round',
    size: 'small',
  },
  render: ({ shape, size }) => (
    <Avatar shape={shape} size={size}>
      <AvatarImage
        alt='@codingcodax'
        src='https://github.com/codingcodax.png'
      />
      <AvatarFallback>CC</AvatarFallback>
    </Avatar>
  ),
};

export const Square: Story = {
  args: {
    shape: 'square',
    size: 'small',
  },
  render: ({ shape, size }) => (
    <Avatar shape={shape} size={size}>
      <AvatarImage
        alt='@codingcodax'
        src='https://github.com/codingcodax.png'
      />
      <AvatarFallback>CC</AvatarFallback>
    </Avatar>
  ),
};

export default meta;
