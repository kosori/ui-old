import { forwardRef } from 'react';

import { cn } from '~/utils';

type Ref = HTMLInputElement;
type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<Ref, Props>(({ className, type, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'flex w-full justify-center rounded-lg border border-mauveBorder bg-mauveBase px-4 py-[7px] transition-colors duration-0 placeholder:text-mauvePlaceholderText',
      'file:cursor-pointer file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-mauveTextContrast',
      'hover:border-mauveBorderHover',
      'focus:outline focus:outline-primaryFocusRing',
      'disabled:cursor-not-allowed disabled:border-mauveBorder disabled:bg-mauveBg disabled:text-mauveSolid',
      'file:disabled:cursor-not-allowed file:disabled:text-mauveSolid',
      className,
    )}
    type={type}
    {...props}
  />
));

Input.displayName = 'Input';

export default Input;
