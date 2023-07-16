import { Checkbox, Label } from '~/components/ui';

const Caption = () => {
  return (
    <div className='space-y-2'>
      <div className='flex items-center space-x-2'>
        <Checkbox id='terms' />
        <Label htmlFor='terms'>Accept terms and conditions</Label>
      </div>

      <div className='flex items-center space-x-2'>
        <Checkbox id='terms-2' shape='rounded' />
        <Label htmlFor='terms-2'>Accept terms and conditions</Label>
      </div>
    </div>
  );
};

export default Caption;
