import { z } from 'zod';

export const navItemSchema = z.object({
  title: z.string(),
  href: z.string().optional(),
  disabled: z.boolean().optional(),
  external: z.boolean().optional(),
  label: z.string().optional(),
});
