import { defineCollection, z } from 'astro:content';

// Schema for lektioner (lessons)
const lessonsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().describe('Titel på lektionen'),
    order: z.number().describe('Rækkefølge i kurset'),
    difficulty: z.enum(['Begynder', 'Øvet', 'Ekspert']).default('Begynder'),
    category: z.string().describe('Kategori (f.eks. "Basics", "ChatGPT", "Copilot")'),
    description: z.string().optional().describe('Kort beskrivelse af lektionen'),
    pubDate: z.date().optional(),
    updatedDate: z.date().optional(),
    brandColor: z.string().default('#000000').describe('Brand farve for lektionen'),
    estimatedTime: z.string().optional().describe('Estimeret tid (f.eks. "30 min")'),
    worksIn: z.string().optional().describe('Virker i (f.eks. "ChatGPT, Claude")'),
  }),
});

// Schema for teknikker (techniques/modules within lessons)
const techniquesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().describe('Titel på teknikken'),
    order: z.number().describe('Rækkefølge i lektionen'),
    lesson: z.string().describe('Hvilken lektion teknikken tilhører (slug)'),
    estimatedTime: z.string().default('2 min').describe('Estimeret tid'),
    worksIn: z.string().optional().describe('Virker i (f.eks. "Alle værktøjer")'),
    breadcrumb: z.string().optional().describe('Breadcrumb label'),
    description: z.string().optional().describe('Kort beskrivelse'),
    sectionsJson: z.string().optional().describe('Serialized sections JSON'),
  }),
});

export const collections = {
  'lessons': lessonsCollection,
  'techniques': techniquesCollection,
};

