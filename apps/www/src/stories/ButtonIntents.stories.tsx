import type { Meta, StoryOb } from '@storybook/react';

import { Button } from '~/components/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button/Intents',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'danger'],
      },
      size: {
        control: {
          type: 'select',
          options: ['extra-small', 'small', 'medium', 'large', 'extra-large'],
        },
      },
      disabled: {
        control: {
          type: 'boolean',
        },
      },
    },
  },
};

export default meta;

type Story = StoryOb<typeof meta>;

export const Primary: Story = {
  args: {
    intent: 'primary',
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    intent: 'tertiary',
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
};

export const Quaternary: Story = {
  args: {
    intent: 'quaternary',
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
};
