import type { Meta, StoryObj } from '@storybook/react';

import {
  Breadcrumb,
  BreadcrumbContent,
  BreadcrumbSeparator,
} from '~/components/ui';

const meta: Meta<typeof BreadcrumbSeparator> = {
  title: 'Example/Breadcrumb',
  component: BreadcrumbSeparator,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      description: 'Choose the type of the separator',
      defaultValue: { summary: 'slash' },
      options: ['slash', 'vertical-bar', 'chevron', 'arrow', 'dot'],
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof BreadcrumbSeparator>;

export const Default: Story = {
  args: {
    type: 'slash',
  },
  render: ({ type }) => (
    <Breadcrumb>
      <BreadcrumbContent href='#'>Docs</BreadcrumbContent>
      <BreadcrumbSeparator type={type} />
      <BreadcrumbContent href='#'>Components</BreadcrumbContent>
      <BreadcrumbSeparator type={type} />
      <BreadcrumbContent isActive href='#'>
        Breadcrumb
      </BreadcrumbContent>
    </Breadcrumb>
  ),
};
