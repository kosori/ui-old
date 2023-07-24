import Image from 'next/image';
import type { Meta, StoryObj } from '@storybook/react';

import { AspectRatio } from '~/components/ui';

const meta: Meta<typeof AspectRatio> = {
  title: 'Design System/AspectRatio/Ratios',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      description: 'The desired ratio.',
      defaultValue: { summary: 1 },
    },
  },
};

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    ratio: 1,
  },
  render: ({ ratio }) => (
    <AspectRatio ratio={ratio}>
      <Image
        fill
        alt='a plane flying in the sky at sunset'
        className='rounded-2xl object-cover'
        src='https://images.unsplash.com/photo-1642680571569-a7676d19c215?ixlib=rb-4.0.3&ixid=M3wxMjA3'
      />
    </AspectRatio>
  ),
};

export const Widescreen: Story = {
  name: '16:9',
  args: {
    ratio: 16 / 9,
  },
  render: ({ ratio }) => (
    <AspectRatio ratio={ratio}>
      <Image
        fill
        alt='a plane flying in the sky at sunset'
        className='rounded-2xl object-cover'
        src='https://images.unsplash.com/photo-1642680571569-a7676d19c215?ixlib=rb-4.0.3&ixid=M3wxMjA3'
      />
    </AspectRatio>
  ),
};

export const ThreeToTwo: Story = {
  name: '3:2',
  args: {
    ratio: 3 / 2,
  },
  render: ({ ratio }) => (
    <AspectRatio ratio={ratio}>
      <Image
        fill
        alt='a plane flying in the sky at sunset'
        className='rounded-2xl object-cover'
        src='https://images.unsplash.com/photo-1642680571569-a7676d19c215?ixlib=rb-4.0.3&ixid=M3wxMjA3'
      />
    </AspectRatio>
  ),
};

export const FourToThree: Story = {
  name: '4:3',
  args: {
    ratio: 4 / 3,
  },
  render: ({ ratio }) => (
    <AspectRatio ratio={ratio}>
      <Image
        fill
        alt='a plane flying in the sky at sunset'
        className='rounded-2xl object-cover'
        src='https://images.unsplash.com/photo-1642680571569-a7676d19c215?ixlib=rb-4.0.3&ixid=M3wxMjA3'
      />
    </AspectRatio>
  ),
};

export const FiveToFour: Story = {
  name: '5:4',
  args: {
    ratio: 5 / 4,
  },
  render: ({ ratio }) => (
    <AspectRatio ratio={ratio}>
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
