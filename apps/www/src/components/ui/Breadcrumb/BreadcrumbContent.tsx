import Link from 'next/link';

import { cn } from '~/utils';

type Props = {
  href: string;
  isActive?: boolean;
  className?: string;
  children: React.ReactNode;
};

const BreadcrumbContent = ({
  href,
  isActive = false,
  className,
  children,
}: Props) => {
  if (isActive) return <span>{children}</span>;

  return (
    <Link
      className={cn(
        'hover:text-primarySolid',
        isActive
          ? cn('text-greyTextContrast', 'hover:text-greyTextContrast')
          : 'text-greyText',
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default BreadcrumbContent;
