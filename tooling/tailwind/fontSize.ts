import { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config';

type FontSize =
  | ResolvableTo<
    KeyValuePair<
      string,
      | string
      | [fontSize: string, lineHeight: string]
      | [
        fontSize: string,
        configuration: Partial<{
          lineHeight: string;
          letterSpacing: string;
          fontWeight: string | number;
        }>,
      ]
    >
  >
  | undefined;

const fontSize: FontSize = {
  xs: ['0.75rem', '1.125rem'],
  sm: ['0.875rem', '1.25rem'],
  base: ['1rem', '1.5rem'],
  lg: ['1.125rem', '1.75rem'],
  xl: ['1.25rem', '1.875'],
  '2xl': ['1.5rem', '1.4375rem'],
  '3xl': [
    '1.875rem',
    {
      lineHeight: '2.375rem',
      letterSpacing: '-0.02em',
    },
  ],
  '4xl': [
    '2.25rem',
    {
      lineHeight: '2.75rem',
      letterSpacing: '-0.02em',
    },
  ],
  '5xl': [
    '3rem',
    {
      lineHeight: '3.75rem',
      letterSpacing: '-0.02em',
    },
  ],
  '6xl': [
    '3.75rem',
    {
      lineHeight: '4.5rem',
      letterSpacing: '-0.02em',
    },
  ],
  '7xl': [
    '4.5rem',
    {
      lineHeight: '5.625rem',
      letterSpacing: '-0.02em',
    },
  ],
};

export default fontSize;
