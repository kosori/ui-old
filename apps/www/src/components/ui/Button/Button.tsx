import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '~/utils';

export const buttonStyles = tv({
  base: cn(
    'flex h-fit w-fit items-center justify-center font-semibold outline-none transition-colors duration-200',
    'focus-visible:ring-4',
    'disabled:cursor-not-allowed',
  ),
  variants: {
    intent: {
      primary: cn(
        'bg-primarySolid text-greyBase',
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
        'bg-greyBase text-greyTextContrast border border-greyBorder',
        'hover:bg-greyBgSubtle hover:border-greyBorderHover',
        'active:bg-greyBg',
        'focus-visible:ring-greyFocusRing',
        'disabled:text-greySolid disabled:border-greyLine disabled:bg-greyBase',
      ),
      quaternary: cn(
        'text-greyTextContrast',
        'hover:bg-greyBgHover',
        'active:bg-greyBgActive',
        'focus-visible:ring-greyFocusRing',
        'disabled:bg-transparent disabled:text-greySolid',
      ),
    },
    size: {
      'extra-small': cn(
        'px-2 h-6 text-[10px] leading-4 rounded-md gap-x-1',
        '[&_svg]:h-3 [&_svg]:w-3',
      ),
      'extra-small-icon': cn('h-6 w-6 rounded-md', '[&_svg]:h-3 [&_svg]:w-3'),
      small: cn(
        'px-2.5 h-8 text-xs leading-4 rounded-lg gap-x-1.5',
        '[&_svg]:h-3.5 [&_svg]:w-3.5',
      ),
      'small-icon': cn('h-8 w-8 rounded-lg', '[&_svg]:h-3.5 [&_svg]:w-3.5'),
      medium: cn(
        'px-3 h-10 text-sm rounded-lg gap-x-2',
        '[&_svg]:h-[18px] [&_svg]:w-[18px]',
      ),
      'medium-icon': cn(
        'h-10 w-10 rounded-lg',
        '[&_svg]:h-[18px] [&_svg]:w-[18px]',
      ),
      large: cn(
        'px-4 h-12 text-md rounded-xl gap-x-2.5',
        '[&_svg]:h-5 [&_svg]:w-5',
      ),
      'large-icon': cn('h-12 w-12 rounded-xl', '[&_svg]:h-5 [&_svg]:w-5'),
      'extra-large': cn(
        'px-4 h-[60px] text-lg rounded-xl gap-x-3',
        '[&_svg]:h-6 [&_svg]:w-6',
      ),
      'extra-large-icon': cn(
        'h-[60px] w-[60px] rounded-xl',
        '[&_svg]:h-6 [&_svg]:w-6',
      ),
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;
type ButtonVariants = VariantProps<typeof buttonStyles>;
export interface Props extends ButtonProps {
  /** Change the visual style of the Button */
  intent?: ButtonVariants['intent'];
  /** Change the size of the Button */
  size?: ButtonVariants['size'];
}

/**
 * Displays a button or a component that looks like a button.
 * @param {string} [intent='primary'] - Change the visul style of the Button.
 * @param {string} [size='medium'] - Change the size of the BUtton.
 * @see {@link https://dub.sh/XuNhEXJ Button Docs} for further information.
 */
export const Button = forwardRef<HTMLButtonElement, Props>(
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
