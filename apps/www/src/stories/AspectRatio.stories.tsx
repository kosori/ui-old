import Image from 'next/image';
import type { Meta, StoryObj } from '@storybook/react';

import { AspectRatio } from '~/components/ui/AspectRatio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Example/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {},
};

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9}>
      <Image
        fill
        alt='a plane flying in the sky at sunset'
        className='rounded-2xl object-cover'
        src='https://images.unsplash.com/photo-1642680571569-a7676d19c215?ixlib=rb-4.0.3&ixid=M3wxMjA3'
      />
    </AspectRatio>
  ),
};

export default meta;
