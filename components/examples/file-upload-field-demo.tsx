'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { FileUploadField } from '@/components/form-fields/FileUploadField';
import { Button } from '@/components/ui/button';
import { optionalFilesSchema } from '@/lib/validations/file-upload';

const demoSchema = z.object({
  images: optionalFilesSchema.max(3, 'Upload no more than three images.'),
});

type DemoInput = z.input<typeof demoSchema>;
type DemoOutput = z.output<typeof demoSchema>;

export function FileUploadFieldDemo() {
  const form = useForm<DemoInput, unknown, DemoOutput>({
    resolver: zodResolver(demoSchema),
    defaultValues: { images: [] },
  });

  function onSubmit(values: DemoOutput) {
    toast.success('Upload example submitted', {
      description: `${values.images.length} image(s) selected.`,
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className='space-y-5'
    >
      <FileUploadField
        control={form.control}
        name='images'
        mode='image'
        label='Project images'
        description='Upload up to three JPG, PNG, GIF, or WebP images.'
        multiple
        maxFiles={3}
      />

      <Button type='submit'>Submit example</Button>
    </form>
  );
}
