import {
  SiteFeature,
  SiteFeatureDescription,
  SiteFeatureTitle,
} from './SiteFeature';

const features = [
  {
    title: 'Accessible',
    description:
      'Components built with Radix UI. Screen reader, RTL and typehead support and keyboard navigation.',
  },
  {
    title: 'Customizable',
    description:
      'We utilize CSS variables for styling and tailwind-variants to have different types and sizes of a component.',
  },
  {
    title: 'Open Source',
    description:
      'You can actively contribute to this project by sharing ideas and reporting bugs.',
  },
  {
    title: 'Fast',
    description:
      'Build applications faster by copying and pasting components, saving valuable development time.',
  },
];

const SiteFeatures = () => {
  return (
    <section className='mx-auto mt-32 grid w-full max-w-screen-xl grid-flow-col gap-x-6'>
      {features.map(({ title, description }) => (
        <SiteFeature key={title}>
          <SiteFeatureTitle>{title}</SiteFeatureTitle>
          <SiteFeatureDescription>{description}</SiteFeatureDescription>
        </SiteFeature>
      ))}
    </section>
  );
};

export default SiteFeatures;
