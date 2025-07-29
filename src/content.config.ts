import { file, glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const personal = defineCollection({
    loader: file('data.json', {
        parser: (text) => JSON.parse(text).personal,
    }),
    schema: z.object({
        full_name: z.string(),
        gender: z.string(),
        birthday: z.string().date(),
        nationality: z.string(),
        ethnicity: z.string(),
        recidency: z.string(),
        height_cm: z.number(),
        weight_kg: z.number(),
        hair_color: z.string(),
        eye_color: z.string(),
        gamer_tag: z.string(),
        email: z.string(),
        socials: z.array(
            z.object({
                name: z.string(),
                url: z.string().url(),
            }),
        ),
    }),
})

const experiences = defineCollection({
    loader: file('data.json', {
        parser: (text) => JSON.parse(text).experiences,
    }),
    schema: z.object({
        id: z.string(),
        instance: z.string(),
        website: z.string().url(),
        type: z.string(),
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

export const collections = { personal, experiences, blogs, projects }
