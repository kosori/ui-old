import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/Avatar';

const ExtraLarge = () => (
  <Avatar size='extra-large'>
    <AvatarImage alt='@codingcodax' src='https://github.com/codingcodax.png' />
    <AvatarFallback>CC</AvatarFallback>
  </Avatar>
);

export default ExtraLarge;
