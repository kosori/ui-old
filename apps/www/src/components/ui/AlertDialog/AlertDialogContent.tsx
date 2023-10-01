'use client';

import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-alert-dialog';

import { cn } from '~/utils';
import AlertDialogOverlay from './AlertDialogOverlay';
import AlertDialogPortal from './AlertDialogPortal';

type Ref = React.ElementRef<typeof Content>;
type Props = React.ComponentPropsWithoutRef<typeof Content>;

const AlertDialogContent = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <Content
        ref={ref}
        className={cn(
          'fixed inset-1/2 z-50 grid h-fit w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-greyLine bg-greyBase p-6 shadow-md duration-200',
          'sm:rounded-lg',
          'md:w-full',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  ),
);

AlertDialogContent.displayName = Content.displayName;

export default AlertDialogContent;
