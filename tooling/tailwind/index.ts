import type { Config } from 'tailwindcss';

import colors from './colors';
import fontSize from './fontSize';

export default {
  darkMode: 'class',
  content: [''],
  theme: {
    colors,
    fontSize,
    extend: {},
  },
  plugins: [],
} satisfies Config;
