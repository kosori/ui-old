import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '~/utils';

const buttonStyles = tv({
  base: cn(
    'flex h-fit w-fit items-center justify-center font-semibold outline-none transition-colors duration-200',
    'focus-visible:ring-4',
    'disabled:cursor-not-allowed',
  ),
  variants: {
    intent: {
      primary: cn(
        'bg-primarySolid text-mauveBase',
        'hover:bg-primarySolidHover',
        'focus-visible:ring-primaryFocusRing',
        'disabled:bg-primaryBorder',
      ),
      secondary: cn(
        'bg-primaryBg border border-primaryBorder text-primarySolid',
        'hover:bg-primaryBgHover hover:border-primaryBorderHover',
        'active:bg-primaryBgActive',
        'focus-visible:ring-primaryFocusRing',
        'disabled:bg-primaryBgSubtle disabled:text-primaryLine disabled:border-primaryLine',
      ),
      tertiary: cn(
        'bg-mauveBase text-mauveTextContrast border border-mauveBorder',
        'hover:bg-mauveBgSubtle hover:border-mauveBorderHover',
        'active:bg-mauveBg',
        'focus-visible:ring-mauveFocusRing',
        'disabled:text-mauveSolid disabled:border-mauveLine disabled:bg-mauveBase',
      ),
      quaternary: cn(
        'text-mauveTextContrast',
        'hover:bg-mauveBgHover',
        'active:bg-mauveBgActive',
        'focus-visible:ring-mauveFocusRing',
        'disabled:bg-transparent disabled:text-mauveSolid',
      ),
    },
    size: {
      'extra-small': 'px-2 py-1 text-[10px] leading-4 rounded-md gap-x-1',
      small: 'px-2.5 py-2 text-xs leading-4 rounded-lg gap-x-1.5',
      medium: 'px-3 py-2 text-sm rounded-lg gap-x-2',
      large: 'px-4 py-3 text-md rounded-xl gap-x-2.5',
      'extra-large': 'px-4 py-4 text-lg rounded-xl gap-x-3',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;
type ButtonVariants = VariantProps<typeof buttonStyles>;
interface Props extends ButtonProps, ButtonVariants { }

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
