import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea } from '~/components/ui/ScrollArea';
import { Separator } from '~/components/ui/Separator';

const meta: Meta<typeof ScrollArea> = {
  title: 'Design System/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <ScrollArea className='h-72 w-48 rounded-lg border border-greyLine'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className='text-sm'>
              {tag}
            </div>
            <Separator className='my-2' />
          </>
        ))}
      </div>
    </ScrollArea>
  ),
};
