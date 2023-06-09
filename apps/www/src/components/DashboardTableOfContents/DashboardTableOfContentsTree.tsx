import Link from 'next/link';

import { type TableOfContents } from '~/types';
import { cn } from '~/utils';

type Props = {
  tree: TableOfContents;
  level?: number;
  activeItem?: string;
};

const DashboardTableOfContentsTree = ({
  tree,
  level = 1,
  activeItem,
}: Props) => {
  if (tree?.items?.length && level < 3)
    return (
      <ul className={cn('m-0 list-none', { 'pl-3': level !== 1 })}>
        {tree.items.map((item, index) => (
          <li key={`${item.title}-${index}`} className='mt-0 pt-2'>
            <Link
              className={cn(
                'inline-block no-underline transition-colors',
                'hover:text-mauveTextContrast',
                item.url === `#${activeItem}`
                  ? 'text-mauveTextContrast'
                  : 'text-mauveText',
              )}
              href={item.url}
            >
              {item.title}
            </Link>

            {item.items?.length && (
              <DashboardTableOfContentsTree
                activeItem={activeItem}
                level={level + 1}
                tree={item}
              />
            )}
          </li>
        ))}
      </ul>
    );

  return null;
};

export default DashboardTableOfContentsTree;
