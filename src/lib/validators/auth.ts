// src/lib/validators/auth.ts
import { z } from "zod";

export const SignupSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email(),
  password: z.string().min(6),
  address: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  pin: z.string().optional()
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});
