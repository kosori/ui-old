import { Checkbox, Label } from '~/components/ui';

const Demo = () => {
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms' />
      <Label htmlFor='terms'>Accept terms and conditions</Label>
    </div>
  );
};

export default Demo;
