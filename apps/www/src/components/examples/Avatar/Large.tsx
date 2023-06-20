import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/Avatar';

const Large = () => (
  <Avatar size='large'>
    <AvatarImage alt='@codingcodax' src='https://github.com/codingcodax.png' />
    <AvatarFallback>CC</AvatarFallback>
  </Avatar>
);

export default Large;
