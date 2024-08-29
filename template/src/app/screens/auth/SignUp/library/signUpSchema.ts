import { z } from 'zod';

export const signUpSchema = z.object({
  username: z.string(),
  email: z.string().email('Email not valid.'),
  password: z.string().min(5, 'Password too short.'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
