import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/Accordion';

type Props = {
  title: string;
  description: string;
};

const SiteFAQsItem = ({ title, description }: Props) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{description}</AccordionContent>
    </AccordionItem>
  );
};

export default SiteFAQsItem;
