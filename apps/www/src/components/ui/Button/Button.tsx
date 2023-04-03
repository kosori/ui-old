import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '~/utils';

const buttonStyles = tv({
  base: cn(
    'flex w-fit items-center justify-center font-semibold',
    'focus:outline focus:outline-primaryFocusRing focus:outline-2',
    'disabled:cursor-not-allowed',
  ),
  variants: {
    intent: {
      primary: cn(
        'bg-primarySolid rounded-lg text-mauveBase trasition-colors duration-200',
        'hover:bg-primarySolidHover',
        'active:bg-primaryText',
        'disabled:bg-primaryLine',
      ),
      secondary: cn(
        'bg-primaryBg rounded-lg text-primarySolid transition-colors duration-200',
        'hover:bg-primaryBgHover',
        'active:bg-primaryBgActive',
        'disabled:bg-mauveBg disabled:text-mauveSolid',
      ),
      tertiary: cn(
        'bg-mauveBase rounded-lg text-mauveTextContrast border border-mauveBorder transition-colors duration-200',
        'hover:bg-mauveBgSubtle hover:border-mauveBorderHover',
        'active:bg-mauveBg',
        'disabled:bg-mauveBg disabled:text-mauveSolid',
      ),
    },
    size: {
      small: 'px-3 h-9 text-sm',
      medium: 'px-4 h-10 text-sm',
      large: 'px-6 h-12 text-md',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
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
