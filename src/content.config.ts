import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  // Files starting with _ are ignored (drafts / examples).
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    period: z.string(),
    kind: z.string(), // e.g. company / personal / team / research
    order: z.number().default(99), // lower comes first
    tags: z.array(z.string()).default([]),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    cover: z.string().optional(), // image in /public, shown on cards
    coverAlt: z.string().default(''),
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
