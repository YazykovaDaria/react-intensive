import { z } from 'zod';

export const articleSchema = z.object({
  title: z.string().min(1, 'Requaried field').max(100, 'Max 100 symbols'),
  content: z.discriminatedUnion('type', [
    z.object({ type: z.literal('draft') }),
    z.object({
      type: z.literal('published'),
      description: z
        .string()
        .min(10, 'Min 10 symbols')
        .max(1000, 'Max 1000 symbols'),
      isNew: z.boolean().optional(),
    }),
  ]),
});

export type CreateArticleValues = z.infer<typeof articleSchema>;
