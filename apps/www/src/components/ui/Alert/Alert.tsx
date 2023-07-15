import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '~/utils';

const alertStyles = tv({
  base: cn('relative shadow w-full rounded-xl bg-greyBase border p-4'),
  variants: {
    intent: {
      default: cn('text-greyTextContrast border-greyLine'),
      info: cn('text-infoSolid border-infoLine'),
      success: cn('text-successSolid border-successLine'),
      warning: cn('text-warningSolid border-warningLine'),
      error: cn('text-errorSolid border-errorLine'),
    },
  },
  defaultVariants: {
    intent: 'default',
  },
});

type AlertProps = React.HTMLAttributes<HTMLDivElement>;
type AlertVariants = VariantProps<typeof alertStyles>;
interface Props extends AlertProps, AlertVariants { }

const Alert = forwardRef<HTMLDivElement, Props>(
  ({ className, intent, ...props }, ref) => (
    <div
      ref={ref}
      className={alertStyles({ intent, class: className })}
      role='alert'
      {...props}
    />
  ),
);

Alert.displayName = 'Alert';

export default Alert;
