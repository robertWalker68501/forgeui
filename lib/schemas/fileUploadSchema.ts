import { z } from 'zod';

export const uploadedFileSchema = z.object({
  key: z.string().min(1),
  name: z.string().min(1),
  url: z.string().url(),
  size: z.number().nonnegative(),
  type: z.string().min(1),
});

export const optionalFilesSchema = z.array(uploadedFileSchema);

export const requiredFileSchema = z
  .array(uploadedFileSchema)
  .min(1, 'Please upload a file.');

export const requiredImageSchema = z
  .array(uploadedFileSchema)
  .min(1, 'Please upload an image.');
