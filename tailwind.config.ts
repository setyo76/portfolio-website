import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#000000', // Hitam pekat sesuai desain baru
          card: '#0a192f',
          light: '#112240',
        },
        primary: {
          DEFAULT: '#14b8a6', // Teal yang lebih solid sesuai desain tombol
          dark: '#0d9488',
          light: '#2dd4bf',
        },
        accent: '#00d9ff',
      },
      fontFamily: {
        // Font Sans default menggunakan Inter
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        // Menambahkan font Serif khusus untuk teks "END"
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['96px', { lineHeight: '0.85', letterSpacing: '-0.02em' }],
        'display-3xl': ['4.5rem', { lineHeight: '1.1' }],
        'display-2xl': ['3.75rem', { lineHeight: '1.1' }],
        'display-xl': ['3rem', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
};

export default config;