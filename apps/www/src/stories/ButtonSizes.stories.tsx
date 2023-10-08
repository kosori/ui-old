import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '~/components/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button/Sizes',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'The size of the Button.',
      options: ['extra-small', 'small', 'medium', 'large', 'extra-large'],
    },
    intent: {
      description: 'The visual style of the Button.',
      options: ['primary', 'secondary', 'tertiary', 'quaternary'],
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the Button is disabled.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/** The default size for a balanced and standard-sized button suitable for various actions. */
export const Medium: Story = {
  args: {
    intent: 'primary',
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
};

/** A compact size ideal for conserving space or when a smaller button is needed for specific actions. */
export const ExtraSmall: Story = {
  args: {
    intent: 'primary',
    size: 'extra-small',
    disabled: false,
    children: 'Button',
  },
};

/** A slightly smaller button size, suitable for secondary actions or when a reduced visual impact is desired. */
export const Small: Story = {
  args: {
    intent: 'primary',
    size: 'small',
    disabled: false,
    children: 'Button',
  },
};

/** A larger button size, ideal for prominent primary actions or when a more substantial visual presence is needed. */
export const Large: Story = {
  args: {
    intent: 'primary',
    size: 'large',
    disabled: false,
    children: 'Button',
  },
};

/** The largest button size, perfect for emphasizing critical primary actions or when maximum visual impact is required. */
export const ExtraLarge: Story = {
  args: {
    intent: 'primary',
    size: 'extra-large',
    disabled: false,
    children: 'Button',
  },
};
