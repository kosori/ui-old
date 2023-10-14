'use client';

import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-avatar';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '~/utils';

const avatarStyles = tv({
  base: cn('relative flex shrink-0 overflow-hidden'),
  variants: {
    shape: {
      round: 'rounded-full',
      square: '',
    },
    size: {
      'extra-small': 'h-6 w-6',
      small: 'h-8 w-8',
      medium: 'h-10 w-10',
      large: 'h-12 w-12',
      'extra-large': 'h-14 w-14',
    },
  },
  defaultVariants: {
    shape: 'round',
    size: 'small',
  },
  compoundVariants: [
    {
      shape: 'square',
      size: 'extra-small',
      className: 'rounded-md',
    },
    {
      shape: 'square',
      size: 'small',
      className: 'rounded-lg',
    },
    {
      shape: 'square',
      size: 'medium',
      className: 'rounded-xl',
    },
    {
      shape: 'square',
      size: 'large',
      className: 'rounded-2xl',
    },
    {
      shape: 'square',
      size: 'extra-large',
      className: 'rounded-2xl',
    },
  ],
});

type Ref = React.ElementRef<typeof Root>;
type AvatarProps = React.ComponentPropsWithoutRef<typeof Root>;
type AvatarVariants = VariantProps<typeof avatarStyles>;
interface Props extends AvatarProps, AvatarVariants {
  /**
   * The shape of the avatar
   * @default 'round'
   * @see {@link https://dub.sh/XuNhEXJ Avatar Docs} for available options.
   */
  shape?: AvatarVariants['shape'];
  /**
   * The size of the Avatar.
   * @default 'small'
   * @see {@link https://dub.sh/XuNhEXJ Avatar Docs} for available options.
   */
  size?: AvatarVariants['size'];
}

/**
 * Contains all the parts of an avatar
 *
 * @param {object} props - The props for the Avatar component.
 * @param {string} [props.shape='round'] - The shape of the avatar (either 'square' or 'round').
 * @param {string} [props.size='small'] - The size of the avatar (e.g., 'small', 'medium', 'large').
 * @see {@link https://dub.sh/XuNhEXJ Avatar Docs} for further information.
 */

const Avatar = forwardRef<Ref, Props>(
  ({ shape, size, className, ...props }, ref) => (
    <Root
      ref={ref}
      className={avatarStyles({ shape, size, class: className })}
      {...props}
    />
  ),
);

Avatar.displayName = Root.displayName;

export default Avatar;
