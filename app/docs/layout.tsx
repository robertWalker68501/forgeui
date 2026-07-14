import type { ReactNode } from 'react';

import {
  DocsHeader,
  DocsSidebar,
  DocsTableOfContents,
} from '@/components/docs';

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className='bg-background min-h-screen'>
      <DocsHeader />

      <div className='mx-auto grid w-full max-w-375 grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)_220px]'>
        <aside className='hidden border-r lg:block'>
          <div className='sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto px-5 py-8'>
            <DocsSidebar />
          </div>
        </aside>

        <main className='min-w-0 px-5 py-10 sm:px-8 lg:px-10'>
          <div className='mx-auto max-w-3xl'>{children}</div>
        </main>

        <aside className='hidden border-l xl:block'>
          <div className='sticky top-16 px-5 py-8'>
            <DocsTableOfContents />
          </div>
        </aside>
      </div>
    </div>
  );
}
