import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '~/components/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: {
        type: 'select',
      },
      description: 'Choose the intent:',
    },
    size: {
      control: { type: 'select' },
      description: 'Choose the size:',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled the button',
    },
    children: {
      type: 'string',
      description: 'Write the button text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

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

export const ExtraSmall: Story = {
  args: {
    intent: 'primary',
    size: 'extra-small',
    disabled: false,
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    intent: 'primary',
    size: 'small',
    disabled: false,
    children: 'Button',
  },
};

export const Medium: Story = {
  args: {
    intent: 'primary',
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    intent: 'primary',
    size: 'large',
    disabled: false,
    children: 'Button',
  },
};

export const ExtraLarge: Story = {
  args: {
    intent: 'primary',
    size: 'extra-large',
    disabled: false,
    children: 'Button',
  },
};
