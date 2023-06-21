import { Button } from '~/components/ui/Button';

const Intents = () => {
  return (
    <div className='flex space-x-4'>
      <Button intent='primary'>Button</Button>
      <Button intent='secondary'>Button</Button>
      <Button intent='tertiary'>Button</Button>
      <Button intent='quaternary'>Button</Button>
    </div>
  );
};

export default Intents;
