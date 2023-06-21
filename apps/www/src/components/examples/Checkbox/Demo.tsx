import { Checkbox } from '~/components/ui/Checkbox';
import { Label } from '~/components/ui/Label';

const Demo = () => {
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms' />
      <Label htmlFor='terms'>Accept terms and conditions</Label>
    </div>
  );
};

export default Demo;
