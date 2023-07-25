import type { Meta, StoryObj } from '@storybook/react';

import {
  Breadcrumb,
  BreadcrumbContent,
  BreadcrumbSeparator,
} from '~/components/ui';

const meta: Meta<typeof BreadcrumbSeparator> = {
  title: 'Design System/Breadcrumb/Types',
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

export const Slash: Story = {
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

export const VerticalBar: Story = {
  args: {
    type: 'vertical-bar',
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

export const Chevron: Story = {
  args: {
    type: 'chevron',
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

export const Arrow: Story = {
  args: {
    type: 'arrow',
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

export const Dot: Story = {
  args: {
    type: 'dot',
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
