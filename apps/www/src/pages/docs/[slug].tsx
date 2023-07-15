/* eslint-disable react/prop-types */
import { type GetStaticProps, type NextPage } from 'next';
import Link from 'next/link';
import { allDocs, type Doc } from 'contentlayer/generated';

import {
  Breadcrumb,
  BreadcrumbContent,
  BreadcrumbSeparator,
} from '~/components/ui/Breadcrumb';
import { ScrollArea } from '~/components/ui/ScrollArea';
import { DashboardTableOfContents, DocsSidebarNav, Mdx } from '~/components';
import { docsConfig } from '~/config';
import { getTableOfContents } from '~/helpers';
import type { TocItems } from '~/types';
import { cn } from '~/utils';

export const getStaticPaths = () => {
  const paths = allDocs.map((doc) => ({
    params: {
      slug: doc.slugAsParams,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ doc?: Doc }> = async (
  context,
) => {
  const slug = context.params?.slug as string;
  const doc = allDocs.find((doc) => doc.slugAsParams === slug) as Doc;
  const toc = await getTableOfContents(doc.body.raw);

  return { props: { doc, toc } };
};

type Props = {
  doc: Doc;
  toc: TocItems;
};

const Docs: NextPage<Props> = ({ doc, toc }) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl flex-1',
        'md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6',
        'lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10',
      )}
    >
      <aside
        className={cn(
          'fixed top-[104px] z-10 hidden h-[calc(100vh-6.5rem)] w-full shrink-0 overflow-y-auto',
          'md:sticky md:block',
        )}
      >
        <ScrollArea>
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </ScrollArea>
      </aside>

      <main
        className={cn(
          'relative',
          'lg:gap-10',
          'xl:grid xl:grid-cols-[1fr_300px]',
        )}
      >
        <div className='mx-auto w-full min-w-0'>
          <Breadcrumb className='mb-4'>
            <BreadcrumbContent href='/docs/introduction'>
              Docs
            </BreadcrumbContent>
            <BreadcrumbSeparator />
            <BreadcrumbContent href='/docs/components'>
              Components
            </BreadcrumbContent>
            <BreadcrumbSeparator />
            <BreadcrumbContent href={doc.slug} isActive={true}>
              {doc.title}
            </BreadcrumbContent>
          </Breadcrumb>

          <div className='mb-4'>
            <h1 className='scroll-m-20 text-4xl font-bold'>{doc.title}</h1>

            {doc.description && (
              <p className='text-lg text-greyText'>{doc.description}</p>
            )}
          </div>

          {doc.radix && (
            <div className='flex items-center space-x-2'>
              {doc.radix?.link && <Link href={doc.radix.link}>Radix UI</Link>}
              {doc.radix?.api && (
                <Link href={doc.radix.api}>API Reference</Link>
              )}
            </div>
          )}
          <Mdx code={doc.body.code} />
        </div>

        <div className={cn('hidden text-sm', 'xl:block')}>
          <div className='sticky top-[104px] h-[calc(100vh-6.5rem)] overflow-hidden'>
            <ScrollArea>
              <DashboardTableOfContents toc={toc} />
            </ScrollArea>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Docs;
