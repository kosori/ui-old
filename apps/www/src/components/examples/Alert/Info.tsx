import { Megaphone } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '~/components/ui';

const Info = () => {
  return (
    <Alert intent='info'>
      <AlertTitle>
        <Megaphone className='mr-2 h-5 w-5' /> Account verification needed
      </AlertTitle>
      <AlertDescription>
        Verify your account to unlock full access and benefits.
      </AlertDescription>
    </Alert>
  );
};

export default Info;
