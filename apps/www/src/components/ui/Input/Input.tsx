import { forwardRef } from 'react';

import { cn } from '~/utils';

type Ref = HTMLInputElement;
type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<Ref, Props>(({ className, type, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'flex w-full justify-center rounded-lg border border-greyBorder bg-greyBase px-4 py-[7px] transition-colors duration-200 placeholder:text-greyPlaceholderText',
      'file:cursor-pointer file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-greyTextContrast',
      'hover:border-greyBorderHover',
      'focus:outline focus:outline-primaryFocusRing',
      'disabled:cursor-not-allowed disabled:border-greyBorder disabled:bg-greyBg disabled:text-greySolid',
      'file:disabled:cursor-not-allowed file:disabled:text-greySolid',
      className,
    )}
    type={type}
    {...props}
  />
));

Input.displayName = 'Input';

export default Input;
