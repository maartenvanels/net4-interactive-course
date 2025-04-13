/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Define your color palette explicitly
        blue: {
          '50': '#eff6ff',
          '100': '#dbeafe',
          '600': '#2563eb',
          '700': '#1d4ed8',
        },
        gray: {
          '50': '#f9fafb',
          '200': '#e5e7eb',
          '300': '#d1d5db',
          '400': '#9ca3af',
          '600': '#4b5563',
          '700': '#374151',
          '800': '#1f2937',
        },
        indigo: {
          '100': '#e0e7ff',
          '200': '#c7d2fe',
          '600': '#4f46e5',
          '700': '#4338ca',
          '900': '#312e81',
        },
        purple: {
          '100': '#f3e8ff',
        },
      },
    },
  },
} 