import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/Avatar';

const Square = () => (
  <Avatar shape='square'>
    <AvatarImage alt='@codingcodax' src='https://github.com/codingcodax.png' />
    <AvatarFallback>CC</AvatarFallback>
  </Avatar>
);

export default Square;
