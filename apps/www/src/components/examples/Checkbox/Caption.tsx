import { Checkbox } from '~/components/ui/Checkbox';
import { Label } from '~/components/ui/Label';

const Caption = () => {
  return (
    <div className='items-top flex space-x-2'>
      <Checkbox id='terms' />
      <div className='space-y-1 leading-4'>
        <Label htmlFor='terms'>Accept terms and conditions</Label>
        <p className='text-mauveText'>
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Caption;
