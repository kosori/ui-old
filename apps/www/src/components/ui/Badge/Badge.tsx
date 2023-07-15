import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '~/utils';

const badgeStyles = tv({
  base: cn(
    'inline-flex select-none text-greyBase items-center rounded-full px-2.5 py-1 text-xs font-semibold h-fit',
  ),
  variants: {
    intent: {
      default: 'bg-greyTextContrast',
      info: 'bg-blue9',
      success: 'bg-successSolid',
      warning: 'bg-warningSolid text-greyTextContrast dark:text-greyBase',
      danger: 'bg-dangerSolid',
    },
  },
  defaultVariants: {
    intent: 'default',
  },
});

type BadgeProps = React.ComponentPropsWithoutRef<'div'>;
type BadgeVariants = VariantProps<typeof badgeStyles>;
interface Props extends BadgeProps, BadgeVariants { }

const Badge = forwardRef<HTMLDivElement, Props>(
  ({ intent, className, ...props }, ref) => (
    <div
      ref={ref}
      className={badgeStyles({ intent, class: className })}
      {...props}
    />
  ),
);

Badge.displayName = 'Badge';

export default Badge;
