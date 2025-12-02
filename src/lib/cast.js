// src/lib/cast.js

// Placeholder assets for avatar images. In a real Astro project, these would 
// point to files in your public/ or assets/ folder.
const AVATAR_PLACEHOLDERS = {
    NOVI: '/images/cast/novi-avatar.png',
    KERNEL: '/images/cast/kernel-avatar.png',
    BUGSYBOO: '/images/cast/bugsyboo-avatar.png',
    AUNT_SONAR: '/images/cast/sonar-avatar.png',
    AUDI: '/images/cast/audi-avatar.png',
    FLOPPY: '/images/cast/floppy-avatar.png',
    CODEX: '/images/cast/codex-avatar.png',
    ENIGMA: '/images/cast/enigma-avatar.png',
    BUGGY: '/images/cast/buggy-avatar.png',
    PAL: '/images/cast/pal-avatar.png',
    SUPPORT: '/images/cast/fallback-avatar.png', // Generic fallback
};

/**
 * Defines the static data for all characters in the narrative.
 * The 'affiliation' determines the visual theme (border color, name color).
 */
export const CHARACTERS = [
    // --- CORE CHARACTERS ---
    {
        name: "Kernel",
        tagline: "The Skeptical Curator",
        affiliation: "secondary", // Maps to accent-secondary
        idCode: "CORE-0000",
        avatarSrc: AVATAR_PLACEHOLDERS.KERNEL,
        motto: "Emotional data is unreliable noise. Only traceable cause and effect yields meaningful output.",
        personality: "Analytical, methodical, deterministic, and deeply skeptical of all things non-quantifiable.",
        type: "Core Characters",
    },
    {
        name: "Novi",
        tagline: "The Applied Hacker",
        affiliation: "primary", // Maps to accent-primary
        idCode: "CORE-0001",
        avatarSrc: AVATAR_PLACEHOLDERS.NOVI,
        motto: "I don't break logic. Just... just... stretch it until you find something new.",
        personality: "Curious, spontaneous, metaphor-rich, and prone to being seriously ironic.",
        type: "Core Characters",
    },
    
    
    // --- THREAD UNIT (SUPPORTING CAST) ---
    {
        name: "Bugsyboo",
        tagline: "The Silent Debugger",
        affiliation: "support",
        idCode: "THRD-0010",
        avatarSrc: AVATAR_PLACEHOLDERS.BUGSYBOO,
        motto: "Quak.",
        personality: "A passive, inanimate listener. The silent catalyst for low-level debugging.",
        type: "Thread Unit",
    },
    {
        name: "Aunt Sonar",
        tagline: "The Human Auditor",
        affiliation: "support",
        idCode: "THRD-0011",
        avatarSrc: AVATAR_PLACEHOLDERS.AUNT_SONAR,
        motto: "A proper grown-up life requires standards, schedules, and predictable outcomes, not philosophical chaos.",
        personality: "Firm, pragmatic, highly organized, and often exasperated by Novi's lack of structure. She seeks to enforce 'adult' protocol.",
        type: "Thread Unit",
    },    
    {
        name: "Audi",
        tagline: "Human Dynamo Mini-Mite",
        affiliation: "support",
        idCode: "THRD-0100",
        avatarSrc: AVATAR_PLACEHOLDERS.AUDI,
        motto: "Life is a game! We're here to run and jump. Catch me if you can!",
        personality: "Vibrant, eager, and naturally expressive and full of motion.",
        type: "Thread Unit",
    },
    {
        name: "Floppy",
        tagline: "Human Dynamo Lite",
        affiliation: "support",
        idCode: "THRD-0101",
        avatarSrc: AVATAR_PLACEHOLDERS.FLOPPY,
        motto: "I remember every turn! The world is my playground, and every detail matters.",
        personality: "Enthusiastic, observant, lightning-fast, and equipped with a photographic memory.",
        type: "Thread Unit",
    },
    {
        name: "Codex",
        tagline: "Human Dynamo Pro",
        affiliation: "support",
        idCode: "THRD-0110",
        avatarSrc: AVATAR_PLACEHOLDERS.CODEX,
        motto: "Running to the next riddle! Life is a puzzle, and I've got the key.",
        personality: "Enthusiastic, kinetic, highly analytical, and relentless in his pursuit of solutions.",
        type: "Thread Unit",
    },
    {
        name: "Enigma",
        tagline: "Human Dynamo Max",
        affiliation: "support",
        idCode: "THRD-0111",
        avatarSrc: AVATAR_PLACEHOLDERS.ENIGMA,
        motto: "Action equals results! I'm running the numbers and the race, and I always calculate the win.",
        personality: "Quick-witted, driven, energetic, and focused on tangible outcomes.",
        type: "Thread Unit",
    },
    {
        name: "Buggy",
        tagline: "The Center of the Universe",
        affiliation: "support",
        idCode: "THRD-1000",
        avatarSrc: AVATAR_PLACEHOLDERS.BUGGY, 
        motto: "Why settle for a part? I am the Star — always the center of the design, darling.",
        personality: "Charismatic, flashy, and intensely competitive.",
        type: "Thread Unit",
    },
    {
        name: "Pal",
        tagline: "The Queen of Elegance",
        affiliation: "support",
        idCode: "THRD-1001",
        avatarSrc: AVATAR_PLACEHOLDERS.PAL,
        motto: "I speak when it matters. I travel because stillness feels too small. And yes, I am loyal to coffee.",
        personality: "Calm, composed, observant; a gentle presence with precise movements.",
        type: "Thread Unit",
    }
];

/**
 * Utility function to get characters grouped by their 'type'
 */
export function getCharacterGroups() {
    const groups = CHARACTERS.reduce((acc, char) => {
        const type = char.type;
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(char);
        return acc;
    }, {});
    
    // Convert to array for easy mapping in Astro
    return Object.entries(groups);
}