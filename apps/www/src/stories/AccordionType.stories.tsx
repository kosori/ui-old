import type { Meta, StoryObj } from '@storybook/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Design System/Accordion/Type',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      defaultValue: { summary: 'single' },
      description:
        'Determines whether one or multiple items can be opened at the same time.',
    },
    collapsible: {
      if: { arg: 'type', eq: 'single' },
      control: { type: 'boolean' },
      defaultValue: { summary: true },
      description:
        'When type is "single", allows closing content when clicking trigger for an open item.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
  args: {
    type: 'single',
    collapsible: false,
  },
  render: ({
    type,
    collapsible,
  }: {
    type: 'single' | 'multiple';
    collapsible?: boolean;
  }) => (
    <Accordion
      className='grid w-96 gap-4'
      type={type}
      collapsible={collapsible}
    >
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes.It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-2'>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes.It comes with default styles that matches the other components
          aesthetic.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes.It&apos; s animated by default , but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: ({
    type,
    collapsible,
  }: {
    type: 'single' | 'multiple';
    collapsible?: boolean;
  }) => (
    <Accordion
      className='grid w-96 gap-4'
      type={type}
      collapsible={collapsible}
    >
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes.It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-2'>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes.It comes with default styles that matches the other components
          aesthetic.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes.It&apos; s animated by default , but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
