import SiteTechStackItems from './SiteTechStackItems';

const SiteTechStack = () => {
  return (
    <div className='mt-52 grid gap-y-10'>
      <div className='space-y-2 text-center'>
        <h2 className='text-3xl font-semibold'>Our tech stack</h2>
        <p className='text-greyText text-lg'>
          The tools that make this possible.
        </p>
      </div>

      <SiteTechStackItems />
    </div>
  );
};

export default SiteTechStack;
