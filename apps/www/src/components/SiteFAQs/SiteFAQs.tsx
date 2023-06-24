import SiteFAQsItems from './SiteFAQsItems';

const faqs = [
  {
    title: 'Which frameworks are supported?',
    description:
      'You can use any framework that supports React. Next.js, Astro, Remix, Gatsby etc.',
  },
  {
    title: 'Is it accessible?',
    description:
      'Yes, uses Radix UI to build the components that adhere to the WAI-ARIA design pattern.',
  },
  {
    title: 'Can I use this in my project?',
    description:
      "Free for personal and commercial use, no attribution required. Let me know what you create, I'm excited to see!",
  },
  {
    title: 'Why tailwind-variants?',
    description:
      'It’s a Tailwind CSS-specific library with essential features missing in others.',
  },
];

const SiteFAQs = () => {
  return (
    <div className='my-52 grid gap-y-10'>
      <div className='space-y-2 text-center'>
        <h2 className='text-3xl font-semibold'>Frequently asked questions</h2>
        <p className='text-lg text-mauveText'>
          Leave your question on the GitHub discussion.
        </p>
      </div>

      <div className='mx-auto grid w-full max-w-4xl gap-6 px-10'>
        <SiteFAQsItems faqs={faqs} />
      </div>
    </div>
  );
};

export default SiteFAQs;
