import { forwardRef } from 'react';
import { Indicator, Root } from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '~/utils';

const checkboxStyles = tv({
  base: cn(
    'group peer border border-mauveBorder bg-mauveBase outline-none transition-colors duration-200',
    'hover:border-mauveBorderHover',
    'focus-visible:ring-4 focus-visible:ring-mauveFocusRing',
    'disabled:cursor-not-allowed disabled:border-0 disabled:bg-mauveLine',
    'data-[state=checked]:border-0 data-[state=checked]:bg-primarySolid',
    'data-[state=checked]:focus-visible:ring-primaryFocusRing',
    'data-[state=checked]:disabled:border-0 data-[state=checked]:disabled:bg-mauveLine',
  ),
  variants: {
    shape: {
      square: 'rounded-md',
      round: 'rounded-full',
    },
    size: {
      small: 'h-4 w-4 p-[2px]',
      medium: 'h-[18px] w-[18px] p-[2px]',
    },
  },
  defaultVariants: {
    shape: 'square',
    size: 'small',
  },
});

type Ref = React.ElementRef<typeof Root>;
type CheckboxProps = React.ComponentPropsWithoutRef<typeof Root>;
type CheckboxVariants = VariantProps<typeof checkboxStyles>;
interface Props extends CheckboxProps, CheckboxVariants {}

const Checkbox = forwardRef<Ref, Props>(
  ({ shape, size, className, ...props }, ref) => (
    <Root
      ref={ref}
      className={checkboxStyles({ shape, size, class: className })}
      {...props}
    >
      <Indicator className={cn('flex items-center justify-center')}>
        <Check className='h-full w-full text-mauveBase group-disabled:text-mauveSolid' />
      </Indicator>
    </Root>
  ),
);

Checkbox.displayName = Root.displayName;

export default Checkbox;
