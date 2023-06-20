import { CheckCircle2 } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '~/components/ui/Alert';

const Success = () => {
  return (
    <Alert intent='success'>
      <AlertTitle>
        <CheckCircle2 className='mr-2 h-5 w-5' /> Account registration complete
      </AlertTitle>
      <AlertDescription>
        Congrulations! Your account has been successfully registered. Welcome
        aboard!
      </AlertDescription>
    </Alert>
  );
};

export default Success;
