import {
  CodeBlock,
  ComponentPreview,
  DocsPageHeader,
  DocsPagination,
  PropsTable,
} from '@/components/docs';
import { FormFieldControlDemo } from '@/components/examples';

const PREVIEW_CODE = `<FormFieldControl
  control={form.control}
  name="email"
  type="email"
  label="Email address"
  placeholder="you@example.com"
  required
/>`;

export default function FormFieldControlPage() {
  return (
    <article>
      <DocsPageHeader
        title='Form Field Control'
        description='A reusable, fully typed React Hook Form component supporting inputs, textareas, selects, checkboxes, descriptions, validation errors, and optional required indicators.'
        category='Forms'
        status='Stable'
      />

      <ComponentPreview code={PREVIEW_CODE}>
        <FormFieldControlDemo />
      </ComponentPreview>

      <section
        id='installation'
        className='scroll-mt-24 pt-14'
      >
        <h2 className='text-2xl font-semibold'>Installation</h2>
        <p className='text-muted-foreground mt-3 leading-7'>
          Add the Shadcn primitives used by the component, then copy the ForgeUI
          component into your project.
        </p>
        <CodeBlock
          language='bash'
          code='npx shadcn@latest add field input textarea select checkbox'
          className='mt-5'
        />
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
              description: 'A typed field path from the form schema.',
            },
            {
              name: 'type',
              type: '"text" | "email" | "textarea" | "select" | "checkbox" | ...',
              required: true,
              description: 'Determines which control is rendered.',
            },
            {
              name: 'required',
              type: 'boolean',
              defaultValue: 'false',
              description:
                'Marks the field as required and can display an asterisk.',
            },
            {
              name: 'showRequiredAsterisk',
              type: 'boolean',
              defaultValue: 'true',
              description: 'Controls the visible red required asterisk.',
            },
          ]}
        />
      </section>

      <DocsPagination
        previous={{ title: 'Introduction', href: '/docs' }}
        next={{
          title: 'File Upload Field',
          href: '/docs/components/file-upload-field',
        }}
      />
    </article>
  );
}
