import { forwardRef } from 'react';
import { Label, type Root } from '@radix-ui/react-label';

import { cn } from '~/utils';
import useFormField from './useFormField';

const FormLabel = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && 'text-errorSolid', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = 'FormLabel';

export default FormLabel;
