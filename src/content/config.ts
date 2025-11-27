import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content", // Astro will auto-load md/mdx inside src/content/blog/**
  schema: ({ image }) =>
    z.object({
      // Basic fields
      title: z.string().max(80),
      description: z.string().max(160),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      subject: z.string().describe("Long-running series or book title"),
      chapter: z.number().int().positive().describe("Chapter number in the series"),
      lang: z.enum(["en", "bn"]).describe("Language code"),
      focus: z.enum(["Novi", "Kernel", "Neutral"])
               .default("Novi")
               .describe("Dominant narrative voice"),
    }),
});

export const collections = {
  blog,
};
