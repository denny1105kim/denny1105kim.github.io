import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  // 파일명이 _ 로 시작하면 무시돼요 (초안/예시용).
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
    kind: z.string(), // 회사 / 개인 / 팀 / 연구
    order: z.number().default(99), // 작을수록 위에 표시
    tags: z.array(z.string()).default([]),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
