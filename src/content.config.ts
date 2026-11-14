import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    offers: z.array(z.object({ title: z.string(), text: z.string() })),
    forWho: z.array(z.string()),
    deliverables: z.array(z.string()),
  }),
});

const formations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/formations" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    level: z.enum(["Initiation", "Intermédiaire", "Avancé"]),
    duration: z.string(),
    format: z.array(z.enum(["En entreprise", "Inter-entreprises", "En ligne"])),
    audience: z.string(),
    objectives: z.array(z.string()),
    certification: z.string().optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    draft: z.boolean().default(false),
  }),
});

const equipe = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/equipe" }),
  schema: z.object({
    name: z.string(),
    credentials: z.string().optional(),
    role: z.string(),
    certifications: z.array(z.string()),
    order: z.number(),
    photo: z.string().optional(),
    linkedin: z.string().url().optional(),
  }),
});

export const collections = { services, formations, articles, equipe };
