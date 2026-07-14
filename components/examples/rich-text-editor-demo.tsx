'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';

import { RichTextEditorField } from '@/components/form-fields/editor/rich-text-editor-field';
import { hasRichTextContent } from '@/lib/validations/rich-text';

const demoSchema = z.object({
  content: z.string().refine(hasRichTextContent, 'Add some content.'),
});

type DemoValues = z.infer<typeof demoSchema>;

export function RichTextEditorDemo() {
  const form = useForm<DemoValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: { content: '' },
  });

  function onSubmit(values: DemoValues) {
    toast.success('Editor example submitted', {
      description: `${values.content.length} HTML characters.`,
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className='space-y-5'
    >
      <RichTextEditorField
        control={form.control}
        name='content'
        label='Post content'
        description='Add formatted text and uploaded images.'
        placeholder='Write something...'
        preset='standard'
        height={400}
        required
      />

      <Button type='submit'>Submit example</Button>
    </form>
  );
}
