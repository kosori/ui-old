import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/Avatar';

const Medium = () => (
  <Avatar size='medium'>
    <AvatarImage alt='@codingcodax' src='https://github.com/codingcodax.png' />
    <AvatarFallback>CC</AvatarFallback>
  </Avatar>
);

export default Medium;
