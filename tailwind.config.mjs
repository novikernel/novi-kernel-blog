/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        // --- 🎨 BRAND CORE (Novi // Kernel) ---
        'accent-primary': '#D63C3C',        // Passion (Novi): Crimson Red
        'accent-secondary': '#5B5F66',       // Logic (Kernel): Slate Gray
        
        // 🧱 NEUTRAL SYSTEM (Theme Agnostic Roles)
        'neutral-dark': '#1E1E1E',          // Charcoal: Primary text color
        'neutral-light': '#FAFAFA',         // Ivory White: Primary background color

        // 🧩 SUPPORTIVE PALETTE
        'accent-muted': '#E5D8C8',          // Harmony/Balance: Muted Sand
        'support-muted': '#7D8B94',         // Cool Steel (Good for subtle borders/dividers)
        'support-tertiary': '#4C6A7F',      // Steel Blue (Tertiary detail)

        // 🚦 SYSTEM STATUS COLORS (Must be distinct from brand accents)
        // Note: Using standard hex codes to ensure universal recognition for errors/success
        'status-error': '#EF4444',          // Bright Red (Standard UI Error, distinct from accent-primary)
        'status-warning': '#FBBF24',        // Standard Amber/Yellow
        'status-success': '#10B981',        // Muted Green/Teal

        // --- HYPERLINK COLORS (New Semantic Mapping) ---
        'accent-link': '#4C6A7F',          // Steel Blue (For standard links)
        'accent-link-visited': '#8B4E4E',  // Muted Maroon (For visited links)
        
      },
      fontFamily: {
        'heading': ['Poppins', 'ui-sans-serif', 'system-ui'], 
        'body': ['Inter', 'ui-sans-serif', 'system-ui'],
        'mono': ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [typography],
}
