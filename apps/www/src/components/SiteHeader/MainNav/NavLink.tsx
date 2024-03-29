import Link from 'next/link';

import { cn } from '~/utils';

type Props = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: Props) => {
  return (
    <li>
      <Link
        className={cn(
          'text-md font-medium text-greyText transition-colors duration-200',
          'hover:text-greyTextContrast',
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
