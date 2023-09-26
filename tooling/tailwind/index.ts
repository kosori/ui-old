import type { Config } from 'tailwindcss';

import colors from './colors';

export default {
  darkMode: 'class',
  content: [''],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
} satisfies Config;
