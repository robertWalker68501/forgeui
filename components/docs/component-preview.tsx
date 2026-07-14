import type { ReactNode } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { CodeBlock } from './code-block';

export function ComponentPreview({
  children,
  code,
  previewClassName,
}: {
  children: ReactNode;
  code: string;
  previewClassName?: string;
}) {
  return (
    <section
      id='preview'
      className='scroll-mt-24 pt-2'
    >
      <Tabs
        defaultValue='preview'
        className='mt-6'
      >
        <TabsList>
          <TabsTrigger value='preview'>Preview</TabsTrigger>
          <TabsTrigger value='code'>Code</TabsTrigger>
        </TabsList>
        <TabsContent value='preview'>
          <div
            className={`bg-card mt-4 flex min-h-80 items-center justify-center rounded-xl border p-6 sm:p-10 ${previewClassName ?? ''}`}
          >
            <div className='w-full max-w-xl'>{children}</div>
          </div>
        </TabsContent>
        <TabsContent value='code'>
          <CodeBlock
            code={code}
            className='mt-4'
          />
        </TabsContent>
      </Tabs>
    </section>
  );
}
