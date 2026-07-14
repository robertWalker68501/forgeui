import { ArrowRight, Blocks, FileText, UploadCloud } from 'lucide-react';
import Link from 'next/link';

import { DocsPageHeader } from '@/components/docs';

const COMPONENTS = [
  {
    title: 'Form Field Control',
    description:
      'Inputs, textarea, selects, and checkboxes in one typed React Hook Form component.',
    href: '/docs/components/form-field-control',
    icon: Blocks,
  },
  {
    title: 'File Upload Field',
    description:
      'UploadThing image and file uploads with progress, previews, and validation.',
    href: '/docs/components/file-upload-field',
    icon: UploadCloud,
  },
  {
    title: 'Rich Text Editor Field',
    description:
      'TinyMCE with UploadThing, Zod, React Hook Form, and light/dark themes.',
    href: '/docs/components/rich-text-editor-field',
    icon: FileText,
  },
];

export default function DocsPage() {
  return (
    <article>
      <DocsPageHeader
        title='ForgeUI Documentation'
        description='Production-ready React components and application patterns built for real Next.js projects.'
      />

      <section className='mt-12 grid gap-4'>
        {COMPONENTS.map((component) => {
          const Icon = component.icon;
          return (
            <Link
              key={component.href}
              href={component.href}
              className='group bg-card hover:bg-muted/20 rounded-xl border p-6 transition-colors hover:border-teal-500/40'
            >
              <div className='flex items-start gap-4'>
                <span className='flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600'>
                  <Icon className='size-5' />
                </span>
                <div className='min-w-0 flex-1'>
                  <div className='flex items-center justify-between gap-4'>
                    <h2 className='font-semibold'>{component.title}</h2>
                    <ArrowRight className='text-muted-foreground size-4 transition-transform group-hover:translate-x-1 group-hover:text-teal-600' />
                  </div>
                  <p className='text-muted-foreground mt-2 text-sm leading-6'>
                    {component.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </article>
  );
}
