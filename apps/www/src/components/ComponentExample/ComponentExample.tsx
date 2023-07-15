import {
  Children as ReactChildren,
  useMemo,
  type HTMLAttributes,
  type ReactElement,
} from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/Tabs';
import { CopyButton, CopyWithClassNamesButton } from '~/components';
import { cn } from '~/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
  // extractClassName?: boolean;
  extractedClassNames?: string;
  align?: 'center' | 'start' | 'end';
  src?: string;
}

const ComponentExample = ({
  children,
  className,
  extractedClassNames,
  align = 'center',
  src: _,
  ...props
}: Props) => {
  const [Example, Code, ...Children] = ReactChildren.toArray(
    children,
  ) as ReactElement[];

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const codeString: string = useMemo(() => {
    if (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      typeof Code?.props['data-rehype-pretty-code-fragment'] !== 'undefined'
    ) {
      const [, Button] = ReactChildren.toArray(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
        Code.props.children,
      ) as ReactElement[];

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
      return Button?.props?.value || Button?.props?.__rawString__ || null;
    }
  }, [Code]);

  return (
    <div
      className={cn('group relative my-4 flex flex-col space-y-2', className)}
      {...props}
    >
      <Tabs className='relative mr-auto w-full' defaultValue='preview'>
        <div className='flex items-center justify-between pb-3'>
          <TabsList className='w-full justify-start rounded-none border-b bg-transparent p-0'>
            <TabsTrigger
              className={cn(
                'rounded-nonde relative border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-greyText shadow-none transition-none',
                'data-[state=active]:border-b-greyLine data-[state=active]:text-greyTextContrast data-[state=active]:shadow-none',
              )}
              value='preview'
            >
              Preview
            </TabsTrigger>

            <TabsTrigger
              className={cn(
                'rounded-nonde relative border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-greyText shadow-none transition-none',
                'data-[state=active]:border-b-greyLine data-[state=active]:text-greyTextContrast data-[state=active]:shadow-none',
              )}
              value='code'
            >
              Code
            </TabsTrigger>
          </TabsList>

          {extractedClassNames ? (
            <CopyWithClassNamesButton
              className='absolute right-4 top-20'
              classNames={extractedClassNames}
              value={codeString}
            />
          ) : (
            codeString && (
              <CopyButton
                className='absolute right-4 top-20'
                value={codeString}
              />
            )
          )}
        </div>

        <TabsContent value='preview'>
          <div
            className={cn('flex min-h-[350px] justify-center p-10', {
              'items-center': align === 'center',
              'items-start': align === 'start',
              'items-end': align === 'end',
            })}
          >
            {Example}
          </div>
        </TabsContent>

        <TabsContent value='code'>
          <div className='flex flex-col space-y-4'>
            <div
              className={cn(
                'w-full rounded-md',
                '[&_button]:hidden',
                '[&_pre]:max=h[350px] [&_pre]:my-0 [&_pre]:overflow-auto',
              )}
            >
              {Code}
            </div>

            {Children?.length ? (
              <div
                className={cn(
                  'rounded-md',
                  '[&_button]:hidden',
                  '[&_pre]:max=h[350px] [&_pre]:my-0 [&_pre]:overflow-auto',
                )}
              >
                {Children}
              </div>
            ) : null}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComponentExample;
