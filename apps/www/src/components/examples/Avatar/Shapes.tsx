import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui';

const Shapes = () => (
  <div className='flex gap-x-4'>
    <Avatar>
      <AvatarImage
        alt='@codingcodax'
        src='https://github.com/codingcodax.png'
      />
      <AvatarFallback>CC</AvatarFallback>
    </Avatar>

    <Avatar shape='square'>
      <AvatarImage
        alt='@codingcodax'
        src='https://github.com/codingcodax.png'
      />
      <AvatarFallback>CC</AvatarFallback>
    </Avatar>
  </div>
);

export default Shapes;
