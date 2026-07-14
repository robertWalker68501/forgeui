import * as z from 'zod';

export const createUserSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Name must be at least 3 characters in length' })
      .max(30, { message: 'Name must not exceed 30 characters in length' }),
    email: z.email({ message: 'Please enter a valid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters in length' })
      .max(30, { message: 'Password must not exceed 30 characters in length' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
