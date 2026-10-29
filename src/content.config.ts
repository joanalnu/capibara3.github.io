import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const missions = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/missions' }),
  schema: z.object({
    title: z.string(),
    navTitle: z.string().optional(), // short label for the project sub-navigation
    tagline: z.string().optional(),
    summary: z.string(),
    status: z.string().optional(),
    order: z.number().default(0),
    // Optional banner shown at the top of the page (e.g. a programme hold)
    notice: z.object({ title: z.string(), text: z.string() }).optional(),
    // Optional key/value facts shown in a "Mission snapshot" box
    snapshot: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  }),
});

export const collections = { blog, missions };
