import { forwardRef } from 'react';

import { cn } from '~/utils';
import useFormField from './useFormField';

const FormDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      className={cn('text-sm text-greyText', className)}
      id={formDescriptionId}
      {...props}
    />
  );
});
FormDescription.displayName = 'FormDescription';

export default FormDescription;
