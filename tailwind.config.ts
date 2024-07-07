import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customCyan: '#24f5f8',
        customCyanDark: '#1bc3d1',
        customOrange: '#f9a14f',
        customOrangeDark: '#e08c40',
        customPink: '#e1386a',
        customPinkDark: '#bf3158',
        customPurple: '#893988',
        customPurpleDark: '#6f306f',
        customMauve: '#d4a6b3',
        customMauveDark: '#b08996',
        customRed: '#f2356a',
        customRedDark: '#ca2d54',
        customTeal: '#1ec6aa',
        customTealDark: '#19a28e',
        customNavy: '#1e1f3e',
        customNavyDark: '#171730',
        customCream: '#fbf1eb',
        customCreamDark: '#e0d8cf',
      },
      boxShadow: {
        'bottom-cyan': '0 4px 6px -1px rgba(36, 245, 248, 0.5), 0 2px 4px -1px rgba(36, 245, 248, 0.3)',
        'bottom-orange': '0 4px 6px -1px rgba(249, 161, 79, 0.5), 0 2px 4px -1px rgba(249, 161, 79, 0.3)',
        'bottom-pink': '0 4px 6px -1px rgba(225, 56, 106, 0.5), 0 2px 4px -1px rgba(225, 56, 106, 0.3)',
        'bottom-purple': '0 4px 6px -1px rgba(137, 57, 136, 0.5), 0 2px 4px -1px rgba(137, 57, 136, 0.3)',
        'bottom-mauve': '0 4px 6px -1px rgba(212, 166, 179, 0.5), 0 2px 4px -1px rgba(212, 166, 179, 0.3)',
        'bottom-red': '0 4px 6px -1px rgba(242, 53, 106, 0.5), 0 2px 4px -1px rgba(242, 53, 106, 0.3)',
        'bottom-teal': '0 4px 6px -1px rgba(30, 198, 170, 0.5), 0 2px 4px -1px rgba(30, 198, 170, 0.3)',
        'bottom-navy': '0 4px 6px -1px rgba(30, 31, 62, 0.5), 0 2px 4px -1px rgba(30, 31, 62, 0.3)',
        'bottom-cream': '0 4px 6px -1px rgba(251, 241, 235, 0.5), 0 2px 4px -1px rgba(251, 241, 235, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
