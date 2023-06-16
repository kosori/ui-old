import {
  Lucide,
  RadixUI,
  TailwindCSS,
  TailwindVariants,
} from '~/components/icons';
import {
  SiteTechStackItem,
  SiteTechStackItemDescription,
  SiteTechStackItemTitle,
} from './SiteTechStackItem';

const items = [
  {
    icon: <RadixUI />,
    title: 'Radix UI',
    description: 'Accessible components for exceptional design systems.',
  },
  {
    icon: <TailwindCSS />,
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework for web development.',
  },
  {
    icon: <TailwindVariants />,
    title: 'Tailwind Variants',
    description: 'Tailwind combined with a first-class variant API.',
  },
  {
    icon: <Lucide />,
    title: 'Lucide Icons',
    description: 'Beautiful & consistent icon toolkit.',
  },
];

const SiteTechStackItems = () => {
  return (
    <div className='mx-auto grid w-full max-w-screen-lg grid-flow-col gap-x-6'>
      {items.map(({ icon, title, description }) => (
        <SiteTechStackItem key={title}>
          <div className='h-12 w-12'>{icon}</div>
          <SiteTechStackItemTitle>{title}</SiteTechStackItemTitle>
          <SiteTechStackItemDescription>
            {description}
          </SiteTechStackItemDescription>
        </SiteTechStackItem>
      ))}
    </div>
  );
};

export default SiteTechStackItems;
