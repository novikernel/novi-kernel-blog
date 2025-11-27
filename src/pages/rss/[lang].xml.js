// src/pages/rss/[lang].xml.js

import rss from '@astrojs/rss';
import { getLatestPosts } from '../../lib/posts';

export async function getStaticPaths() {
    return [
        { params: { lang: 'en' } },
        { params: { lang: 'bn' } },
    ];
}

export async function GET(context) {
    const { lang } = context.params;

    // Get posts filtered by language
    const posts = getLatestPosts({ limit: 100, lang });

    // Base site URL
    const siteUrl = "https://novikernel.com";

    // Localized metadata
    const meta = {
        en: {
            title: "Novi // Kernel | English Archive",
            description:
                "The official English-language archive documenting the ongoing conflict between Logic and Intuition.",
            language: "en-us",
        },
        bn: {
            title: "নোভী // কার্ণেল | বাংলা আর্কাইভ",
            description:
                "যুক্তি ও আবেগের মধ্যে চলমান সংঘাতের বাংলা-ভাষাভিত্তিক সরকারী আর্কাইভ।",
            language: "bn",
        },
    };

    const { title, description, language } = meta[lang] || meta.en;

    // Convert posts into RSS items
    const items = posts.map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/${lang}/blog/${post.slug}/`,
    }));

    return rss({
        title,
        description,
        site: siteUrl,
        items,
        stylesheet: '/rss/pretty-feed.xsl',
        customData: `<language>${language}</language>`,
    });
}
