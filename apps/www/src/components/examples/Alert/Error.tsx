import { XCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '~/components/ui/Alert';

const Error = () => {
  return (
    <Alert intent='error'>
      <AlertTitle>
        <XCircle className='mr-2 h-5 w-5' /> Connection failed
      </AlertTitle>
      <AlertDescription>
        Unable to establish connection with the server. Please try again later.
      </AlertDescription>
    </Alert>
  );
};

export default Error;
