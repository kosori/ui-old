import { AlertCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '~/components/ui/Alert';

const Demo = () => {
  return (
    <Alert>
      <AlertTitle>
        <AlertCircle className='mr-2 h-5 w-5' /> Heads up!
      </AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
};

export default Demo;
