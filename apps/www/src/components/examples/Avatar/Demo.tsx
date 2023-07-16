import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui';

const Demo = () => (
  <Avatar>
    <AvatarImage alt='@codingcodax' src='https://github.com/codingcodax.png' />
    <AvatarFallback>CC</AvatarFallback>
  </Avatar>
);

export default Demo;
