import { forwardRef } from 'react';
import { Root, Thumb } from '@radix-ui/react-switch';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '~/utils';

const switchStyles = tv({
  base: cn(
    'peer inline-flex cursor-pointer items-center rounded-full border-2 border-transparent outline-none transition-colors',
    'focus-visible:ring-4',
    'disabled:cursor-not-allowed disabled:bg-greyBgSubtle',
    'data-[state=unchecked]:bg-greyLine',
    'data-[state=checked]:bg-primarySolid',
    'data-[state=unchecked]:focus-visible:ring-greyFocusRing',
    'data-[state=checked]:focus-visible:ring-primaryFocusRing',
  ),
  variants: {
    size: {
      small: cn(
        'h-4 w-7',
        '[&_span]:h-3 [&_span]:w-3',
        '[&_span]:data-[state=checked]:translate-x-3',
      ),
      medium: cn(
        'h-5 w-[34px]',
        '[&_span]:h-4 [&_span]:w-4',
        '[&_span]:data-[state=checked]:translate-x-3.5',
      ),
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

type Ref = React.ElementRef<typeof Root>;
type SwitchProps = React.ComponentPropsWithoutRef<typeof Root>;
type SwitchVariants = VariantProps<typeof switchStyles>;
interface Props extends SwitchProps, SwitchVariants {}

const Switch = forwardRef<Ref, Props>(({ size, className, ...props }, ref) => (
  <Root
    ref={ref}
    className={switchStyles({ size, class: className })}
    {...props}
  >
    <Thumb
      className={cn(
        'pointer-events-none block rounded-full bg-greyBase shadow-lg transition-transform',
        'data-[state=unchecked]:translate-x-0',
      )}
    />
  </Root>
));

Switch.displayName = Root.displayName;

export default Switch;
