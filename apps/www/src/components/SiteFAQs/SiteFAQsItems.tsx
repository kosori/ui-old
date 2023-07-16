import { Accordion } from '~/components/ui';
import SiteFAQsItem from './SiteFAQsItem';

type Props = {
  faqs: { title: string; description: string }[];
};

const SiteFAQsItems = ({ faqs }: Props) => {
  return (
    <Accordion
      className='w-full space-y-6'
      defaultValue={faqs.map((faq) => faq.title)}
      type='multiple'
    >
      {faqs.map((faq) => (
        <SiteFAQsItem key={faq.title} {...faq} />
      ))}
    </Accordion>
  );
};

export default SiteFAQsItems;
