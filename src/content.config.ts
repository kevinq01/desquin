import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    name: z.string(),
    order: z.number().default(99),
    excerpt: z.string(),
    status: z.enum(['disponible', 'en-operacion', 'en-desarrollo', 'sistema']),
    statusLabel: z.string(),
    tech: z.array(z.string()),
    video: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    liveUrl: z.string().optional(),
    ctaLabel: z.string().optional(),
    demoLinks: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
    flow: z.array(z.string()).optional(),
    flowBranch: z
      .object({
        label: z.string(),
        items: z.array(z.string()),
        note: z.string().optional(),
      })
      .optional(),
    whatsappMessage: z.string(),
  }),
});

export const collections = { proyectos };
