import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/Avatar';

const ExtraSmall = () => (
  <Avatar size='extra-small'>
    <AvatarImage alt='@codingcodax' src='https://github.com/codingcodax.png' />
    <AvatarFallback>CC</AvatarFallback>
  </Avatar>
);

export default ExtraSmall;
