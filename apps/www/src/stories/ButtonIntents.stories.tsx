import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '~/components/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button/Intents',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      description: 'The visual style of the Button.',
      options: ['primary', 'secondary', 'tertiary', 'quaternary'],
    },
    size: {
      description: 'The size of the Button.',
      options: ['extra-small', 'small', 'medium', 'large', 'extra-large'],
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the Button is disabled.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/** The default button style for key actions. */
export const Primary: Story = {
  args: {
    intent: 'primary',
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
};

/** A subdued button style for secondary actions. */
export const Secondary: Story = {
  args: {
    intent: 'secondary',
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
};

/** A minimalistic button style for tertiary actions. */
export const Tertiary: Story = {
  args: {
    intent: 'tertiary',
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
};

/** An ultra-minimalistic button style for quaternary actions. */
export const Quaternary: Story = {
  args: {
    intent: 'quaternary',
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
};
