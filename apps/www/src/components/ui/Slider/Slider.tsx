'use client';

import { forwardRef } from 'react';
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Root>;
type Props = React.ComponentPropsWithoutRef<typeof Root>;

const Slider = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className,
    )}
    {...props}
  >
    <Track className='relative h-2 w-full grow cursor-pointer overflow-hidden rounded-full bg-greyBg'>
      <Range className='absolute h-full bg-primarySolid' />
    </Track>

    <Thumb
      className={cn(
        'block h-5 w-5 cursor-pointer rounded-full border-2 border-primarySolid bg-greyBase shadow-md transition-colors',
        'focus-visible:outline focus-visible:outline-primaryFocusRing',
        'disabled:cursor-not-allowed disabled:bg-greySolid',
      )}
    />
  </Root>
));

Slider.displayName = Root.displayName;

export default Slider;
