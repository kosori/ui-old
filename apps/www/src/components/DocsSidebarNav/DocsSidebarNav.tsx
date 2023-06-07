import { useRouter } from 'next/router';

import type { SidebarNavItem } from '~/types';
import DocsSidebarNavItems from './DocsSidebarNavItems';

type Props = {
  items: SidebarNavItem[];
};

const DocsSidebarNav = ({ items }: Props) => {
  const { asPath } = useRouter();

  if (!items.length) {
    return <div />;
  }

  return (
    <div className='w-full'>
      {items.map((item, index) => (
        <div key={`${item.title}-${index}`} className='mb-4'>
          <h4 className='mb-2 text-sm font-medium'>{item.title}</h4>

          {item.items.length && (
            <DocsSidebarNavItems items={item.items} pathname={asPath} />
          )}
        </div>
      ))}
    </div>
  );
};

export default DocsSidebarNav;
