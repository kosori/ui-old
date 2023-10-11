import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';

import { Button } from '~/components/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button/Icons',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'The size of the Button.',
      options: [
        'extra-small-icon',
        'small-icon',
        'medium-icon',
        'large-icon',
        'extra-large-icon',
      ],
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

/** A compact size ideal for conserving space or when a smaller button is needed for specific actions. */
export const ExtraSmallIcon: Story = {
  args: {
    intent: 'primary',
    size: 'extra-small-icon',
    disabled: false,
    children: <Plus />,
  },
};

/** A slightly smaller button size, suitable for secondary actions or when a reduced visual impact is desired. */
export const SmallIcon: Story = {
  args: {
    intent: 'primary',
    size: 'small-icon',
    disabled: false,
    children: <Plus />,
  },
};

/** A normal size for a balanced and standard-sized button suitable for various actions. */
export const MediumIcon: Story = {
  args: {
    intent: 'primary',
    size: 'medium-icon',
    disabled: false,
    children: <Plus />,
  },
};

/** A larger button size, ideal for prominent primary actions or when a more substantial visual presence is needed. */
export const LargeIcon: Story = {
  args: {
    intent: 'primary',
    size: 'large-icon',
    disabled: false,
    children: <Plus />,
  },
};

/** The largest button size, perfect for emphasizing critical primary actions or when maximum visual impact is required. */
export const ExtraLargeIcon: Story = {
  args: {
    intent: 'primary',
    size: 'extra-large-icon',
    disabled: false,
    children: <Plus />,
  },
};
