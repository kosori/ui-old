import type { Meta, StoryObj } from '@storybook/react';
import { AlertCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '~/components/ui/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Design System/Alert/Intents',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: { type: 'select' },
      options: ['default', 'info', 'success', 'warning', 'error'],
      defaultValue: { summary: 'default' },
      description: 'The visual style of the Alert.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    intent: 'default',
  },
  render: ({ intent }) => (
    <Alert className='max-w-screen-sm' intent={intent}>
      <AlertTitle>
        <AlertCircle className='mr-2 h-5 w-5' />
        Heads up!
      </AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  args: {
    intent: 'info',
  },
  render: ({ intent }) => (
    <Alert className='max-w-screen-sm' intent={intent}>
      <AlertTitle>
        <AlertCircle className='mr-2 h-5 w-5' />
        Heads up!
      </AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  args: {
    intent: 'success',
  },
  render: ({ intent }) => (
    <Alert className='max-w-screen-sm' intent={intent}>
      <AlertTitle>
        <AlertCircle className='mr-2 h-5 w-5' />
        Heads up!
      </AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  args: {
    intent: 'warning',
  },
  render: ({ intent }) => (
    <Alert className='max-w-screen-sm' intent={intent}>
      <AlertTitle>
        <AlertCircle className='mr-2 h-5 w-5' />
        Heads up!
      </AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Error: Story = {
  args: {
    intent: 'error',
  },
  render: ({ intent }) => (
    <Alert className='max-w-screen-sm' intent={intent}>
      <AlertTitle>
        <AlertCircle className='mr-2 h-5 w-5' />
        Heads up!
      </AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};
