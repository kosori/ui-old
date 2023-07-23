import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';

import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/components/ui';
import { cn } from '~/utils';

const meta: Meta<typeof Collapsible> = {
  title: 'Example/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      className='w-[350px] space-y-2'
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div className='flex items-center justify-between space-x-4'>
        <h4 className='text-sm font-medium'>
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button className='p-[9px]' intent='secondary' size='small'>
            <Plus
              className={cn(
                'h-4 w-4 transition-transform duration-200',
                isOpen ? 'rotate-45' : 'rotate-0',
              )}
            />
            <span className='sr-only'>Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className='rounded-xl border border-greyLine px-4 py-2 text-sm'>
        @radix-ui/primitives
      </div>
      <CollapsibleContent className='space-y-2'>
        <div className='rounded-xl border border-greyLine px-4 py-2 text-sm'>
          @radix-ui/colors
        </div>
        <div className='rounded-xl border border-greyLine px-4 py-2 text-sm'>
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export const Default: Story = {
  render: () => <Component />,
};
