import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '~/utils';

const buttonStyles = tv({
  base: cn(
    'flex w-fit items-center justify-center font-medium',
    'focus:outline outline-primary-solid',
  ),
  variants: {
    intent: {},
    size: {},
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;
type ButtonVariants = VariantProps<typeof buttonStyles>;
interface Props extends ButtonProps, ButtonVariants {}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ intent, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonStyles({ intent, size, class: className })}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonStyles };
export type { Props };
