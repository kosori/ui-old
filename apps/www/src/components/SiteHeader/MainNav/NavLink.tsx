import Link from 'next/link';
import { useRouter } from 'next/router';

import { cn } from '~/utils';

type Props = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: Props) => {
  const { asPath } = useRouter();
  const isActive = asPath.includes(href);

  return (
    <li>
      <Link
        className={cn(
          'transition-colors duration-200 hover:text-mauveText',
          isActive ? 'hover:primarySolid font-medium text-primarySolid' : '',
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
