import { useMemo } from 'react';

import { useActiveItem, useMounted } from '~/hooks';
import type { TableOfContents } from '~/types';
import DashboardTableOfContentsTree from './DashboardTableOfContentsTree';

type Props = {
  toc: TableOfContents;
};

const DashboardTableOfContents = ({ toc }: Props) => {
  const itemIds = useMemo(
    () =>
      toc?.items
        ? toc.items
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split('#')[1] || '')
        : [],
    [toc],
  );

  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  if (!toc?.items || !mounted) return null;

  return (
    <div className='space-y-2'>
      <p className='font-medium'>On This Page</p>
      <DashboardTableOfContentsTree activeItem={activeHeading} tree={toc} />
    </div>
  );
};

export default DashboardTableOfContents;
