import { type HTMLAttributes, type ImgHTMLAttributes } from 'react';
import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/Accordion';
import { AspectRatio } from '~/components/ui/AspectRatio';
import {
  CodeBlockWrapper,
  ComponentExample,
  ComponentSource,
  CopyButton,
  CopyNpmCommandButton,
} from '~/components';
import { type Event, type NpmCommands } from '~/types';
import { cn } from '~/utils';

const MdxComponents = {
  h1: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn('mt-2 scroll-m-20 text-4xl font-bold', className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold',
        'first:mt-0',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn('mt-8 scroll-m-8 text-xl font-semibold', className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn('mt-8 scroll-m-8 text-lg font-semibold', className)}
      {...props}
    />
  ),
  h5: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn('mt-8 scroll-m-8 text-lg font-semibold', className)}
      {...props}
    />
  ),
  h6: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn('mt-8 scroll-m-8 text-base font-semibold', className)}
      {...props}
    />
  ),
  a: ({ className, ...props }: HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn('[&:not(:first-child)]:mt-6', className)} {...props} />
  ),
  ul: ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  bloquote: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} className={cn('', className)} {...props} />
  ),
  hr: ({ ...props }: HTMLAttributes<HTMLHRElement>) => (
    <hr className={cn('my-4', 'md:my-8')} {...props} />
  ),
  table: ({ className, ...props }: HTMLAttributes<HTMLTableElement>) => (
    <div className={cn('my-4', 'md:my-8')}>
      <table
        className={cn('my-6 w-full overflow-y-auto', className)}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('m-0 border-t p-0', 'even:bg-mauveBgSubtle', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold',
        '[&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border px-4 py-2 text-left',
        '[&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    __rawString__,
    __withMeta__,
    __src__,
    __event__,
    __npmCommand__,
    __pnpmCommand__,
    __yarnCommand__,
    ...props
  }: HTMLAttributes<HTMLPreElement> & {
    __rawString__?: string;
    __withMeta__?: boolean;
    __src__?: string;
    __event__?: Event['name'];
  } & NpmCommands) => (
    <>
      <pre
        className={cn(
          'mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border py-4',
          'data-[theme=dark]:bg-mauveTextContrast data-[theme=light]:bg-mauveBase',
          className,
        )}
        {...props}
      />

      {__rawString__ && !__npmCommand__ && (
        <CopyButton
          className={cn('absolute right-4 top-4', __withMeta__ && 'top-16')}
          event={__event__}
          // src={__src__}
          value={__rawString__}
        />
      )}
      {__npmCommand__ && __yarnCommand__ && __pnpmCommand__ && (
        <CopyNpmCommandButton
          className={cn('absolute right-4 top-4', __withMeta__ && 'top-16')}
          commands={{
            __npmCommand__,
            __pnpmCommand__,
            __yarnCommand__,
          }}
        />
      )}
    </>
  ),
  code: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'mb-12 ml-4 border-l pl-8',
        '[&>h3]:step',
        '[counter-reset:step]',
        className,
      )}
      {...props}
    />
  ),
  Image,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AspectRatio,
  ComponentExample,
  ComponentSource,
  CodeBlockWrapper: ({ ...props }) => (
    <CodeBlockWrapper className='rounded-md border' {...props} />
  ),
  Steps: ({ ...props }) => (
    <div
      className={cn(
        'mb-12 ml-4 border-l pl-8',
        '[&>h3]:step',
        '[counter-reset:step]',
      )}
      {...props}
    />
  ),
};

export default MdxComponents;
