import { Badge } from '~/components/ui/Badge';

const Intents = () => {
  return (
    <div className='space-x-4'>
      <Badge>Badge</Badge>
      <Badge intent='info'>Badge</Badge>
      <Badge intent='success'>Badge</Badge>
      <Badge intent='warning'>Badge</Badge>
      <Badge intent='danger'>Badge</Badge>
    </div>
  );
};

export default Intents;
