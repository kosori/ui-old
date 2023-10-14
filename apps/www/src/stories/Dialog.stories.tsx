import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '~/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/Dialog';
import { Input } from '~/components/ui/Input';
import { Label } from '~/components/ui/Label';

const meta: Meta<typeof Dialog> = {
  title: 'Design System/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button intent='tertiary'>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4'>
          <div className='grid  gap-2'>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' value='Pedro Duarte' />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='username'>Username</Label>
            <Input id='username' value='@peduarte' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
