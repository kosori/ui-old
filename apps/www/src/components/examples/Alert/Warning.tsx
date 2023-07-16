import { AlertTriangle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '~/components/ui';

const Warning = () => {
  return (
    <Alert intent='warning'>
      <AlertTitle>
        <AlertTriangle className='mr-2 h-5 w-5' /> Exceeded storage limit
      </AlertTitle>
      <AlertDescription>
        You have exceeded your storage limit. Delete files to free up space.
      </AlertDescription>
    </Alert>
  );
};

export default Warning;
