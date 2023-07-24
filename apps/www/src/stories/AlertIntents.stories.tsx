import type { Meta, StoryObj } from '@storybook/react';
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Megaphone,
  XCircle,
} from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '~/components/ui';

const meta: Meta<typeof Alert> = {
  title: 'Design System/Alert/Intents',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: { type: 'select' },
      description: 'Choose the intent:',
      defaultValue: { summary: 'default' },
      options: ['default', 'info', 'success', 'warning', 'error'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    intent: 'default',
  },
  render: ({ intent }) => (
    <Alert className='max-w-screen-sm' intent={intent}>
      <AlertTitle>
        <AlertCircle className='mr-2 h-5 w-5' /> Heads up!
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
        <Megaphone className='mr-2 h-5 w-5' /> Account verification needed
      </AlertTitle>
      <AlertDescription>
        Verify your account to unlock full access and benefits.
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
        <CheckCircle2 className='mr-2 h-5 w-5' /> Account registration complete
      </AlertTitle>
      <AlertDescription>
        Congrulations! Your account has been successfully registered. Welcome
        aboard!
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
        <AlertTriangle className='mr-2 h-5 w-5' /> Exceeded storage limit
      </AlertTitle>
      <AlertDescription>
        You have exceeded your storage limit. Delete files to free up space.
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
        <XCircle className='mr-2 h-5 w-5' /> Connection failed
      </AlertTitle>
      <AlertDescription>
        Unable to establish connection with the server. Please try again later.
      </AlertDescription>
    </Alert>
  ),
};
