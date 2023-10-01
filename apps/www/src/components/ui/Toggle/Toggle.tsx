'use client';

import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-toggle';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '~/utils';

const toggleStyles = tv({
  base: cn(
    'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors duration-200',
    'data-[state=on]:bg-primaryBgActive',
    'hover:bg-primaryBgHover',
    'active:bg-primaryBgActive',
    'focus-visible:outline focus-visible:outline-primaryFocusRing',
    'disabled:cursor-not-allowed disabled:text-greySolid',
  ),
  variants: {
    intent: {
      ghost: cn('disabled:hover:bg-transparent'),
      outline: cn(
        'border border-primaryBorder',
        'border-primaryBorderHover',
        'disabled:border-greyLine disabled:bg-greyBg',
      ),
    },
    size: {
      small: 'h-9 px-2.5',
      medium: 'h-10 px-3',
      large: 'h-12 px-5',
    },
  },
  defaultVariants: {
    intent: 'ghost',
    size: 'medium',
  },
});

type Ref = React.ElementRef<typeof Root>;
type ToggleProps = React.ComponentPropsWithoutRef<typeof Root>;
type ToggleVariants = VariantProps<typeof toggleStyles>;
interface Props extends ToggleProps, ToggleVariants { }

const Toggle = forwardRef<Ref, Props>(
  ({ className, intent, size, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(toggleStyles({ intent, size, className }))}
      {...props}
    />
  ),
);

Toggle.displayName = Root.displayName;

export default Toggle;
