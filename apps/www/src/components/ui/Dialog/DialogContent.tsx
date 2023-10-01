'use client';

import { forwardRef } from 'react';
import { Close, Content } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '~/utils';
import DialogOverlay from './DialogOverlay';
import DialogPortal from './DialogPortal';

type Ref = React.ElementRef<typeof Content>;
type Props = React.ComponentPropsWithoutRef<typeof Content>;

const DialogContent = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />

      <Content
        ref={ref}
        className={cn(
          'fixed z-50 grid w-full gap-8 border border-greyLine bg-greyBase p-6 shadow-lg',
          'sm:max-w-lg sm:rounded-lg',
          className,
        )}
        {...props}
      >
        {children}

        <Close
          className={cn(
            'absolute right-4 top-4 rounded ring-offset-greyBg transition-opacity',
            'focus:outline focus:outline-primaryFocusRing',
            'disabled:cursor-not-allowed disabled:text-greyText',
          )}
        >
          <X className='h-4 w-4' />
          <span className='sr-only'>Close</span>
        </Close>
      </Content>
    </DialogPortal>
  ),
);

DialogContent.displayName = Content.displayName;

export default DialogContent;
