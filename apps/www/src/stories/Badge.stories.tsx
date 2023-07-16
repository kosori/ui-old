import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '~/components/ui';

const meta: Meta<typeof Badge> = {
  title: 'Example/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: { type: 'select' },
      description: 'Choose the intent:',
    },
    children: {
      type: 'string',
      description: 'Write the badge text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    intent: 'default',
    children: 'Badge',
  },
};

export const Info: Story = {
  args: {
    intent: 'info',
    children: 'Badge',
  },
};

export const Success: Story = {
  args: {
    intent: 'success',
    children: 'Badge',
  },
};

export const Warning: Story = {
  args: {
    intent: 'warning',
    children: 'Badge',
  },
};

export const Danger: Story = {
  args: {
    intent: 'danger',
    children: 'Badge',
  },
};
