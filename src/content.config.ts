import { file, glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const experiences = defineCollection({
    loader: file('data.json', {
        parser: (text) => {
            console.log(JSON.parse(text).experiences)
            return JSON.parse(text).experiences
        },
    }),
    schema: z.object({
        slug: z.string(),
        instance: z.string(),
        website: z.string().url(),
        start: z.string().date(),
        end: z.string().date().optional(),
        description: z.string(),
    }),
})

const blogs = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'blogs' }),
    schema: z.object({
        title: z.string(),
        published_date: z.string().date(),
        excerpt: z.string(),
    }),
})

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'projects' }),
    schema: z.object({
        name: z.string(),
        category: z.array(z.string()),
        description: z.string(),
        url: z.object({
            website: z.string().url().optional(),
            repo: z.string().url().optional(),
        }),
    }),
})

export const collections = { experiences, blogs, projects }
