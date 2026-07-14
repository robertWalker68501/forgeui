'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { FormFieldControl } from '@/components/form-fields/FormFieldControl';
import { Button } from '@/components/ui/button';

const demoSchema = z.object({
  email: z.email('Enter a valid email address.'),
  category: z.string().min(1, 'Select a category.'),
  updates: z.boolean(),
  message: z.string().max(250).optional(),
});

type DemoValues = z.infer<typeof demoSchema>;

export function FormFieldControlDemo() {
  const form = useForm<DemoValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      email: '',
      category: '',
      updates: false,
      message: '',
    },
  });

  function onSubmit(values: DemoValues) {
    toast.success('Example submitted', {
      description: JSON.stringify(values),
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className='space-y-5'
    >
      <FormFieldControl
        control={form.control}
        name='email'
        type='email'
        label='Email address'
        placeholder='you@example.com'
        required
      />

      <FormFieldControl
        control={form.control}
        name='category'
        type='select'
        label='Category'
        placeholder='Select a category'
        options={[
          { label: 'Forms', value: 'forms' },
          { label: 'Editors', value: 'editors' },
          { label: 'Data', value: 'data' },
        ]}
        required
      />

      <FormFieldControl
        control={form.control}
        name='updates'
        type='checkbox'
        label='Send component updates'
        description='Receive release notes when new components are published.'
      />

      <FormFieldControl
        control={form.control}
        name='message'
        type='textarea'
        label='Message'
        placeholder='Write a short message...'
        rows={4}
      />

      <Button type='submit'>Submit example</Button>
    </form>
  );
}
