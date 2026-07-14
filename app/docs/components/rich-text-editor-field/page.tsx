import {
  CodeBlock,
  ComponentPreview,
  DocsPageHeader,
  DocsPagination,
  PropsTable,
} from '@/components/docs';

import { RichTextEditorDemo } from '@/components/examples';

const PREVIEW_CODE = `<RichTextEditorField
  control={form.control}
  name="content"
  label="Post content"
  preset="standard"
  height={500}
  required
/>`;

export default function RichTextEditorFieldPage() {
  return (
    <article>
      <DocsPageHeader
        title='Rich Text Editor Field'
        description='A Shadcn-style TinyMCE field with React Hook Form, Zod, UploadThing image uploads, toolbar presets, and light/dark theme support.'
        category='Editors'
        status='Stable'
      />

      <ComponentPreview
        code={PREVIEW_CODE}
        previewClassName='items-start'
      >
        <RichTextEditorDemo />
      </ComponentPreview>

      <section
        id='installation'
        className='scroll-mt-24 pt-14'
      >
        <h2 className='text-2xl font-semibold'>Installation</h2>
        <CodeBlock
          language='bash'
          code='npm install @tinymce/tinymce-react next-themes'
          className='mt-5'
        />
        <p className='text-muted-foreground mt-5 leading-7'>
          Add your Tiny Cloud key to
          <code className='bg-muted mx-1 rounded px-1.5 py-0.5 text-sm'>
            NEXT_PUBLIC_TINYMCE_API_KEY
          </code>
          and configure the UploadThing
          <code className='bg-muted mx-1 rounded px-1.5 py-0.5 text-sm'>
            imageUploader
          </code>
          endpoint.
        </p>
      </section>

      <section
        id='usage'
        className='scroll-mt-24 pt-14'
      >
        <h2 className='text-2xl font-semibold'>Usage</h2>
        <CodeBlock
          code={PREVIEW_CODE}
          className='mt-5'
        />
      </section>

      <section
        id='api-reference'
        className='scroll-mt-24 pt-14'
      >
        <h2 className='text-2xl font-semibold'>API reference</h2>
        <PropsTable
          rows={[
            {
              name: 'control',
              type: 'Control<TFieldValues>',
              required: true,
              description: 'The React Hook Form control object.',
            },
            {
              name: 'name',
              type: 'FieldPath<TFieldValues>',
              required: true,
              description: 'The field that stores TinyMCE HTML.',
            },
            {
              name: 'preset',
              type: '"simple" | "standard" | "full"',
              defaultValue: '"standard"',
              description: 'Selects the available editor tools.',
            },
            {
              name: 'height',
              type: 'number',
              defaultValue: '500',
              description: 'Editor height in pixels.',
            },
            {
              name: 'required',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Displays the required state and asterisk.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Disables editing and image uploads.',
            },
          ]}
        />
      </section>

      <DocsPagination
        previous={{
          title: 'File Upload Field',
          href: '/docs/components/file-upload-field',
        }}
      />
    </article>
  );
}
