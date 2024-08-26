import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Email not valid.'),
  password: z.string().min(5, 'Password too short.'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
