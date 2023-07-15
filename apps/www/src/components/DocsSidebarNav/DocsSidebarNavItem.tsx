import Link from 'next/link';

import type { SidebarNavItem } from '~/types';
import { cn } from '~/utils';

type Props = {
  item: SidebarNavItem;
  pathname: string | null;
};

const DocsSidebarNavItem = ({ item, pathname }: Props) => {
  if (!item.href && item.disabled) {
    return (
      <span
        className={cn(
          'flex w-full cursor-not-allowed items-center rounded-md p-2',
          item.disabled && 'cursor-not-allowed text-greyText',
        )}
      >
        {item.title}
        {item.label && (
          <span
            className={cn(
              'ml-2 rounded-md px-1.5 py-0.5 text-xs no-underline',
              'group-hover:no-underline',
            )}
          >
            {item.label}
          </span>
        )}
      </span>
    );
  }

  return (
    <Link
      className={cn(
        'mouse-pointer relative w-full items-center rounded-md px-5 py-1.5 text-sm transition-colors duration-200',
        'hover:bg-primaryBgHover',
        item.disabled && 'cursor-not-allowed text-greyText',
        pathname?.includes(item.href || '')
          ? cn(
              'bg-primaryBgActive text-greyTextContrast',
              'hover:bg-primaryBgActive',
            )
          : 'text-greyText',
      )}
      href={item.href || '#'}
      rel={item.external ? 'noopener noreferrer' : ''}
      target={item.external ? '_blank' : ''}
    >
      {item.title}
      {item.label && (
        <span
          className={cn(
            'rounded-md bg-greyBg px-1.5 py-0.5 text-greyTextContrast no-underline',
            'group-hover:no-underline',
          )}
        >
          {item.label}
        </span>
      )}
      {pathname?.includes(item.href || '') && (
        <div className='absolute left-2 top-1 z-10 h-6 w-px bg-primarySolid' />
      )}
    </Link>
  );
};

export default DocsSidebarNavItem;
