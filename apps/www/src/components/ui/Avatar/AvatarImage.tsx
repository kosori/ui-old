'use client';

import { forwardRef } from 'react';
import { Image } from '@radix-ui/react-avatar';

import { cn } from '~/utils';

type Ref = React.ElementRef<typeof Image>;
type Props = React.ComponentPropsWithoutRef<typeof Image>;

const AvatarImage = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));

AvatarImage.displayName = Image.displayName;

export default AvatarImage;
