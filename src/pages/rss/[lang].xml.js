import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
    return [
        { params: { lang: 'en' } },
        { params: { lang: 'bn' } },
    ];
}

export async function GET(context) {
    const { lang } = context.params;

    // 1. Fetch ALL posts
    const allPosts = await getCollection('blog');

    // 2. Filter and Sort
    const posts = allPosts
        .filter((post) => post.data.lang === lang)
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

    // Base site URL
    const siteUrl = "https://novikernel.com";

    // Localized metadata
    const meta = {
        en: {
            title: "Novi // Kernel | English Archive",
            description: "The official English-language archive documenting the ongoing conflict between Logic and Intuition.",
            language: "en-us",
        },
        bn: {
            title: "নোভী // কার্ণেল | বাংলা আর্কাইভ",
            description: "যুক্তি ও আবেগের মধ্যে চলমান সংঘাতের বাংলা-ভাষাভিত্তিক সরকারী আর্কাইভ।",
            language: "bn",
        },
    };

    const { title, description, language } = meta[lang] || meta.en;

    // Convert posts into RSS items
    const items = posts.map((post) => {
        // 💥 FIX 1: Clean the slug (Remove 'en/' or 'bn/')
        // We create a Regex dynamically based on the current lang
        const cleanSlug = post.slug.replace(new RegExp(`^${lang}/`), '');

        return {
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            // 💥 FIX 2: Correct URL structure (/blog/en/slug instead of /en/blog/slug)
            link: `/blog/${lang}/${cleanSlug}/`,
        };
    });

    return rss({
        title,
        description,
        site: siteUrl,
        items,
        stylesheet: '/rss/pretty-feed.xsl',
        customData: `<language>${language}</language>`,
    });
}
