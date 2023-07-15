import type { SidebarNavItem } from '~/types';
import DocsSidebarNavItem from './DocsSidebarNavItem';

type Props = {
  items: SidebarNavItem[];
  pathname: string | null;
};

const DocsSidebarNavItems = ({ items, pathname }: Props) => {
  return (
    <div className='relative grid grid-flow-row gap-0.5 pr-2'>
      {items.map((item, index) => (
        <DocsSidebarNavItem
          key={`${item}-${index}`}
          item={item}
          pathname={pathname}
        />
      ))}

      <div className='absolute left-2 top-0 h-full w-px bg-greyLine' />
    </div>
  );
};

export default DocsSidebarNavItems;
