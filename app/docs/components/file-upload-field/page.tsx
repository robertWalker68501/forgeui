import {
  CodeBlock,
  ComponentPreview,
  DocsPageHeader,
  DocsPagination,
  PropsTable,
} from '@/components/docs';

import { FileUploadFieldDemo } from '@/components/examples';

const PREVIEW_CODE = `<FileUploadField
  control={form.control}
  name="images"
  mode="image"
  label="Project images"
  multiple
  maxFiles={3}
/>`;

export default function FileUploadFieldPage() {
  return (
    <article>
      <DocsPageHeader
        title='File Upload Field'
        description='A reusable UploadThing field for image and general-file uploads with React Hook Form, Zod validation, progress, previews, and removal controls.'
        category='Forms'
        status='New'
      />

      <ComponentPreview code={PREVIEW_CODE}>
        <FileUploadFieldDemo />
      </ComponentPreview>

      <section
        id='installation'
        className='scroll-mt-24 pt-14'
      >
        <h2 className='text-2xl font-semibold'>Installation</h2>
        <CodeBlock
          language='bash'
          code='npm install uploadthing @uploadthing/react'
          className='mt-5'
        />
        <p className='text-muted-foreground mt-5 leading-7'>
          The component expects typed UploadThing helpers plus the
          <code className='bg-muted mx-1 rounded px-1.5 py-0.5 text-sm'>
            imageUploader
          </code>
          and
          <code className='bg-muted mx-1 rounded px-1.5 py-0.5 text-sm'>
            fileUploader
          </code>
          endpoints.
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
              description: 'The field that stores uploaded metadata.',
            },
            {
              name: 'mode',
              type: '"image" | "file"',
              required: true,
              description:
                'Selects the UploadThing endpoint and preview behavior.',
            },
            {
              name: 'multiple',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Allows more than one uploaded item.',
            },
            {
              name: 'maxFiles',
              type: 'number',
              defaultValue: '1',
              description: 'Maximum files retained in the form value.',
            },
            {
              name: 'required',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Displays the required state and optional asterisk.',
            },
          ]}
        />
      </section>

      <DocsPagination
        previous={{
          title: 'Form Field Control',
          href: '/docs/components/form-field-control',
        }}
        next={{
          title: 'Rich Text Editor Field',
          href: '/docs/components/rich-text-editor-field',
        }}
      />
    </article>
  );
}
