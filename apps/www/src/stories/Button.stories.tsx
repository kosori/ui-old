import type { Meta, StoryObj } from '@storybook/react';
import { Play, PlusCircle } from 'lucide-react';

import { Button } from '~/components/ui';

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
  render: ({ intent, size, disabled, children }) => (
    <Button disabled={disabled} intent={intent} size={size}>
      <Play />
      <span>{children}</span>
      <PlusCircle />
    </Button>
  ),
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
  render: ({ intent, size, disabled, children }) => (
    <Button disabled={disabled} intent={intent} size={size}>
      <Play />
      <span>{children}</span>
      <PlusCircle />
    </Button>
  ),
};

export const Quaternary: Story = {
  args: {
    intent: 'quaternary',
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
  render: ({ intent, size, disabled, children }) => (
    <Button disabled={disabled} intent={intent} size={size}>
      <Play />
      <span>{children}</span>
      <PlusCircle />
    </Button>
  ),
};

export const ExtraSmall: Story = {
  args: {
    intent: 'primary',
    size: 'extra-small',
    disabled: false,
    children: 'Button',
  },
  render: ({ intent, size, disabled, children }) => (
    <Button disabled={disabled} intent={intent} size={size}>
      <Play />
      <span>{children}</span>
      <PlusCircle />
    </Button>
  ),
};

export const Small: Story = {
  args: {
    intent: 'primary',
    size: 'small',
    disabled: false,
    children: 'Button',
  },
  render: ({ intent, size, disabled, children }) => (
    <Button disabled={disabled} intent={intent} size={size}>
      <Play />
      <span>{children}</span>
      <PlusCircle />
    </Button>
  ),
};

export const Medium: Story = {
  args: {
    intent: 'primary',
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
  render: ({ intent, size, disabled, children }) => (
    <Button disabled={disabled} intent={intent} size={size}>
      <Play />
      <span>{children}</span>
      <PlusCircle />
    </Button>
  ),
};

export const Large: Story = {
  args: {
    intent: 'primary',
    size: 'large',
    disabled: false,
    children: 'Button',
  },
  render: ({ intent, size, disabled, children }) => (
    <Button disabled={disabled} intent={intent} size={size}>
      <Play />
      <span>{children}</span>
      <PlusCircle />
    </Button>
  ),
};

export const ExtraLarge: Story = {
  args: {
    intent: 'primary',
    size: 'extra-large',
    disabled: false,
    children: 'Button',
  },
  render: ({ intent, size, disabled, children }) => (
    <Button disabled={disabled} intent={intent} size={size}>
      <Play />
      <span>{children}</span>
      <PlusCircle />
    </Button>
  ),
};
